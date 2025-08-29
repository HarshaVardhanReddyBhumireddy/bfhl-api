const express = require("express");
const app = express();
app.use(express.json());

// POST /bfhl
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  let numbers = [];
  let alphabets = [];
  let highestLowercase = null;

  for (let item of data) {
    if (/^\d+$/.test(item)) {
      numbers.push(item);
    } else if (/^[A-Za-z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
      if (/[a-z]/.test(item)) {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  }

  res.json({
    is_success: true,
    user_id: "harshavardhanreddybhumireddy_03032005",
    email: "reddyharsha249@gmail.com",
    roll_number: "22BCE20157",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

// GET /bfhl
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
