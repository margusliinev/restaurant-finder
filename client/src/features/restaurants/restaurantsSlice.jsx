import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    restaurants_loading: false,
    restaurants_error: false,
    restaurants: [],
    restaurant_name: '',
    restaurant_location: '',
    restaurant_price_range: 'Price Range',
};

const url = 'http://localhost:3000/api/v1/restaurants';

const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
    const response = await axios.get(url);
    return response.data;
});

const createRestaurant = createAsyncThunk('restaurants/createRestaurant', async (_, thunkAPI) => {
    const response = await axios.post(url, {
        name: thunkAPI.getState().restaurants.restaurant_name,
        location: thunkAPI.getState().restaurants.restaurant_location,
        price_range: thunkAPI.getState().restaurants.restaurant_price_range,
    });
    return response.data;
});

const deleteRestaurant = createAsyncThunk('restaurants/deleteRestaurant', async (id) => {
    await axios.delete(`http://localhost:3000/api/v1/restaurants/${id}`);
    return id;
});

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        updateInput: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.restaurants_loading = true;
            })
            .addCase(fetchRestaurants.rejected, (state) => {
                state.restaurants_loading = false;
                state.restaurants_error = true;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.restaurants_loading = false;
                state.restaurants_error = false;
                state.restaurants = action.payload.results.rows;
            })
            .addCase(createRestaurant.fulfilled, (state, action) => {
                state.restaurants.push(action.payload.results.rows[0]);
            })
            .addCase(deleteRestaurant.fulfilled, (state, action) => {
                state.restaurants = state.restaurants.filter((restaurant) => {
                    return restaurant.id !== action.payload;
                });
            });
    },
});

export { fetchRestaurants, createRestaurant, deleteRestaurant };
export const { updateInput } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
