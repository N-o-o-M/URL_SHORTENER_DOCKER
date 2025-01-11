import express from "express";
import { createShortUrl } from "../controller/urlController.js";
const urlRouter = express.Router();

urlRouter.post("/shorten", createShortUrl);

export default urlRouter;
