const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse URL-encoded bodies (from form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Show the form at GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Handle form submission at POST /submit
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Thank you, ${name}! We received your email as: ${email}`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
