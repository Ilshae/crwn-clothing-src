import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HsBj7E1gngEBdOJAeecjW1trv6PA2Z3oHhxYuBOkpWxt0jBggVN23iXi7mSSaB7HduB4kypr4zg9JOoIwhwIaVc00cNXUeKBl'
  
  const onToken = token =>{
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <div>
      <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeCheckoutButton
