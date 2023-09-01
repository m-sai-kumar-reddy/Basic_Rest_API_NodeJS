# Basic_Rest_API_NodeJS

I'm prepared a basic API which is used to fetch the data according to the crud operation. 
Here are some you need to install some of the packages and need a local `MYSQL` database 

Hit nmp i <packages>
Packages are
>bcrypt
>cros
>dotenv
>express
>mysql2
>nodemon
These are the main packages you need to install them.
In My SQL database you need to create a customer table in any of the schemas you have. After that you also create a file name `.env` nothing there after and before it is the file you need to create.

If declare the variables I mentioned

APP_PORT = <define the port that when your sever started it will run on this port you define you can define what ever number you want>
DB_PORT = <define the port that your local mysql database running on by default it will be `3306`>
DB_HOST = `localhost` it self is the host
DB_USER = <define the user name that you given when you creating a database>
DB_PASS = <password of the database you created>
MY_SQL_DB = <it is the schema to be defined when you created a table in Data Base>

To start the server you just need to go to the required directory and hit `npm start` it will start the server it.

If you need to check the API you need to download a software of POSTMAN which is best for API testing.

You get the link in the terminal itself copy that.
For any request just use `/` 
To make a request to get data you need to send some body along with the request like this
{
    "customer_name": "john",
    "customer_age": 22,
    "customer_email": "john@interone.com",
    "customer_password": "john",
    "customer_gender": "M"
}

manipulate the methods of requests to get the results.
for get -> `/`
for get by id -> `/:id`
for post -> `/`
for put -> `/:id`
for delte -> `/:id`
