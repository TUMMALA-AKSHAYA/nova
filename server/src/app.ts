import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat.routes";
import uploadRoutes from "./routes/upload.routes";
import dashboardRoutes from "./routes/dashboardRoutes";
import executiveBriefRoutes from "./routes/executiveBrief.routes";
import modelsRoutes from "./routes/models.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/models", modelsRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/executive-brief", executiveBriefRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "NOVA Backend Running 🚀",
  });
});

app.listen(3001, () => {
  console.log("🚀 Server running on 3001");
});