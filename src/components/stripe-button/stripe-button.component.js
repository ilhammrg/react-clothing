import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHP39A5b3dXVUCuVpd00QDF5aPDPZiDn13DGKjxaeNRWaAjXG4O3wWDTQYh7oCGQjYKroMPotU1AHZH2EEcZvGd00voKuCKdd';
    const onToken = token => {
        console.log(token);
        alert('Payment Success!');
    };

    return (
        <StripeCheckout 
            name='REACT CLOTHING'
            description='Please fill your payment information'
            image='./triangle.svg'
            panelLabel='Pay Now'
            shippingAddress
            billingAddress
            amount={priceForStripe}
            stripeKey={publishableKey}
            token={onToken}
        />
    );
};

export default StripeButton;