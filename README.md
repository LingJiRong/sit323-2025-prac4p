# SIT323/SIT737 - Task 4.1P: Calculator Microservice

## Overview
This microservice offers basic calculator functionality using Node.js and Express.

## Endpoints
- `/add?num1=10&num2=5`
- `/subtract?num1=10&num2=5`
- `/multiply?num1=10&num2=5`
- `/divide?num1=10&num2=5`

## How to Run
1. Clone the repo
2. Run `npm install`
3. Run `node index.js`
4. Use a browser/Postman to test the endpoints

## Error Handling
- Non-numeric inputs return 400 with error message
- Division by zero is handled

## Author
Ling – SIT323/SIT737
