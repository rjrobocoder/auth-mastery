import { Router } from "express";
import { getMe, refreshToken, register, logout, logoutAll } from "../controllers/auth.controller.js";

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
authRouter.get("/logout", logout);

/**
 * GET /api/auth/logout-all
 */
authRouter.get("/logout-all", logoutAll)

export default authRouter;