from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import router
from settings import settings

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_methods=['*'],
    allow_headers=['*']
)
app.include_router(router)
