const express = require("express");
const app = express();

const taskRoute = express.Router();
let Task = require("../model/Task");

// Add Task
taskRoute.route("/add-task").post((req, res, next) => {
  Task.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Tasks
taskRoute.route("/").get((req, res) => {
  Task.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Task
taskRoute.route("/read-task/:id").get((req, res) => {
  Task.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Task
taskRoute.route("/complete-task/:id").put((req, res, next) => {
  const filter = { _id: req.params.id };
  const update = { completed: true};

  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Task updated successfully!");
      }
    }
  // Task.findOneAndUpdate(
  //   filter,
  //   update,
    // (error, data) => {
    //   if (error) {
    //     return next(error);
    //     console.log(error);
    //   } else {
    //     res.json(data);
    //     console.log("Task completed successfully!");
    //   }
    // }
  )
});

// Update Task
taskRoute.route("/update-task/:id").put((req, res, next) => {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Task updated successfully!");
      }
    }
  );
});

// Delete Task
taskRoute.route("/delete-task/:id").delete((req, res, next) => {
  Task.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = taskRoute;
