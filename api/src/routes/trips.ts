import { Router } from "express";
import type { ApiResponse, Trip } from "@travelwithai/shared";

export const tripsRouter = Router();

tripsRouter.get("/", (_req, res) => {
  const response: ApiResponse<Trip[]> = { data: [], success: true };
  res.json(response);
});

tripsRouter.get("/:id", (req, res) => {
  res.json({ data: null, success: false, message: `Trip ${req.params.id} not found` });
});

tripsRouter.post("/", (_req, res) => {
  res.status(201).json({ data: null, success: true, message: "Not implemented" });
});

tripsRouter.patch("/:id", (req, res) => {
  res.json({ data: null, success: true, message: `Trip ${req.params.id} updated` });
});

tripsRouter.delete("/:id", (req, res) => {
  res.json({ data: null, success: true, message: `Trip ${req.params.id} deleted` });
});
