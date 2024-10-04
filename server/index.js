// import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./configs/DB.js";
import { router } from "./controller/personsRouter.js";
const app = express();
const PORT = 3400;

connectDB();

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.json());
app.use("/persons", router);

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
