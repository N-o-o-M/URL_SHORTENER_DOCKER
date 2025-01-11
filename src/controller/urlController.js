import pool from "../db.js";
import { nanoid } from "nanoid";

const createShortId = () => {
  const shortId = nanoid(8);
  return shortId;
};

const createShortUrl = async (req, res) => {
  const url = req.body.url;
  if (!url) {
    return res.status(400).send("URL is required");
  }
  const shortId = createShortId();
  console.log(shortId);
  try {
    await pool.query("insert into url(shortid,redirectUrl) values($1,$2) ", [
      shortId,
      url,
    ]);
    return res.json({
      shortUrl: shortId,
    });
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};

export { createShortUrl };
