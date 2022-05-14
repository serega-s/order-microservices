from models import Product


def get_by_pk(pk: str):
    product = Product.get(pk)

    return product
