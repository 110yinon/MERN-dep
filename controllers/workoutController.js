const mongoose = require('mongoose');
const workoutModel = require('../models/workoutModel');

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await workoutModel.find({});
    res.setHeader('Access-Control-Allow-Origin', '*'); //CORS
    res.status(200).json(workouts);
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json('No such workout');
    }
    const workout = await workoutModel.findById(id);
    if (!workout) {
        return res.status(404).json('No such workout');
    }
    res.status(200).json(workout);
}

// create a new workout
const create_workout = async (req, res) => {
    try {
        const workout = await workoutModel.create(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*'); //CORS
        res.status(200).json(workout);
    }
    catch (error) {
        console.log(`error: ${error}`);
        res.setHeader('Access-Control-Allow-Origin', '*'); //CORS
        res.status(400).json(error);
    }
}

// DELETE a workout
const delete_workout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json('No such workout');
    }
    const workout = await workoutModel.findByIdAndDelete({ _id: id });
    if (!workout) {
        return res.status(404).json('No such workout');
    }
    res.status(200).json(workout);
}

// UPDATE a workout
const update_workout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json('No such workout');
    }
    const workout = await workoutModel.findByIdAndUpdate({ _id: id }, req.body);
    if (!workout) {
        return res.status(404).json('No such workout');
    }
    res.status(200).json(workout);
}

module.exports = {
    create_workout,
    getWorkouts,
    getWorkout,
    delete_workout,
    update_workout
};