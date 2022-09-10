require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const workoutRoutes = require('./routes/workoutsRoutes');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}...`);
        });

    })
    .catch(err => {
        console.log(errr);
    })


// routes
app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
    res.json({ msg: 'hello kuni' });
});