# Sofia Chatbot Repository

Welcome to the Sofia Chatbot repository. Sofia is a chatbot that provides information about situations of digital gender violence in Chile. Also resources and tools for your digital self-care. You can find this project deployed and live in production at [Sofia Chat](https://sofiachat.cl/).

Here, you'll find all the necessary files and instructions to deploy and run the Sofia Chatbot.

Please, be aware that in order to run this project you should have basic understanding and skills in Software Development.

This project uses the following technologies:

- Python
- PostgreSQL
- React
- Docker
- Digital Ocean

## Directory Struture

The directory structure is as follows:

```
.
├── LICENSE
├── README.md
├── legacy_version // Contains files from the legacy version of the project (deprecated)
├── frontend // Contains files from the legacy version of the project
└── backend  // Contains directories for the backend services


```

## Frontend directory

The project utilizes a variety of modern technologies to create a robust and efficient front-end application. At its core, the project is built using TypeScript, which provides static typing to enhance code quality and maintainability. The build process is managed by Vite, a fast and lightweight build tool that offers a smooth development experience with features like hot module replacement. For styling, the project employs Tailwind CSS, a utility-first CSS framework that allows for rapid UI development with a highly customizable design system.

In terms of structure, the project is organized into several key directories and configuration files. The main project directory, named houses all the essential components. The src directory contains the source code, where the main application logic resides. Static assets, such as the favicon, are stored in the public directory. Configuration for Nginx, which is used as a web server, is located in the nginx/conf.d directory.

The project also includes several configuration files to streamline development and deployment. The .eslintrc.cjs file is used for configuring ESLint, a tool that helps maintain code quality by identifying and fixing issues. The Dockerfile and .dockerignore files are crucial for containerizing the application, making it easier to deploy in various environments. Additionally, the tsconfig.json and tsconfig.node.json files provide TypeScript configurations for both the client-side and Node.js environments.

Dependency management is handled by Yarn, as indicated by the package.json and yarn.lock files. These files list all the project dependencies and ensure consistent installations across different environments. The postcss.config.js file is used to configure PostCSS, a tool for transforming CSS with JavaScript plugins, further enhancing the styling capabilities of the project.

## Backend directory

The core of the application is developed using **Python** and leverages the **FastAPI** framework to create a high-performance web API. FastAPI is known for its speed and ease of use, making it an excellent choice for building APIs. The application also uses **Uvicorn** as the ASGI server to run the FastAPI application.

For containerization, the project uses **Docker**. The `Dockerfile` provided in the repository outlines the steps to create a Docker image, ensuring that the application can be easily deployed in various environments. The Docker setup includes a `requirements.txt` file that lists all the Python dependencies required for the project, such as `langchain`, `openai`, `fastapi`, `uvicorn`, and database connectors like `psycopg2`.

The chatbot's functionality is enhanced by integrating **OpenAI** and **LangChain** libraries. These libraries are used to create language models and manage the conversational flow. The chatbot can recognize user intents, process messages, and provide responses based on predefined prompts and templates. The integration with OpenAI allows the chatbot to leverage advanced language models for generating responses.

The project also includes a comprehensive database setup using **SQLAlchemy** for ORM (Object-Relational Mapping) and **PostgreSQL** as the database. The database schema includes tables for storing survey data, chat inputs and outputs, and session information. This setup ensures that all interactions with the chatbot are stored and can be retrieved for analysis or reporting purposes.

To handle configuration and environment variables, the project uses **python-dotenv**, which loads environment variables from a `.env` file. This is particularly useful for managing sensitive information like API keys and database credentials.

For testing and validation, the repository includes test scripts and configurations. **Pytest** is used for running tests, and there are specific scripts for stress testing the API to ensure it can handle multiple simultaneous requests efficiently.

The backend code is not publicly available for security reasons. However, if you would like to view it or collaborate on a project using this code, please contact us, and we will be happy to share it with you.

## Contribute

Feel free to submit issues or open pull requests to improve this project.
