from pydantic import BaseModel


class ProductIn(BaseModel):
    name: str
    price: float
    quantity: int

    class Config:
        orm_mode = True
