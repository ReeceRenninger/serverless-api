# LAB - Class 18

## Project: Serverless-API with DyanmoDB and Dynamoose

### Author: Student/Group Name

### Problem Domain  

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

    Database: DynamoDB
        1 Table required.
    Routing: API Gateway
        POST
        /people - Given a JSON body, inserts a record into the database.
        returns an object representing one record, by its id (##).
        GET
            /people - returns an array of objects representing the records in the database.
            /people/## - returns an object representing one record, by its id (##).
        PUT
        /people/## - Given a JSON body and an ID (##), updates a record in the database.
        returns an object representing one record, by its id (##).
        DELETE
        /people/## - Given an id (##) removes the matching record from the database.
        returns an empty object.
    CRUD Operation Handlers: Lambda Functions


### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/serverless-api/actions/new) 
- [back-end server url](http://xyz.com) (when applicable)

### Collaborators

### Setup

#### `.env` requirements (where applicable)

for now I have none and do not require one


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes / Processes

- GET : `/hello` - specific route to hit
- GET :
- POST :
- PUT :
- DELETE :


#### Tests

- npm test while inside the direct folder

#### UML

![Alt text](assets/serverlessAPIWhiteboard.png)
