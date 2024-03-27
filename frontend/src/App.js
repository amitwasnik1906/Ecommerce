import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.jsx";
import ProductDetals from "./component/Product/ProductDetals.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp.jsx";
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.jsx";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
// import axios from "axios";
import PaymentMethod from "./component/Cart/PaymentMethod.jsx";
// import Payment from "./component/Cart/Payment.jsx";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UserList from "./component/Admin/UserList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import ProductReviews from "./component/Admin/ProductReviews.jsx";
import LoginSignUpBtn from "./component/layout/Header/LoginSignUpBtn.jsx";
import SearchBtn from "./component/layout/Header/SearchBtn.jsx";
import Contact from "./component/layout/Contact/Contact.jsx";
import About from "./component/layout/About/About.jsx";
import NotAvailable from "./component/layout/NotAvailable/NotAvailable.jsx";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");
  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans"],
      },
    });

    store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      <SearchBtn />

      {isAuthenticated && <UserOptions user={user} />}
      {!isAuthenticated && <LoginSignUpBtn />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route exact path="/process/payment" Component={Payment} />
          </Routes>
        </Elements>
      )} */}

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetals} />
        <Route exact path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/password/forgot" Component={NotAvailable} />

        {isAuthenticated && <Route exact path="/account" Component={Profile} />}
        {isAuthenticated && (
          <Route path="/me/update" Component={UpdateProfile} />
        )}
        {isAuthenticated && (
          <Route path="/password/update" Component={UpdatePassword} />
        )}
        {isAuthenticated && <Route exact path="/cart" Component={Cart} />}
        {isAuthenticated && (
          <Route exact path="/shipping" Component={Shipping} />
        )}
        {isAuthenticated && (
          <Route exact path="/order/confirm" Component={ConfirmOrder} />
        )}
        {isAuthenticated && (
          <Route exact path="/payment/method" Component={PaymentMethod} />
        )}
        {isAuthenticated && (
          <Route exact path="/process/payment" Component={NotAvailable} />
        )}
        {isAuthenticated && (
          <Route exact path="/success" Component={OrderSuccess} />
        )}

        {isAuthenticated && <Route exact path="/orders" Component={MyOrders} />}
        {isAuthenticated && (
          <Route exact path="/order/:id" Component={OrderDetails} />
        )}

        {user?.role === "admin" && (
          <Route exact path="/admin/dashboard" Component={Dashboard} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/products" Component={ProductList} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/product" Component={NewProduct} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/product/:id" Component={UpdateProduct} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/orders" Component={OrderList} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/order/:id" Component={ProcessOrder} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/users" Component={UserList} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/user/:id" Component={UpdateUser} />
        )}
        {user?.role === "admin" && (
          <Route exact path="/admin/reviews" Component={ProductReviews} />
        )}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
