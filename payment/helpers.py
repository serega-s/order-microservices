import asyncio

from db import redis
from models import Order


async def order_completed(order: Order):
    await asyncio.sleep(5)
    order.status = 'completed'
    order.save()

    redis.xadd('order_completed', order.dict(), '*')


def get_by_pk(pk: str):
    order = Order.get(pk)

    return order
