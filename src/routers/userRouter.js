import express from "express";
import {
  deleteUser,
  getAllUser,
  insertUser,
} from "../models/user/User.model.js";

const router = express.Router();

// get user info
router.get("/", async (req, res) => {
  const users = await getAllUser();
  res.json({
    message: "get method",
    users,
  });
});

// create new user
router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const result = await insertUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New User Created",
        })
      : res.json({
          status: "error",
          message: "Unable to create new user, try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// delete user
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const result = await deleteUser(_id);
  res.json({
    message: "delete method",
    result,
  });
});

export default router;
