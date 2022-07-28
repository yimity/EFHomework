# HomeWork Projects

This repo is used to complete homework. Before you do homework, you should learn frontend tech stack

how to start:
+ `pnpm install`
+ `pnpm run dev`


## Tech Requirement
+ typescript + react
+ use any fetch tools you like.
+ **Your code will have higher score if**:
  + You split the task into smaller tasks, complete them one by one, and commit them in different git commits with proper commit messages
  + The code is clean and easy to read and understand
  + The variable and function names are considered carefully
  + Small and meaningful functions for complex logic
  + No typo and has good code format
  + Provide proper comments in code (and only when it's necessary)
+ After finish your work, please create a pull request to master branch.
+ Show your best practice.


## Component Requirement
+ Components like Button, Input, Modal and etc : Use `React-Bootstrap`'s component. 
+ Custom Component, if there is no suitable component, please create new by yourself(please consider reusable)
  

## Restful API:
mock API was provided by `msw.js`, you can see related code in `src/mocks/handlers.ts`.
users data will be reset after refresh page.
*You can debug or test api in home page*

+ `GET` Get all users with pagination
```javascript
/users/?pageSize=50&pageIndex=1
```
+ `GET` Get specify user By id
```javascript
/users/:userId
```
+ `PUT` update specify user
```javascript
/users/:userId

//body
{
  name: 'John Bill',
  age: 43
  //...other fields should be updated
}
```
+ `POST` add a new user
```javascript
/users

//body
{
  name: 'John Bill',
  age: 43
  //...other fields should be updated
}
```
+ `Delete` remove specify user
```javascript
/users/:userId
```