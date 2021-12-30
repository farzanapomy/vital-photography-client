import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddReviews from './Dashboard/AddReviews/AddReviews';
import DashBoard from './Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Dashboard/ManageOrder/ManageOrder';
import MyOrders from './Dashboard/MyOrders/MyOrders';
import Payment from './Dashboard/Payment/Payment';
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

            {/* regular user section  */}

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:ID" element={<PrivateRoute><PlaceOrder /> </PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />




            {/*   **********  dashboard sections   **********   */}


            <Route path="/dashboard" element={<PrivateRoute>
              <DashBoard />
            </PrivateRoute>}>

              {/*   **********  user routes   **********   */}


              <Route path={`/dashboard/payment`} element={<Payment></Payment>}> </Route>
              <Route path={`/dashboard/MyOrders`} element={<MyOrders></MyOrders>}>
              </Route>
              <Route path={`/dashboard/MyOrders/:paymentID`} element={<Payment></Payment>}>
              </Route>
              <Route path={`/dashboard/AddReviews`} element={<AddReviews></AddReviews>}>
              </Route>


              {/*   **********  admin routes   **********   */}

              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/AddServices`} element={<AdminRoute>
                <AddServices></AddServices>
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/ManageOrder`} element={<AdminRoute>
                <ManageOrder></ManageOrder>
              </AdminRoute>}>
              </Route>
            </Route>


          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
