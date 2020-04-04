import React from 'react';
import {HashRouter} from 'react-router-dom'

import './../src/styles/main.scss';
import routes from './routes'

//Stripe imports
import {StripeProvider, Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from './components/Checkout/CheckoutForm'

const stripePromise = loadStripe("pk_test_5gn92Mb40DliudeSP5vs5plq00Udsv8b4p")


  function App(props) { 
    console.log(props)
    return (
      <HashRouter>
        
      <div className="App">
        {routes}
      </div>
        
      </HashRouter>
    );
  }

  

export default App;