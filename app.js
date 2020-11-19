const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models/index");
const app = express();
const PORT = 3000;
const userRoute = require("./routes/users");
const wikiRoute = require("./routes/wiki");

app.use("/wiki", wikiRoute);
app.use("/users", userRoute);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async () => {
  await db.sync();
  app.listen(PORT, () => console.log(`connected to port ${PORT}`));
};

init();
