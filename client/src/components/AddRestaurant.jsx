import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRestaurant, updateInput } from '../features/restaurants/restaurantsSlice';

const AddRestaurant = () => {
    const dispatch = useDispatch();
    const { restaurant_name, restaurant_location, restaurant_price_range } = useSelector((store) => store.restaurants);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(createRestaurant());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className='container' action=''>
            <div className='row align-items-center justify-content-center p-3'>
                <div className='col-md-3'>
                    <input type='text' className='form-control' placeholder='name' name='restaurant_name' value={restaurant_name} onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: e.currentTarget.value }))} />
                </div>
                <div className='col-md-3'>
                    <input type='text' className='form-control' placeholder='location' name='restaurant_location' value={restaurant_location} onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: e.currentTarget.value }))} />
                </div>
                <div className='col-md-3'>
                    <select name='restaurant_price_range' className='form-select my-1 mr-sm-2' value={restaurant_price_range} onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: parseInt(e.currentTarget.value) }))}>
                        <option disabled>Price Range</option>
                        <option value={1}>$</option>
                        <option value={2}>$$</option>
                        <option value={3}>$$$</option>
                        <option value={4}>$$$$</option>
                        <option value={5}>$$$$$</option>
                    </select>
                </div>
                <button type='submit' className='col-md-1 btn btn-primary' onClick={handleSubmit}>
                    Add
                </button>
            </div>
        </form>
    );
};
export default AddRestaurant;
