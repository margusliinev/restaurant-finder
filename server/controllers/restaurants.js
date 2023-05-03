const db = require('../db');

const getAllRestaurants = async (req, res) => {
    try {
        const results = await db.query('select * from restaurants');
        res.status(200).json({ results });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getSingleRestaurant = async (req, res) => {
    try {
        const results = await db.query('select * from restaurants where id = $1', [req.params.id]);
        res.status(200).json({ results });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createRestaurant = async (req, res) => {
    try {
        const results = await db.query('insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range]);
        res.status(201).json({ results });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const results = await db.query('update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *', [
            req.body.name,
            req.body.location,
            req.body.price_range,
            req.params.id,
        ]);
        res.status(200).json({ results });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        const results = await db.query('delete from restaurants where id = $1', [req.params.id]);
        res.status(204).json({ results });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = { getAllRestaurants, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant };
