import uvicorn
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db
from starlette.status import HTTP_200_OK, HTTP_503_SERVICE_UNAVAILABLE
from .models.user import User as UserModel
from .schemas.user import UserCreate as UserSchema

load_dotenv(".env")

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/health", status_code=HTTP_200_OK)
async def health_check():
    is_database_healthy = True
    is_dependency_healthy = True

    if is_database_healthy and is_dependency_healthy:
        return {"status": "Healthy"}

    return {"status": "Unhealthy"}, HTTP_503_SERVICE_UNAVAILABLE


@app.post("/user/add", response_model=UserSchema)
def add_user(user: UserSchema):
    db_user = UserModel(
        username=user.username,
        email=user.email,
        full_name=user.full_name,
    )
    db.session.add(db_user)
    db.session.commit()
    return db_user


@app.get("/user")
def get_users():
    users = db.session.query(UserModel).all()
    return users


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
