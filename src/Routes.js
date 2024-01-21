// Routes Component:
// - Manages application routes using React Router.
// - Utilizes Switch and Route components for routing.
// - Includes various views: Home, Shop, ShopItem, Checkout, and ErrorPage.
// - Implements page transitions with AnimatePresence and motion from framer-motion.
import React from "react";
import { Switch, Route } from "react-router-dom";

// Importing views for different routes
import Home from "./views/Home/Home.js";
import Shop from "./views/Shop/Shop.js";
import ShopItem from "./views/ShopItem/ShopItem.js";
import Checkout from "./views/Checkout/Checkout.js";
import ErrorPage from "./views/ErrorPage/ErrorPage.js";

// Animation components from framer-motion
import { AnimatePresence, motion } from "framer-motion";

// Routes component receiving props related to the shopping cart
const Routes = ({ shoppingCart, addItemToCart, removeItemFromCart }) => {
  return (
    // AnimatePresence to handle exit animations
    <AnimatePresence>
      {/* Switch to render the first Route that matches */}
      <Switch>
        {/* Home Route */}
        <Route exact path="/" component={Home} />

        {/* Shop Route */}
        <Route exact path="/shop" component={Shop} />

        {/* ShopItem Route with dynamic parameter */}
        <Route
          exact
          path="/shop/:id"
          render={(routeProps) => (
            <ShopItem
              itemId={routeProps.match.params.id}
              addItemToCart={addItemToCart}
            />
          )}
        />

        {/* Checkout Route */}
        <Route
          exact
          path="/checkout"
          render={() => (
            <Checkout
              shoppingCart={shoppingCart}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          )}
        />
        
        {/* ErrorPage Route (fallback for unmatched routes) */}
        <Route path="/" component={ErrorPage} />
      </Switch>
    </AnimatePresence>
  );
};

// Export the Routes component
export default Routes;
