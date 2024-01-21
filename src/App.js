// Main App Component:
// - Manages the overall structure of the application.
import React, { useState } from "react";

// - Uses React Router for navigation.
import { HashRouter } from "react-router-dom";

// - Includes a Navbar and Routes component.
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

// - Handles shopping cart state and provides functions to add and remove items.
import "./assets/global-styles/reset.css";
import "./assets/global-styles/fonts.css";
import "./assets/global-styles/global.css";
import { Layout, Main } from "./styles";

function App() {
  // Shopping cart state
  const [shoppingCart, setShoppingCart] = useState([]);

  // Function to add an item to the shopping cart
  function addItemToCart(item) { 
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();
      newCart[itemIndex].quantity++;

      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  }

  // Function to remove an item from the shopping cart
  function removeItemFromCart(item, removeAll) {
    const itemIndex = shoppingCart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();

      // Check if removing all or just decreasing quantity
      removeAll ? newCart.splice(itemIndex, 1) : newCart[itemIndex].quantity--;

      setShoppingCart(newCart);
    } else {
      // Log an error if the item is not found in the shopping cart
      console.error(
        "Couldn't remove item from shopping cart: There's no such item in the shopping cart."
      );
    }
  }

  // Render the main structure of the application
  return (
    <Layout>
      <HashRouter basename="/">
        {/* Display the Navbar with the current cart size */}
        <Navbar cartSize={shoppingCart.length} />

        {/* Main content area with the application routes */}
        <Main>
          <Routes
            shoppingCart={shoppingCart}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        </Main>
      </HashRouter>
    </Layout>
  );
}

// Export the App component
export default App;
