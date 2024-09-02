import { useState } from "react";

const ArraysInState = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAdd = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  };



  return (
    <>
      <div className="border m-12 p-12 flex flex-col justify-center gap-12 items center">
        <h2 className="border">List of Food</h2>
        <ul className="border flex flex-col gap-12">
          {foods.map((food, index) => (
            <li className="border" key={index}>{food}</li>
          ))}
        </ul>
        <input className="border" type="text" id="foodInput" placeholder="Enter food name" />
        <button className="border" onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};

export default ArraysInState;
