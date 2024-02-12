import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

const app = express();

const PORT = 8000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "2.0.0",
    },
    components: {
      securitySchema: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: {
      bearerAuth: [],
    },
  },
  apis: ["./src/routers/taskRouter.js"],
};

const swaggerSpec = swaggerJSDoc(options);

// function swaggerDocs(app,port){
//   //swaggerpage

//   //docs in json
// }

app.use(express.json());
app.use(cors());
// mongo connection
import mongoClient from "./src/config/db.js";
mongoClient();

// load routers

import taskRouter from "./src/routers/taskRouter.js";

// Task API
// const taskFunc = (req, res) => {
//   //added task in the database
//   res.json({
//     message: "added data to the database",
//   });
// };

app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Your server is running at http://localhost:${PORT}`);
});

//SWAGGER
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//SwaggerJSON
app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

console.log(`Your docs is running at http://localhost:${PORT}/docs`);
//handlebar, ejs, ...
app.get("/", (req, res) => {
  //   res.send("<h1>My first node server</h1>");
  const person = {
    fn: "Nico",
    ln: "wira",
  };
  res.json(person);
});
