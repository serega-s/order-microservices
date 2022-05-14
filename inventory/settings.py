from pydantic import BaseSettings


class Settings(BaseSettings):
    db_host: str
    db_port: int
    db_password: str
    frontend_url: str

    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'


settings = Settings()
