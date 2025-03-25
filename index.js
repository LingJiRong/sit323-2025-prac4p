const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse query parameters
app.use(express.json());

// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Invalid input. num1 and num2 must be numbers.' });
  }
  res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Invalid input. num1 and num2 must be numbers.' });
  }
  res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Invalid input. num1 and num2 must be numbers.' });
  }
  res.json({ result: Number(num1) * Number(num2) });
});

// Division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Invalid input. num1 and num2 must be numbers.' });
  }
  if (Number(num2) === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  res.json({ result: Number(num1) / Number(num2) });
});

// Validation function
function isValidNumbers(num1, num2) {
  return !isNaN(num1) && !isNaN(num2);
}

app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
