import { Router } from "express";
import { getMe, refreshToken, register, logout } from "../controllers/auth.controller.js";

const authRouter = Router();


/**
 * POST /api/auth/register
 */
authRouter.post("/register", register);

/**
 * GET /api/auth/get-me
 */
authRouter.get("/get-me", getMe);

/**
 * GET /api/auth/refresh-token
 */
authRouter.get("/refresh-token", refreshToken);

/**
 * GET /api/auth/logout
 */
authRouter.get("/logout", logout)

export default authRouter;