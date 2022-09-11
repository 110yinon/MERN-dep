const express = require('express');
const workoutController = require('../controllers/workoutController');


const router = express.Router();

// handle CORS
router.options('/*',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
})

// GET all workouts
router.get('/', workoutController.getWorkouts);

// GET a single workout
router.get('/:id', workoutController.getWorkout);

// POST a new workout
router.post('/', workoutController.create_workout);

// DELETE a workout
router.delete('/:id', workoutController.delete_workout);

// UPDATE a workout
router.patch('/:id', workoutController.update_workout);

module.exports = router;