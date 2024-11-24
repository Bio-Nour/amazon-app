import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./comonents/Header";
import { Routes, Route } from "react-router-dom";
import Orders from "./comonents/Orders";
import SignIn from "./comonents/SignIn";
import { useAuth } from "./context/GlobalState";
import { useEffect } from "react";
import { auth } from "./firbase";
import Home from "./comonents/Home";
import Payment from "./comonents/Payment";
import Checkout from "./comonents/Checkout";
const App = () => {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51Pc8tMEDgvu13Yv2ExxYfPAMkgg4Hp5hvvIRJR8pndNFWU19a33tK1EZmd7HsV1ud1bsaTpJm99AkCMM7Q5suYZG00Xvkt7WcE"
    
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        {/* <Route path="/Amazon" element={<Amazon />} /> */}
        <Route
          path="/Payment"
          element={
            <>
              <Header />

               <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

<Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
