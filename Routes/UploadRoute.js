import express from "express";
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "https://social-media-website-backend.vercel.app/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  try {
    console.log("File uploded successfully");
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return res.status(500).json(error.message);
  }
});

export default router;
