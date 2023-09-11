FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY app requirements.txt /backend/
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
EXPOSE 8000