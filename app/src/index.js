import express from "express";
import { Pool } from "pg";
import { router } from "./routes.js";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();

app.use(express.json());
app.use((req, res, next) => { req.db = pool; next(); });
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server läuft auf http://localhost:${PORT}, Änderung`)

);
