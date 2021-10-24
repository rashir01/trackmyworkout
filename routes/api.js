const router = require("express").Router();
const Workout = require("../models/Workout.js");
const path = require("path");

router.post("/api/stats", ({ body }, res) => {
  // Transaction.create(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  // Transaction.insertMany(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
  //  Workout.find({})
  //    .sort({ date: -1 })
  //    .then(dbWorkout => {
  //      res.json(dbWorkout);
  //    })
  //    .catch(err => {
  //      res.status(400).json(err);
  //    });
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
