import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerComponent from './shared/components/DrawerComponent'
import AddOrderPage from './addOrder/pages/AddOrderPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DrawerComponent />} >
            <Route path="/addOrder" element={<AddOrderPage />} />?
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
