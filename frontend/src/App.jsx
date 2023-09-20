import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerComponent from './shared/components/DrawerComponent'
import AddOrderPage from './addOrder/pages/AddOrderPage';
import MealsPage from './restaurants/pages/MealsPage';
import RestaurantsPage from './restaurants/pages/RestaurantsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DrawerComponent />} >
            <Route path="/addOrder" element={<AddOrderPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/shops" element={<RestaurantsPage />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
