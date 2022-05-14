from fastapi import APIRouter

from helpers import get_by_pk
from models import Product
from schemas import ProductIn

router = APIRouter(prefix='/api/v1', tags=['inventory'])


@router.get('/products', response_model=list[Product])
def get_all():
    return [get_by_pk(pk) for pk in Product.all_pks()]


@router.post('/products', response_model=Product)
def create_one(product_data: ProductIn):
    product = Product(**product_data.dict())
    return product.save()


@router.get('/products/{pk}', response_model=Product)
def get_one(pk: str):
    return get_by_pk(pk)


@router.delete('/products/{pk}')
def delete_one(pk: str):
    Product.delete(pk)
