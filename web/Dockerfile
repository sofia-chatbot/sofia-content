FROM python:3.10

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

# Modify .env file to set PRODUCTION = True
RUN sed -i 's/PRODUCTION=0/PRODUCTION=1/g' .env

RUN python init_db.py

EXPOSE 80

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:80"]

# Run:
# docker build -t sofia .
# docker run -p 80:80 sofia
