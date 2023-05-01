require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: ['mcdonalds', 'wendys', 'chick-fil-a'],
        },
    });
});

app.get('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: ['mcdonalds'],
        },
    });
});

app.post('/api/v1/restaurants', (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            restaurant: ['BurgerKing'],
        },
    });
});

app.put('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: ['KFC'],
        },
    });
});

app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: 'success',
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
