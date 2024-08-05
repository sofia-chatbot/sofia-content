import os
from dotenv import load_dotenv

load_dotenv(".env")


class Config:
    print(os.getenv("PRODUCTION"))
    PRODUCTION = bool(int(os.getenv("PRODUCTION")))
    print(f"PRODUCTION is set to {PRODUCTION}")

    if PRODUCTION:
        username = os.environ["DB_USERNAME"]
        password = os.environ["DB_PASSWORD"]
        database_name = os.environ["DB_NAME"]
        host = os.environ["DB_HOST"]
        port = os.environ["DB_PORT"]
        SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{username}:{password}@{host}:{port}/{database_name}"

    else:
        SQLALCHEMY_DATABASE_URI = f'sqlite:///{os.path.abspath("db.sqlite3")}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv(
        "SECRET_KEY"
    )  # Esto debería estar en tu archivo .env
