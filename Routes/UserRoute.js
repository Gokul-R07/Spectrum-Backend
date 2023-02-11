import express from "express";
import authMiddleWare from "../MiddleWare/authMiddleware.js";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  UnFollowUser,
  updateUser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, UnFollowUser);
export default router;