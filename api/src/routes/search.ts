import { Router } from "express";
import type { ApiResponse, Flight, Hotel, Activity } from "@travelwithai/shared";

export const searchRouter = Router();

searchRouter.get("/flights", (_req, res) => {
  const response: ApiResponse<Flight[]> = { data: [], success: true };
  res.json(response);
});

searchRouter.get("/hotels", (_req, res) => {
  const response: ApiResponse<Hotel[]> = { data: [], success: true };
  res.json(response);
});

searchRouter.get("/activities", (_req, res) => {
  const response: ApiResponse<Activity[]> = { data: [], success: true };
  res.json(response);
});
