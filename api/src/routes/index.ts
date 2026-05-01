import { Router } from "express";
import { tripsRouter } from "./trips.js";
import { chatRouter } from "./chat.js";
import { searchRouter } from "./search.js";

export const router = Router();

router.use("/trips", tripsRouter);
router.use("/chat", chatRouter);
router.use("/search", searchRouter);
