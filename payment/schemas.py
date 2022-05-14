from pydantic import BaseModel


class OrderIn(BaseModel):
    product_id: str
    quantity: int

    class Config:
        orm_mode = True
