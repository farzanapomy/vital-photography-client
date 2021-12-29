import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddReviews from './Dashboard/AddReviews/AddReviews';
import DashBoard from './Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Dashboard/ManageOrder/ManageOrder';
import MyOrders from './Dashboard/MyOrders/MyOrders';
import AddServices from './pages/AddServices/AddServices';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Menubar from './pages/Home/Menubar/Menubar';
import Services from './pages/Home/Services/Services';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import PlaceOrder from './pages/SingleServices/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="/services/:ID"
              element={<PrivateRoute><PlaceOrder />
              </PrivateRoute>} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addServices" element={<AddServices />} />
            <Route path="/AddReviews" element={<AddReviews />} />
            <Route path="*" element={<NotFound />} />


            <Route path='/dashboard' element={<PrivateRoute>
              <DashBoard></DashBoard>
            </PrivateRoute>}>
              {/* <Route path={`/dashboard`} element={<DashBoard />} /> */}
              <Route path={`/dashboard/AddReviews`} element={<AddReviews />} />
              <Route path="/dashboard/ManageOrder" element={<ManageOrder />} />
              <Route path="/dashboard/MyOrders" element={<MyOrders />} />
              <Route path="/dashboard/MakeAdmin" element={<MakeAdmin />} />
              
              <Route path="/dashboard/MakeAdmin"
              element={<AdminRoute><MakeAdmin />
              </AdminRoute>} /> 
            </Route>



          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
