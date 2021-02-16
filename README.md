## :computer: General info
A simple api for barbecue manager app

Features:
- CRUD for barbecues
- CRUD for barbecues members
	
## :rocket: Technologies
Project is created with:
* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)

## :paperclip: Dependencies
It has a react web app, found [here](https://github.com/henrique-lothammer/barbecue).
	
## :triangular_ruler: Setup

* To run this project, first you'll need to run a mysql database based on this file [barbecue.sql](https://github.com/henrique-lothammer/barbecue-backend/blob/master/barbecue.sql).

* Then adjust the connection string in [src/database/index.js](https://github.com/henrique-lothammer/barbecue-backend/blob/master/src/database/index.js) to your database. 

* Finnaly to run this project, install it locally using yarn:

```
# Install dependencies
$ yarn

# Run the server
$ yarn dev
```
