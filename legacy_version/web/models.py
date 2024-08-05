from sqlalchemy import Column, String, ForeignKey, Integer, Boolean
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

load_dotenv(".env")


db = SQLAlchemy()


class Session(db.Model):
    id = Column(String, primary_key=True)

    # Información de Sesión
    session_start = Column(
        db.DateTime, default=datetime.utcnow
    )  # Cuando empezó la sesión

    # Información del Dispositivo y Navegador
    device_type = Column(String)  # Ejemplo: Desktop, Mobile, Tablet
    device_brand = Column(String)  # Ejemplo: Apple, Samsung, etc.
    device_model = Column(String)  # Ejemplo: iPhone, Galaxy S21, etc.
    os_family = Column(String)  # Ejemplo: iOS, Android, Windows
    os_version = Column(String)  # Ejemplo: 14.3, 10, etc.
    browser_family = Column(String)  # Ejemplo: Chrome, Safari, Firefox
    browser_version = Column(String)  # Ejemplo: 87.0, 14.0, etc.

    # Información de Red
    ip = Column(String)

    user_agent_string = Column(
        String
    )  # Guardar el user_agent completo podría ser útil para futuras referencias
    actions = relationship("Actions", backref="session")


class Actions(db.Model):
    id = Column(Integer, primary_key=True, autoincrement=True)
    session_id = Column(String, ForeignKey("session.id"))
    message = Column(String)
    is_event = Column(Boolean)
    context_intent = Column(String, nullable=True)
    post_intent = Column(String, nullable=True)
