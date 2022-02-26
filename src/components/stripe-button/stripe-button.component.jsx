import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KXSRnDFxw7Pn6TQQPHgzXEt5UqdTn5LkWDgU249BZQV1zIgVSFgfDVRdRmOA8zE0DzRcmdV6RBD3V4kPwzlI1dc00Zgsgb6Kt';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

  return (
    <StripeCheckout
        label='Pay Now'
        name='Clothes Store Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is ${price} kr`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;