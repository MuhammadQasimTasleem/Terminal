const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const attractionRoutes = require('./routes/attractionRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const visitorRoutes = require('./routes/visitorRoutes');



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/attractions', attractionRoutes);
app.use('/reviews', reviewRoutes);
app.use('/visitors', visitorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});