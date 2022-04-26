import express from "express";

const router = express.Router();

import {
  insertTask,
  getAllTask,
  getTask,
  deleteTask,
  updateTask,
} from "../models/task/TaskList.model.js";

router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);

  const result = _id ? await getTask(_id) : await getAllTask();

  res.json({
    status: "Success",
    message: "get method",
    result,
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

router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);

    console.log(result);

    res.json({
      status: "Success",
      message: "the task has been updated",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id?", async (req, res) => {
  const { _id } = req.params;

  const result = await deleteTask(_id);

  res.json({
    status: "success",
    message: "delete method",
    result,
  });
});

export default router;
