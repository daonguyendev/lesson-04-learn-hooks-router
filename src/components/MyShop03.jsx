import React, { useMemo, useState } from "react";

function MyShop03() {
  const [text, setText] = useState("Hello!");

    const ChildComponent = ({text}) => {
        console.log("rendered again!");
        return <>{text}</>
    }

    const MemoziedComponent = useMemo(() => <ChildComponent text={text}/>, [text]);

  return (
    <>
      <button onClick={() => setText("Hello!")}>Hello!</button>
      <button onClick={() => setText("Hola!")}>Hola!</button>
      {MemoziedComponent}
    </>
  );
}

export default MyShop03;
