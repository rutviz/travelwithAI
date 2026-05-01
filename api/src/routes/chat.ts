import { Router } from "express";
import type { ApiResponse, TripPlanningSession } from "@travelwithai/shared";

export const chatRouter = Router();

chatRouter.post("/session", (_req, res) => {
  res.status(201).json({ data: null, success: true, message: "Not implemented" });
});

chatRouter.get("/session/:id", (req, res) => {
  const response: ApiResponse<TripPlanningSession | null> = {
    data: null,
    success: false,
    message: `Session ${req.params.id} not found`,
  };
  res.json(response);
});

chatRouter.post("/session/:id/message", (_req, res) => {
  res.json({ data: null, success: true, message: "Not implemented" });
});
