const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort([['day', 1]])
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.put("/api/workouts/:id", (req, res) => {
  //   console.log(req.params.id);
  // });

  // app.post("/api/workouts/", (req, res) => {
  //   console.log(req.body);
  // });

  // app.get("/api/workouts/range", (req, res) => {
  //   db.Workout.find({})
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //     console.log(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
  // });
};