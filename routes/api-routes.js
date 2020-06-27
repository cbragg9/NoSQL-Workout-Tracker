const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort([['day', 1]])
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log("PUT REQUEST /api/workouts/:id");
    console.log("Params: " + req.params.id);
    if (req.params.id === undefined) {
      console.log("req.params.id === undefined");
    } else {
      console.log(req.params.id);
      res.json("test");
    }
  });

  app.post("/api/workouts/", (req, res) => {
    console.log("POST REQ BODY:")
    console.log(req.body);
    // db.Workout.create({})
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    // .catch(err => {
    //   res.json(err);
    // });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};