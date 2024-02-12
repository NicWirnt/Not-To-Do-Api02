import express from "express";

const router = express.Router();

import {
  insertTask,
  getAllTask,
  getTask,
  deleteTask,
  updateTask,
} from "../models/task/TaskList.model.js";

/**
 * @openapi
 * /api/v1/task/healthcheck:
 *  get:
 *    tag:
 *      - Healthcheck
 *    description: Responds if the app is up and running
 *    responses:
 *      200:
 *        description: App is up and running
 */

router.get("/healthcheck", async (req, res) => {
  console.log("router hit");
  res.json({
    status: "success",
    message: "router hit",
  });
});

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

    if (result?._id) {
      return res.json({
        status: "success",
        message: "New task has been added",
      });
    }
    console.log(result);

    res.json({
      status: "error",
      message: "Unable to add new task, Please try again later",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: "Unable to add new task, Please try again later",
    });
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

router.delete("/userId?", async (req, res) => {
  const { userId } = req.params;
  console.log(req.body);
  const result = await deleteTask(userId);

  res.json({
    status: "success",
    message: "delete method",
    result,
  });
});

export default router;
