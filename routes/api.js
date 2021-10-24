const router = require("express").Router();
const Workout = require("../models/Workout.js");
const path = require("path");

router.get("/api/workouts", ({ body }, res) => {
  Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts/:id", ({ body }, res) => {

});

router.post("api/workouts", ({body}, res) => {

});

router.get("api/workouts/range", ({body}, res) => {

});


//Page Routes
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


module.exports = router;
