import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_M4L0g1PwCe2nmrTGFDMsUDuO00MKR5802J";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing S.A. de C.V."
      billingAddress
      shippingAddress
      image="http://patitasweb.com.py/wp-content/uploads/2018/07/Test-Logo-Small-Black-transparent-1-768x768.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
