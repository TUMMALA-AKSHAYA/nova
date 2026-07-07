import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes";
import uploadRoutes from "./routes/upload.routes";
import dashboardRoutes from "./routes/dashboardRoutes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/upload", uploadRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/dashboard", dashboardRoutes);

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