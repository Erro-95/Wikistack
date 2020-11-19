const { Router } = require("express");
const express = require("express");
const router = express.Router();
const addpage = require("../views/addPage");
const layout = require("../views/layout");

router.get("/", (req, res) => {
  res.send(layout());
});

router.get("/add", (req, res) => {
  res.send(addpage());
});

router.post("/", (req, res) => {
  res.send(addpage());
});

// I could not push the repo...

module.exports = router;
