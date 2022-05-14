from redis_om import get_redis_connection

from settings import settings

redis = get_redis_connection(
    host=settings.db_host,
    port=settings.db_port,
    password=settings.db_password,
    decode_responses=True
)
