import express from "express";
import dotenv from "dotenv";
import pool from "./db.js";
import urlRouter from "./route/urlRouter.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Test connection for the database
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is:${result.rows[0].current_database} `);
});
//mideleware

//

app.use("/url", urlRouter);

app.get("/:shortId", (req, res) => {
  const shortId = req.params.shortId;
  pool.query("select * from url where shortid=$1", [shortId], (err, result) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (result.rows.length === 0) {
      return res.status(404).send("URL not found");
    }
    const redirectUrl = result.rows[0].redirecturl;
    res.redirect(redirectUrl);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
