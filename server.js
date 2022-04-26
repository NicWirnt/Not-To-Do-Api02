const express = require("express");
const app = express();

const PORT = 8000;

//handlebar, ejs, ...
app.get("/", (req, res) => {
  //   res.send("<h1>My first node server</h1>");
  const person = {
    fn: "Nico",
    ln: "wira",
  };
  res.json(person);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Your server is running at http://localhost:${PORT}`);
});
