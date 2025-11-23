import express from "express";
import { signup, login, logout } from "../controllers/auth.controller";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Sign up route called");
});

router.get("/login", (req, res) => {
    res.send("Login route called");
});

router.get("/logout", (req, res) => {
    res.send("Logout route called");
});

export default router;