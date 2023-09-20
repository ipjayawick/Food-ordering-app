import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerComponent from './shared/components/DrawerComponent'
import AddOrderPage from './addOrder/pages/AddOrderPage';
import RestaurantsPage from './restaurants/pages/RestaurantsPage';
import WalletPage from './wallet/pages/WalletPage'
import MealsPage from './restaurants/pages/MealsPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DrawerComponent />} >
            <Route path="addOrder" element={<AddOrderPage />} />
            <Route path="shops" element={<RestaurantsPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="/meals" element={<MealsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
