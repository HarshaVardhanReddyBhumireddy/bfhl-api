const express = require("express");
const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("✅ BFHL API is running! Use /bfhl (GET or POST).");
});

// GET /bfhl
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

// POST /bfhl
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let numbers = [];
    let alphabets = [];
    let highestAlphabet = "";

    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        if (
          highestAlphabet === "" ||
          item.toLowerCase() > highestAlphabet.toLowerCase()
        ) {
          highestAlphabet = item;
        }
      }
    });

    res.json({
      is_success: true,
      user_id: "harsha_b_123",
      email: "your_email@example.com",
      roll_number: "YourRollNumber",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
    });
  } catch (error) {
    res.status(400).json({ is_success: false, message: error.message });
  }
});
// ✅ Export handler for Vercel
module.exports = (req, res) => {
  app(req, res);
};