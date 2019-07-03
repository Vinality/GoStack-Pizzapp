# GoStack-Pizzapp

```This application was built as the final assignment for the Rocketseat Bootcamp (fifth edition). Based on Node.js, React.js and React Native.```

## Backend - Node.js
### REST API built using Adonis.js which is a Node.js framework. The API consists of a MVC application.

### Features:
* User auth/session
* Password encryption
* JWT Auth
* Lucid Model ORM

### Routes: 
* **/users** - POST - Registers a new User.
* **/session** - POST - Authenticates an User.
* Auth-only routes:
  * **/prod** - POST - Registers a new Product.
  * **/type** - POST - Registers a new Type for a given Product.
  * **/size** - POST - Registers a new Size for a given Type.
  * **/menu** - GET - Shows all Products.
  * **/menu/:prod** - GET - Shows all Types for a given Product.
  * **/menu/size:type** - GET - Shows all the possible Sizes for a given Type of product.
  * **/cart** - POST - Returns all data related to the id's requested.
  * **/order** - POST - Creates a new Order with the user_id, address, observations and the products.
  * **/order** - GET - If the current user is and administrator, it returns all Orders from all user. Else, it returns all Orders made by the current customer.

## Frontend - React.js
### Simple app for administrators only to see all current Orders listed with information such as products, total price, address and observations.

### Features: 
* Flux Architecture
* Reactotron as debug tool
* Redux Reducers and Actions
* Redux Sagas
* Duck Patterns
* Auth token on localStorage
* PropTypes validation
* Flex Box styles
* Styled Components
* Moment.js for Date parsing
* React Toastify for notifications
* Axios for API calls

![alt text](https://raw.githubusercontent.com/Vinality/GoStack-Pizzapp/master/images/front.png)

## Mobile - React Native
### Mobile app for clients only that allows users to browse items and order products

### Screens:
* Login
* Signup
* Products (Pizzas, Drinks)
* Product Types (Pizza flavors, drink brand)
* Size (Large, medium, small, 300ml)
* Cart
* Previous Orders
* Finish Order

### Features:
The mobile version features most of the ones cited above on the React Web App, it also includes the [CEP Promise API](https://github.com/filipedeschamps/cep-promise) by Filipe Deschamps to fill in the address as the user inputs the zipcode.

![alt text](https://raw.githubusercontent.com/Vinality/GoStack-Pizzapp/master/images/mobile.png)

