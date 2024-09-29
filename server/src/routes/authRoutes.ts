import { Router } from "express";
import { registerUser, loginUser, getUser} from "../controllers/authController.ts";
import authMiddleware from '../middleware/authMiddleware.ts';

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/user', authMiddleware, getUser);

export default router;
