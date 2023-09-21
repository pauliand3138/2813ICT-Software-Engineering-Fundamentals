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
    const formid = uuidv4();
    try {
        const newForm = await pool.query(
            `INSERT INTO form(formid, location, date, landscapeid, vegtypeid, vegstageid, burnsevid, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8);`,
            [
                formid,
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

//edit
app.put("/forms/:formid", async (req, res) => {
    const { formid } = req.params;
    console.log(formid);
    const {
        location,
        date,
        landscapeid,
        vegtypeid,
        vegstageid,
        burnsevid,
        userid,
    } = req.body;

    try {
        const editForm = await pool.query(
            "UPDATE form SET userid = $1, location = $2, date = $3, landscapeid = $4, vegtypeid = $5, vegstageid = $6, burnsevid = $7 WHERE formid = $8;",
            [
                userid,
                location,
                date,
                landscapeid,
                vegtypeid,
                vegstageid,
                burnsevid,
                formid,
            ]
        );
        res.json(editForm);
    } catch (err) {
        console.log(err);
    }
});

// delete
app.delete("/forms/:formid", async (req, res) => {
    const { formid } = req.params;

    try {
        const deleteForm = await pool.query(
            "DELETE FROM form WHERE formid = $1;",
            [formid]
        );
        res.json(deleteForm);
    } catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
