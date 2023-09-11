from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_read_root():
    import os

    print(f"{os.environ=}")
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}
