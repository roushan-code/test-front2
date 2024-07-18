import './App.css';
import Header from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from 'webfontloader';
import React from 'react';
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from "./component/Home/Home.jsx";
import Contact from './component/layout/Contact/Contact.jsx';
import About from './component/layout/About/About.jsx';
import ProductDetails from "./component/Product/ProductDetails.jsx"
import Products from "./component/Product/Products.jsx"
import Search from "./component/Product/Search.jsx"
import LoginSignUp from './component/User/LoginSignUp.jsx';
import store from "./store"
import { loadUser } from './actions/userAction.jsx';
import UserOptions from "./component/layout/Header/UserOptions.jsx"
import { useSelector } from 'react-redux';
import Cart from "./component/Cart/Cart.jsx"
import Profile from './component/User/Profile.jsx';
import PrivateRoute from './component/Route/ProtectedRoute.jsx';
import PrivateRouteAdmin from './component/Route/ProtectedRouteAdmin.jsx';
import ScrollToTop from './component/Route/ScrollToTop.jsx';
import NotFound from "./component/layout/Not Found/NotFound.jsx"
import PaymentGuard from './component/Route/PaymentGuard.jsx';
import Loader from './component/layout/Loader/loader.jsx';

const ResetPassword = React.lazy(() => import('./component/User/ResetPassword.jsx'));
const ForgotPassword = React.lazy(() => import('./component/User/ForgotPassword.jsx'));
const UpdateProfile = React.lazy(() => import('./component/User/UpdateProfile.jsx'));
const UpdatePassword = React.lazy(() => import('./component/User/UpdatePassword.jsx'));
const Shipping = React.lazy(() => import('./component/Cart/Shipping.jsx'));
const ConfirmOrder = React.lazy(() => import('./component/Cart/ConfirmOrder.jsx'));
const MyOrders = React.lazy(() => import('./component/Order/MyOrders.jsx'));
const OrderSuccess = React.lazy(() => import('./component/Cart/OrderSuccess.jsx'));
const OrderDetails = React.lazy(() => import('./component/Order/OrderDetails.jsx'));
const Dashboard = React.lazy(() => import('./component/Admin/Dashboard.jsx'));
const ProductList = React.lazy(() => import('./component/Admin/ProductList.jsx'));
const NewProduct = React.lazy(() => import('./component/Admin/NewProduct.jsx'));
const UpdateProduct = React.lazy(() => import('./component/Admin/UpdateProduct.jsx'));
const OrderList = React.lazy(() => import('./component/Admin/OrderList.jsx'));
const ProcessOrder = React.lazy(() => import('./component/Admin/ProcessOrder.jsx'));
const UsersList = React.lazy(() => import('./component/Admin/UserList.jsx'));
const UpdateUser = React.lazy(() => import('./component/Admin/UpdateUser.jsx'));
const ProductReviews = React.lazy(() => import('./component/Admin/ProductReviews.jsx'));

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    store.dispatch(loadUser());
  }, [])

  // window.addEventListener("contextmenu", (e)=> e.preventDefault());
  return (
    <Router>
      <ScrollToTop />
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/login' element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/password/forgot" element={<React.Suspense fallback={<Loader />}>
          <ForgotPassword />
        </React.Suspense>} />
        <Route exact path="/password/reset/:token" element={<React.Suspense fallback={<Loader />}>
          <ResetPassword />
        </React.Suspense>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        {/* <Route
          element={<PrivateRouteAdmin isAdmin={true} />}
        >
          <Route element={<Dashboard />} path="/admin/dashboard" exact/>
        </Route> */}
        <Route path="/admin/dashboard"
          element={
            <React.Suspense fallback={<Loader />}>
              <PrivateRouteAdmin isAdmin={true} >
                <Dashboard />
              </PrivateRouteAdmin>
            </React.Suspense>
          }
        ></Route>

        <Route path="/admin/products"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <ProductList />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/product"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <NewProduct />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/product/:id"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <UpdateProduct />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/orders"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <OrderList />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/order/:id"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <ProcessOrder />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/users"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <UsersList />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/user/:id"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <UpdateUser />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        <Route path="/admin/reviews"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRouteAdmin isAdmin={true} >
              <ProductReviews />
            </PrivateRouteAdmin>
          </React.Suspense>}
        ></Route>

        {/* <Route
          element={<PrivateRoute isAdmin={false} />}
        >
          <Route element={<Profile />} path="/account" exact />
        </Route> */}

        <Route path="/account"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <Profile />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/me/update"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <UpdateProfile />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/password/update"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <UpdatePassword />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/login/shipping"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <Shipping />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/order/confirm"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <ConfirmOrder />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/success"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <OrderSuccess />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/orders"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <MyOrders />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>
        <Route path="/order/:id"
          element={<React.Suspense fallback={<Loader />}>
            <PrivateRoute isAdmin={false} >
              <OrderDetails />
            </PrivateRoute>
          </React.Suspense>}
        ></Route>


        <Route element={
          <PaymentGuard />
        } path="/process/payment" exact />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;

