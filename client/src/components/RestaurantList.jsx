import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants } from '../features/restaurants/restaurantsSlice';

const RestaurantList = () => {
    const dispatch = useDispatch();
    const { restaurants_loading, restaurants_error, restaurants, restaurant } = useSelector((store) => store.restaurants);

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [restaurant]);

    if (restaurants_loading) {
        return (
            <div className='container'>
                <h2 className='row align-items-center justify-content-center'>Loading...</h2>
            </div>
        );
    }

    if (restaurants_error) {
        return (
            <div className='container'>
                <h2 className='row align-items-center justify-content-center'>Error Fetching Restaurants</h2>
            </div>
        );
    }

    return (
        <div className='container'>
            <table className='table table-hover'>
                <thead className='bg-primary'>
                    <tr>
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Price Range</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody className='table-dark'>
                    {restaurants &&
                        restaurants.map((restaurant) => {
                            return (
                                <tr key={restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.location}</td>
                                    <td>{'$'.repeat(restaurant.price_range)}</td>
                                    <td>
                                        <button className='btn btn-warning'>Update</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};
export default RestaurantList;
