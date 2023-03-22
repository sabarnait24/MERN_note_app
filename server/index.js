const express = require("express");
const app = express();
var cors = require("cors");

const port = process.env.PORT || 5000;
const db = require("./db/db");

app.use(express.json());
app.use(cors());

app.use("/", require("./route/route"));

app.listen(port, () => {
  console.log(`connection is successful at ${port}`);
});
