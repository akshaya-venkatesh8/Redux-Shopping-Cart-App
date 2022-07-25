import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  useEffect(() => {
fetch('https://redux-http-5580d-default-rtdb.firebaseio.com/cartitems.json', {
  method: "PUT",
  body: JSON.stringify(cart)
}, [cart]);
  });
  return (
    <div className="App">
     {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
