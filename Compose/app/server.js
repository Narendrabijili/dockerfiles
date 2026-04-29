const express = require("express");
const mysql = require("mysql2");

const app = express();

// DB connection with retry
function connectDB() {
  const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "testdb"
  });

  db.connect(err => {
    if (err) {
      console.log("DB not ready, retrying in 5 sec...");
      setTimeout(connectDB, 5000);
    } else {
      console.log("Connected to MySQL");
    }
  });

  return db;
}

const db = connectDB();

// API
app.get("/", (req, res) => {
  res.send("Hello from Node.js + MySQL + Docker!");
});

// Users API
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});