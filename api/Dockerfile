FROM python:3-alpine

WORKDIR /app/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./ ./
RUN pip install -r ./requirements.txt

WORKDIR /app/pinapi

CMD ["gunicorn", "-b", "0.0.0.0:8000", "--timeout", "60", "pinapi.wsgi"]