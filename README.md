# Microservices

## Inventory

To run:

```
python -m pip install -r requirements.txt
python main:app
```

This service lets us CRUD product.

## Payment

To run:

```
python -m pip install -r requirements.txt
python main:app --port=8001
```

This service is used to access first microservice to get product id and after CRUD orders.

### Note:

* Microservices must connect to different databases, I used the same cause only first one is free.
* Dotenv files must be written with your own values to be able to connect databases.

# Frontend

To run:

```
npm install
npm run dev
```

# Tech stack:

* <h4>FastAPI</h4>
* <h4>Redis Cloud</h4>
* <h4>Redis Streams</h4>
* <h4>React</h4>