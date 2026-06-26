import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  console.log("✅ Health endpoint was called");

  res.status(200).json({
    status: "ok",
    message: "NOVA Backend Running 🚀",
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});