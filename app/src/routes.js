import { Router } from "express";
const router = Router();

// POST /api/items { "name": "foo" }
router.post("/items", async (req, res, next) => {
  const { name } = req.body;
  const result = await req.db.query(
    "INSERT INTO items (name) VALUES ($1) RETURNING *",
    [name]
  );
  res.status(201).json(result.rows[0]);
});

// GET /api/items
router.get("/items", async (req, res, next) => {
  const result = await req.db.query("SELECT * FROM items");
  res.json(result.rows);
});

export { router };
