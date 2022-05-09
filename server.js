import express from "express";

const app = express();
import cors from "cors";

const PORT = 8000;

app.use(cors());
app.use(express.json());

// mongo connection
import mongoClient from "./src/config/db.js";
mongoClient();

// load routers

import taskRouter from "./src/routers/taskRouter.js";
import userRouter from "./src/routers/userRouter.js";
// Task API
// const taskFunc = (req, res) => {
//   //added task in the database
//   res.json({
//     message: "added data to the database",
//   });
// };

app.use("/api/v1/task", taskRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Your server is running at http://localhost:${PORT}`);
});

//handlebar, ejs, ...
app.get("/", (req, res) => {
  //   res.send("<h1>My first node server</h1>");
  const person = {
    fn: "Nico",
    ln: "wira",
  };
  res.json(person);
});
