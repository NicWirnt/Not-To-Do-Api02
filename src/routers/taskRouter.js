import express from "express";

const router = express.Router();

import { insertTask } from "../models/task/TaskListmodel.js";

router.get("/", (req, res) => {
  res.json({
    message: "get method",
  });
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // send data to database

    const result = await insertTask(data);

    console.log(result);

    res.json({
      message: "post method",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", (req, res) => {
  res.json({
    message: "delete method",
  });
});

export default router;
