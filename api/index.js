export default function handler(req, res) {
  if (req.method === "GET") {
    // GET /api
    return res.status(200).json({ operation_code: 1 });
  }

  if (req.method === "POST") {
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

      return res.status(200).json({
        is_success: true,
        user_id: "harsha_b_123",
        email: "your_email@example.com",
        roll_number: "YourRollNumber",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
      });
    } catch (error) {
      return res.status(400).json({ is_success: false, message: error.message });
    }
  }

  // If not GET or POST
  return res.status(405).json({ message: "Method Not Allowed" });
}