import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store";
import LogIn from "./pages/LogIn";
import BillingInfo from "./pages/BillingInfo";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />}></Route>
            <Route path="/Landing" element={<Landing />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Welcome" element={<Home />}></Route>
            <Route path="/WelcomeBack" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Wishlist" element={<Wishlist />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/BillingInfo" element={<BillingInfo />}></Route>
            <Route path="/LogIn" element={<LogIn />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
