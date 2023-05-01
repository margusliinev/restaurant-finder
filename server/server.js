require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const restaurants = require('./routes/restaurants');

app.use(express.json());
app.use('/', restaurants);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
