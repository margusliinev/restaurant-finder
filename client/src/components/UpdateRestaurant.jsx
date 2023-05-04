import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../features/restaurants/restaurantsSlice';
import { fetchRestaurant } from '../features/restaurants/restaurantsSlice';
import { useNavigate } from 'react-router-dom';
import { updateRestaurant } from '../features/restaurants/restaurantsSlice';

const UpdateRestaurant = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { restaurant_name, restaurant_location, restaurant_price_range } = useSelector((store) => store.restaurants);

    useEffect(() => {
        dispatch(fetchRestaurant(id));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(updateRestaurant(id));
            navigate(`/`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className='container'>
            <div className='form-group'>
                <label htmlFor='restaurant_name'>Name</label>
                <input
                    type='text'
                    id='restaurant_name'
                    className='form-control'
                    name='restaurant_name'
                    value={restaurant_name}
                    onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: e.currentTarget.value }))}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='restaurant_location'>Location</label>
                <input
                    type='text'
                    id='restaurant_location'
                    className='form-control'
                    name='restaurant_location'
                    value={restaurant_location}
                    onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: e.currentTarget.value }))}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='restaurant_price_range'>Price Range</label>
                <select
                    name='restaurant_price_range'
                    className='form-control'
                    value={restaurant_price_range}
                    onChange={(e) => dispatch(updateInput({ name: e.currentTarget.name, value: parseInt(e.currentTarget.value) }))}
                >
                    <option disabled>Price Range</option>
                    <option value={1}>$</option>
                    <option value={2}>$$</option>
                    <option value={3}>$$$</option>
                    <option value={4}>$$$$</option>
                    <option value={5}>$$$$$</option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary mt-2' onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
};
export default UpdateRestaurant;
