import { useState } from "react";

const UpdateFunc = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  };
  const decrement = () => {
    setCount(count => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 mt-12 text-xl">
        <p>Count: {count}</p>
        <button className="border rounded-xl px-6 py-3 m-3" onClick={increment}>
          increment
        </button>
        <button className="border rounded-xl px-6 py-3 m-3" onClick={decrement}>
          decrement
        </button>
        <button className="border rounded-xl px-6 py-3 m-3" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
};

export default UpdateFunc;
