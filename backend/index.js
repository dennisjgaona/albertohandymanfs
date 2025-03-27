const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");

const app = express();

const mongoose = require("mongoose");
const url =
  "mongodb+srv://albertohandymanco:j5vvPsBxl2UJGRZ2@albertohandymanimages.isijp.mongodb.net/?retryWrites=true&w=majority&appName=AlbertoHandyManImages";

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  method: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use("/", router);

mongoose
  .connect(url, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((e) => console.log(e));

const ImageSchema = new mongoose.Schema(
  {
    image: String,
    imgName: String,
    projectType: String,
    projectName: String,
    beforeAfter: String,
    numPicture: Number,
  },
  {
    collection: "ImageSchema",
  }
);

const Images = mongoose.model("ImageSchema", ImageSchema);

app.post("/upload-image", async (req, res) => {
  // destructure request for schema validation
  const { imgName, projectType, projectName, beforeAfter, numPicture } =
    req.body;
  const image = req.body.image;
  console.log(req.body);
  //attempt to create a new image object using request
  if (image) {
    try {
      await Images.create({
        image: image,
        imgName: imgName,
        projectType: projectType,
        projectName: projectName,
        beforeAfter: beforeAfter,
        numPicture: numPicture,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: error });
    }
  } else {
    res.send({ status: "No input detected, please try again" });
  }
});

app.get("/get-images", async (req, res) => {
  try {
    const image = await Images.find();
    res.send({ status: "ok", data: image });
  } catch (error) {
    res.send({ status: error });
  }
});
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT} `);
});
