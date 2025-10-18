import express from "express";
import cors from "cors";
import nhlRoutes from "./routes/nhlRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// API маршруты
app.use("/api/nhl", nhlRoutes);

// Проверка статуса
app.get("/", (req, res) => res.send("NHL API server running ✅"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
