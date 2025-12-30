import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

export default router;