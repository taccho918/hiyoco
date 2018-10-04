FROM python:3.5.2

COPY requirements/ ./requirements/

RUN pip install -r ./requirements/development.txt

COPY hiyoco/ ./hiyoco/
COPY settings.yml ./
COPY informant_server.py ./

CMD [ "python", "./informant_server.py", "50052" ]