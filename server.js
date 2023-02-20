const express = require("express");
const app = express();
const { Restaurant } = require("./models/index");
const { sequelize } = require("./db");
const { response } = require("express");

const port = 3000;

//TODO: Create your GET Request Route Below:

app.get("/restaurants", async (req, res) => {
  const allRes = await Restaurant.findAll();
  res.JSON(allRes);
});

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
