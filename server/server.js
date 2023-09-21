const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

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

// Create new
app.post("/forms", async (req, res) => {
    const {
        location,
        date,
        landscapeid,
        vegtypeid,
        vegstageid,
        burnsevid,
        userid,
    } = req.body;
    console.log(
        location,
        date,
        landscapeid,
        vegtypeid,
        vegstageid,
        burnsevid,
        userid
    );
    const id = uuidv4();
    try {
        const newForm = await pool.query(
            `INSERT INTO form(formid, location, date, landscapeid, vegtypeid, vegstageid, burnsevid, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
            [
                id,
                location,
                date,
                landscapeid,
                vegtypeid,
                vegstageid,
                burnsevid,
                userid,
            ]
        );
        res.json(newForm);
    } catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
