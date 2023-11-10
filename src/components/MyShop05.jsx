import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

function MyShop05() {
    const { width, height } = useWindowSize();

  return (
    <>
      <h2>Window width: {width}</h2>
      <h2>Window height: {height}</h2>
    </>
  );
}

export default MyShop05