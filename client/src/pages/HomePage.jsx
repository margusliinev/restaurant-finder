import AddRestaurant from '../components/AddRestaurant';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    );
};
export default HomePage;
