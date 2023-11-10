import React, { useContext } from "react";
import CartContext from "./CartContext";

function HomePage() {
  const cartInfo = useContext(CartContext);

  return (
    <>
      User Id: {cartInfo.userId}
      <br></br>
    </>
  );
}

export default HomePage;
