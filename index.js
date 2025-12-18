require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDB, getDB } = require("./database");
app.use(express.json());
app.use(express.static("public"));
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/dashboard.html"));
});

app.get("/warhammer", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/warhammer.html"));
});

app.get("/tyranids", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/tyranids.html"));
});

app.get("/mechanicus", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/mechanicus.html"));
});

async function startServer() {
  await connectDB();
  const db = getDB();
  app.get("/api/data", async (req, res) => {
    const data = await db.collection("warhammer").find().toArray();
    console.log(data);
    res.json(data);
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
