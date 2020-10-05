import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHP39A5b3dXVUCuVpd00QDF5aPDPZiDn13DGKjxaeNRWaAjXG4O3wWDTQYh7oCGQjYKroMPotU1AHZH2EEcZvGd00voKuCKdd';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment success!');
            })
            .catch(error => {
                console.log('Payment error:', JSON.parse(error));
                alert('There was an issue with your payment. Please make sure you use the provided credit card');
            });
        };

    return (
        <StripeCheckout 
            name='Urban Clothing'
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