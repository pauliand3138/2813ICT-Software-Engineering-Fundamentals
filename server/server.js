const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

// Get all form submissions
app.get("/forms/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        const forms = await pool.query("SELECT * FROM form WHERE userId= $1", [
            userId,
        ]);
        res.json(forms.rows);
    } catch (err) {
        console.error(err);
    }
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
