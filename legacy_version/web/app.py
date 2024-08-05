import logging
from flask import Flask, request, render_template, session
from flask import jsonify
from google.protobuf.json_format import MessageToDict
import uuid

from models import Session, Actions
from models import db
from config import Config
from google.cloud import dialogflow
from datetime import datetime
from user_agents import parse

app = Flask(__name__)
app.config.from_object(Config)

if app.config["PRODUCTION"]:
    db.init_app(app)
else:
    db.init_app(app)
    with app.app_context():
        db.create_all()


@app.route("/antiguo")
def antiguo():
    return render_template("chat_antiguo.html")


@app.route("/faq")
def faq():
    return render_template("faq.html")


@app.route("/tips")
def tips():
    return render_template("tips.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/")
def index():
    return render_template("index.html")


def get_user_session_id():
    if "session_id" not in session:
        # si no hay una sesión existente, genera una nueva
        session["session_id"] = str(uuid.uuid4())
    return session["session_id"]


def get_client_ip():
    if "X-Forwarded-For" in request.headers:
        # Obtén la lista de direcciones IP en el encabezado X-Forwarded-For
        ip_list = request.headers.getlist("X-Forwarded-For")
        # client_ip = ip_list[0]  # La primera dirección IP es la del cliente
        client_ip = ip_list[0].split(",")[0]
    else:
        client_ip = (
            request.remote_addr
        )  # Si no hay encabezado X-Forwarded-For, utiliza remote_addr

    return client_ip


@app.route("/send_message", methods=["POST"])
def send_message():
    data = request.get_json()
    session_id = get_user_session_id()
    client_ip = get_client_ip()

    existing_session = db.session.get(Session, session_id)

    if existing_session is None:
        # If the session does not exist in the database, create a new one
        # Parse user_agent string
        ua_string = request.user_agent.string
        user_agent_data = parse(ua_string)

        # Fill the session information
        new_session = Session(
            id=session_id,
            ip=client_ip,
            session_start=datetime.utcnow(),
            device_type=user_agent_data.device.family,
            device_brand=user_agent_data.device.brand or "",
            device_model=user_agent_data.device.model or "",
            os_family=user_agent_data.os.family,
            os_version=user_agent_data.os.version_string,
            browser_family=user_agent_data.browser.family,
            browser_version=user_agent_data.browser.version_string,
            user_agent_string=ua_string,
        )

        db.session.add(new_session)
        db.session.commit()

    if "message" in data:
        message = data["message"]
        response = detect_intent_texts(
            "chatbot-391106", session_id, message, "es"
        )

        # Crear una nueva acción e insertarla en la base de datos
        new_action = Actions(
            session_id=session_id,
            message=message,
            is_event=False,
            context_intent="",
            post_intent="",
        )
        db.session.add(new_action)
        db.session.commit()

    elif "event" in data:
        event = data["event"]["name"]
        response = detect_intent_texts(
            "chatbot-391106",
            session_id,
            None,
            data["event"]["languageCode"],
            event=event,
        )

        # Crear una nueva acción e insertarla en la base de datos
        new_action = Actions(
            session_id=session_id,
            message=event,
            is_event=True,
            context_intent="",
            post_intent="",
        )
        db.session.add(new_action)
        db.session.commit()

    else:
        return "Invalid request", 400
    return jsonify(response), 200


def detect_intent_texts(
    project_id, session_id, text, language_code, event=None
):
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(project_id, session_id)

    if text:
        text_input = dialogflow.TextInput(
            text=text, language_code=language_code
        )
        query_input = dialogflow.QueryInput(text=text_input)
    else:
        event_input = dialogflow.EventInput(
            name=event, language_code=language_code
        )
        query_input = dialogflow.QueryInput(event=event_input)

    response = session_client.detect_intent(
        session=session, query_input=query_input
    )
    response_dict = MessageToDict(response._pb)

    # print(response_dict)
    return response_dict


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8383)
