import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// Расписание матчей
router.get("/schedule", async (req, res) => {
  try {
    const response = await fetch("https://statsapi.web.nhl.com/api/v1/schedule");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching schedule:", err);
    res.status(500).json({ error: "Failed to fetch NHL schedule" });
  }
});

export default router;
