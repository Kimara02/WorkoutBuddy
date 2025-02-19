require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const workoutroutes = require('./routes/workouts.routes');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(cors());

// app.listen(4000, () =>
//     console.log('server running on port 4000')
// );

// app.get('/', (req, res) => {
//     res.send('welcome to mern');
// })

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// app.listen(process.env.PORT, () =>
//     console.log('server running on port ', process.env.PORT)
// );


app.use('/api/kimara', workoutroutes)
app.use('/api/users', userRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Connected to db & server running on port', process.env.PORT))
    })

    .catch(err =>
        console.error(err)
    );
