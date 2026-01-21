# 🛒 ShoppyGlobe – Node.js REST API

Backend REST API for the **ShoppyGlobe E-commerce Application** built using **Node.js, Express.js, MongoDB, and JWT authentication**.


## ▶️ How to Run the Application

By default, the server runs on **port 4000**.

If the application throws a port-related error, try changing the port number in the `index.js`.

1. Clone the repository  
   `git clone <https://github.com/ajeyajaz/shoppyGlobe-E-commerce-backend.git>`

2. Install dependencies  
   `npm install`

3. write
    `node index.js`


## 🔐 Authentication Note

**NOTE:** Cart routes are protected.

Include JWT token in request header using this format:

x-auth-token: <JWT_TOKEN>


# API Testing Screenshots

## ThunderClient Tests
 
## users
``` 
POST  - http://localhost:4000/register
```
![POST Register](screenshots/thunderclient/register.png)

``` 
POST  - http://localhost:4000/login
```
![POST Login](screenshots/thunderclient/login.png)



## products
``` 
GET  - http://localhost:4000/products
```
![Get Products](screenshots/thunderclient/get-products.png)

``` 
GET  - http://localhost:4000/products/:id
```
![Get Product](screenshots/thunderclient/get-product.png)

``` 
POST  - http://localhost:4000/products/
```
![POST Product](screenshots/thunderclient/post-product.png)

``` 
PUT  - http://localhost:4000/products/
```
![POST Product](screenshots/thunderclient/put-product.png)

```
DELETE  - http://localhost:4000/products/:id
```
![DELETE Product](screenshots/thunderclient/delete-product.png)



## carts -- protected routes

``` 
GET - http://localhost:4000/cart/
```
![Post Cart](screenshots/thunderclient/protected-cart-routes.png)



## carts

``` 
GET - http://localhost:4000/cart/
```
![GET Cart](screenshots/thunderclient/get-cart.png)

``` 
POST - http://localhost:4000/cart/
```
![Post Cart](screenshots/thunderclient/post-cart.png)

``` 
PUT - http://localhost:4000/cart/
```
![Put Cart](screenshots/thunderclient/put-cart.png)

``` 
DELETE - http://localhost:4000/cart/:id
```
![DELETE Cart](screenshots/thunderclient/delete-cart.png)


## MongoDB Collections


``` 
USERS-COLLECTION
```
![DELETE Cart](screenshots/mongodb/product-collection.png)


``` 
PRODUCTS-COLLECTION
```
![DELETE Cart](screenshots/mongodb/product-collection.png)


``` 
CARTS-COLLECTION
```
![DELETE Cart](screenshots/mongodb/cart-collection.png)
