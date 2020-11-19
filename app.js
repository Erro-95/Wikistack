const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const db = require("./models/index");
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.send(layout());
});

app.listen(PORT, () => console.log(`connected to port ${PORT}`));
