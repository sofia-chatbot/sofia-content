# Sofia Chatbot Repository

Welcome to the Sofia Chatbot repository. Here, you'll find all the necessary files and instructions to deploy and run the Sofia Chatbot.

Sofia is a chatbot that provides information about situations of digital gender violence in Chile. Also resources and tools for your digital self-care. You can find this project deployed and live in production at [Sofia Chat](https://sofiachat.cl/).

This repository consists of two main directories: "web" and "chat".

## Directory Struture

The directory structure is as follows:

```
.
├── LICENSE
├── README.md
├── chat
│ //Contains all data related to the bot's responses, including intents and entities (in Dialogflow format)
└── web
  //Contains all necessary files for running the flask web application
```

## Web Directory

The Web directory contains a Flask project which powers the chat bot's web UI.

To run this project, you will need Python installed in your machine. We recommend Python 3.10. You need to install the dependencies listed in the `requirements.txt` file. You can do this by running the following command: `pip install -r requirements.txt`.

To run, execute the following command: `python run.py`.

Additionally, this directory includes a Dockerfile that allows you to build a Docker image of the web application and run it. This can be helpful when deploying the chatbot in a production environment.

**Note**: You'll need the necessary Google API permissions to use this feature. Place your Dialogflow credentials into a file named `dialogflow_credentials.json`.

## Chat Directory

The Chat archive contains a backup of the Dialogflow project that is used to power the bot's responses. You can export this project file and import it into a Dialogflow ES project on Google Cloud to set up the bot's responses and logic.

## Importing Dialogflow Project

To import the Dialogflow project data contained in this repository into a new Dialogflow ES project, create a Dialogflow project in Google Cloud Then, navigate to the 'Settings' menu in Dialogflow and and select the 'Export and Import' option. Remember to compress the chat folder into a .zip file before importing.

## Running in Docker

You can build and run the Docker image using the following commands:

Build the image: `docker build -t sofia .`
Run the image: `docker run -p 80:80 sofia`

By default, the Docker image attempts to connect to a PostgreSQL database. You can adjust the database connection parameters in the `.env` file.

If you don't have access to a PostgreSQL database, you can disable the `PRODUCTION=1` parameter in the Dockerfile before building the image. This causes the application to use a local SQLite database instead.

## Contribute

Feel free to submit issues or open pull requests to improve this project. Happy coding!
