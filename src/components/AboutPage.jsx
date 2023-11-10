import React, { useContext } from 'react'
import CartContext from './CartContext';

function AboutPage() {
   const cartInfo = useContext(CartContext);

   return <>Username: {cartInfo.username}</>;
}

export default AboutPage