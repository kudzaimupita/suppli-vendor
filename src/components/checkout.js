import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
import { Card, Button, Spinner } from "reactstrap";
import { setAlert } from "../actions/alert";
import AlertModal from "./AlertModal";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51HRQu6C881dTL9o4agsuRGi2tLTVoQancReouVVlz3rq1Ljl6nWcLoil3oLKufSeJouBWP3EkWdS2H375ViNK60e00NlnXjZDW"
);

const buttonSpinner = (
  <Spinner
    size="sm"
    style={{ marginRight: 6 }}
    // type="grow"
    color="white"
  />
);

const ProductDisplay = ({ handleClick }) => (
  // <button  >
  //   Checkout
  // </button>

  <Button
    id="checkout-button"
    color="info"
    block
    // size="sm"
    role="link"
    onClick={handleClick}
    outline
  >
    {buttonSpinner}
    <i class="fa fa-credit-card"></i> Proceed to payment
  </Button>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

function Checkout({ cart, shippingForm = {}, auth }) {
  const productArray = cart.cartItems;

  const body = {
    shippingAddress: {
      city: shippingForm.city,
      postalCode: shippingForm.postalCode,
      address: shippingForm.address,
      country: shippingForm.country,
    },
    phone: shippingForm.phone,
    comments: shippingForm.comments,
    products: productArray,
  };

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("uuhuijojoko");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(
      "https://4581c7e80870.ngrok.io/api/v1/orders/create-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(body),
        address,
      }
    );
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.session.id,
    });

    if (result.error) {
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,

  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {})(Checkout);
