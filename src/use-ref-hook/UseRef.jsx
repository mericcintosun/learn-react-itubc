import { useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  const handleClick1 = () => {
    if (inputRef1.current) {
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor = "yellow";
    }
  };

  const handleClick2 = () => {
    if (inputRef2.current) {
      inputRef2.current.focus();
      inputRef2.current.style.backgroundColor = "yellow";
    }
  };

  const handleClick3 = () => {
    if (inputRef3.current) {
      inputRef3.current.focus();
      inputRef3.current.style.backgroundColor = "yellow";
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center space-y-6 p-6">
      <button
        onClick={handleClick1}
        className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        Click me 1!
      </button>
      <input
        className="border border-blue-600 bg-blue-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        ref={inputRef1}
        defaultValue="Pizza"
      />

      <button
        onClick={handleClick2}
        className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400"
      >
        Click me 2!
      </button>
      <input
        className="border border-green-600 bg-green-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
        ref={inputRef2}
        defaultValue="Burger"
      />

      <button
        onClick={handleClick3}
        className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
      >
        Click me 3!
      </button>
      <input
        className="border border-purple-600 bg-purple-800 text-white rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
        ref={inputRef3}
        defaultValue="Sushi"
      />
    </div>
  );
};

export default UseRef;
