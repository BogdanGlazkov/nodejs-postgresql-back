const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/students", studentRoutes);

app.listen(port, () => console.log(`App is running on port ${port}`));
