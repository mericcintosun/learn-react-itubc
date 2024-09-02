import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
        // SOME CLEANUP CODE
    }
  }, [count, color]);

  const addCount = () => {
    setCount((c) => c + 1);
  };
  const subtractCount = () => {
    setCount((c) => c - 1);
  };
  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <>
      <p style={{ color: color }}>Count {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default UseEffect;
