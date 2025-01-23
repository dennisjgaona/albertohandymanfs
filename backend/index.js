const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", router);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT} `);
});
