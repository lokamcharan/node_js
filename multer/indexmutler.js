const express = require("express");

const multer = require("multer");

const cors = require("cors");

const app = express();

app.use(cors());

const ds = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, ki) => {
    ki(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: ds,
});

app.listen(3013, () => {
  console.log("server runner port at 3013");
});

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.send("uploaded file");
});
