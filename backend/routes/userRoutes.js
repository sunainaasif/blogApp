import express from "express";
import { getAllUsers, signup } from "../controllers/userController";

const router = express.Router()

router.get("/" , getAllUsers)
router.post("/signup" , signup)
export default router;