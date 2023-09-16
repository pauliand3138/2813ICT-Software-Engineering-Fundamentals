const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const pool = require("./db");

// Get all form submissions
app.get("/forms", async (req, res) => {
    try {
        const forms = await pool.query("SELECT * FROM form");
        res.json(forms.rows);
    } catch (err) {
        console.error(err);
    }
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
