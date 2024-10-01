import express from "express";
import { getBook } from "../controller/book.controller.js";
// import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

// router.use(authenticate);

router.get("/" , getBook);

export default router;