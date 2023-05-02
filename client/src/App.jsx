import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, RestaurantPage, UpdateRestaurantPage, ErrorPage } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/restaurants/:id' element={<RestaurantPage />}></Route>
                <Route path='/restaurants/:id/update' element={<UpdateRestaurantPage />}></Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
