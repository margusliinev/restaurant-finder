const express = require('express');
const router = express.Router();
const { getAllRestaurants, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');

router.route('/api/v1/restaurants').get(getAllRestaurants).post(createRestaurant);
router.route('/api/v1/restaurants/:id').get(getSingleRestaurant).put(updateRestaurant).delete(deleteRestaurant);

module.exports = router;
