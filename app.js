const express = require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");
const date = require(__dirname + "/date.js");
var tasks = [];
let workTasks = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  const todayIs = date.getDate();

  res.render("list", { listTitle: todayIs, task: tasks });
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", task: workTasks });
});
app.post("/", function (req, res) {
  var task = req.body.task;
  console.log(req.body);
  if (task === "") {
    console.log("Type Something. ");
  } else if (req.body.button === "Work") {
    workTasks.push(task);
    res.redirect("/work");
  } else {
    tasks.push(task);
    res.redirect("/");
  }
});
app.listen(3000, function () {
  console.log("Server is listening...");
});
