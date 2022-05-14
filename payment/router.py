import asyncio

import httpx
from fastapi import APIRouter

from db import redis
from helpers import get_by_pk, order_completed
from models import Order
from schemas import OrderIn
from settings import settings

router = APIRouter(prefix='/api/v1', tags=['payment'])


@router.get('/orders', response_model=list[Order])
def get_all():
    return [get_by_pk(pk) for pk in Order.all_pks()]


@router.get('/orders/{pk}', response_model=Order)
def get_one(pk: str):
    order = Order.get(pk)
    redis.xadd('refund_order', order.dict(), '*')
    return order


@router.post('/orders', response_model=Order)
async def create(order_data: OrderIn):
    async with httpx.AsyncClient() as req:
        res = await req.get(settings.inventory_url + order_data.product_id)
    product = res.json()

    # 20% tax
    order = Order(
        product_id=order_data.product_id,
        price=product['price'],
        fee=0.2 * product['price'],
        total=1.2 * product['price'],
        quantity=order_data.quantity,
        status='pending'
    )
    order.save()
    await asyncio.create_task(order_completed(order))

    return order
