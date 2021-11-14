const router = require("express").Router();
const db = require("../models");
const path = require("path");


router.get("/api/workouts", ({ body }, res) => {
  db.Workout.find({})
  .sort({ date: 1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("before starting modify")
  console.log(req.body);
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: { exercises: req.body}
    }
  ).then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.post("/api/workouts", ({body}, res) => {
  console.log("inside api/workouts");
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.get("/api/workouts/range", ({body}, res) => {

  db.Workout.find({
  }).limit(7)
  .sort({ date: 1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });

});


//Page Routes
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  //const id = location.search.split("=")[1];
  const id = 5;
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


module.exports = router;
