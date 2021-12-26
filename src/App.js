import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReviews from './Dashboard/AddReviews/AddReviews';
import AddServices from './pages/AddServices/AddServices';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Menubar from './pages/Home/Menubar/Menubar';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import PlaceOrder from './pages/SingleServices/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <PrivateRoute path="/services/:ID" element={<PlaceOrder />} /> */}

          <Route  path='/' element={<PrivateRoute />}>
            <Route  path='/services/:ID' element={<PlaceOrder />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addServices" element={<AddServices />} />
          <Route path="/AddReviews" element={<AddReviews />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
