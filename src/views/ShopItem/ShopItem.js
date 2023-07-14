import { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import img from "../../assets/images/catalog/poster_mars_front_a.jpg";

import { OuterContainer, Container, MainImage, ItemDetails } from "./styles";
import { Button } from "../../components/Button/Button.js";

function ShopItem({ itemId, addItemToCart }) {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const item = Catalog.find((i) => i.id == itemId);

  function handleClick() {
    addItemToCart({ ...item, quantity: 1 });
    setShowCheckoutBtn(true);
  }

  const images = require.context("../../assets/images/catalog", true);
  let img = images("./" + item.imgs[0]).default;

  return (
    <OuterContainer
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        <MainImage src={img} alt="" />

        <ItemDetails>
          <h1>{item.name}</h1>
          <span>{item.product_type}</span>

          <p>
            <strong>About the image: </strong>
            {item.description ||
              "The universe is home to countless planets, each with its own unique characteristics. From the scorching heat of Mercury, the closest planet to the Sun, to the frigid cold of Neptune, the farthest known planet, the diversity is astounding. Venus boasts a thick atmosphere and a runaway greenhouse effect, while Mars captivates with its rusty red surface and potential for life. Jupiter, a gas giant, reigns as the largest planet, adorned with mesmerizing swirling storms like the Great Red Spot. Saturn enchants with its iconic rings, while Uranus and Neptune intrigue with their icy compositions and captivating blue hues. Every planet holds a celestial story waiting to be explored."}
          </p>

          <div className="buttons-wrapper">
            <Button primary onClick={handleClick}>
              Add to cart
            </Button>

            <div>
              {showCheckoutBtn && (
                <Button primary small>
                  <Link to="/checkout">Proceed to checkout</Link>
                </Button>
              )}

              <Button small>
                <Link to="/shop">Go back</Link>
              </Button>
            </div>
          </div>
        </ItemDetails>
      </Container>
    </OuterContainer>
  );
}

export default ShopItem;
