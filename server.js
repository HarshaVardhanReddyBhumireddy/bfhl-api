const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Routes
app.get("/api/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.post("/api/bfhl", (req, res) => {
  const data = req.body.data || [];
  const user_id = "your_name_ddmmyyyy";
  const email = "your_email@xyz.com";
  const roll_number = "your_roll_number";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet: alphabets.sort().slice(-1),
  });
});
// Export for Vercel
module.exports = app;