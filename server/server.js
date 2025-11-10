import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// Read products data from products.json
app.get("/products", (req, res) => {
  const data = fs.readFileSync("./data/products.json", "utf-8");
  res.send(JSON.parse(data));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
