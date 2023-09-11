# TestingFARPwDockerAndCICD

Testing a project setup for a fullstack web app with FastAPI, Postgresql, React, Vite, Typescript, Docker and CICD pipelines

## Run alembic migration on backend docker container

docker-compose run backend alembic -c app/alembic.ini revision --autogenerate -m "New Migration"
docker-compose run backend alembic -c app/alembic.ini upgrade head
