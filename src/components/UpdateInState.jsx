import { useState } from "react";

const UpdateInState = () => {
  const [car, setCar] = useState({
    year: 2022,
    make: "Ford",
    model: "Mustang",
  });

  const handleYear = (e) => {
    setCar((car) => ({ ...car, year: e.target.value }));
  };
  const handleMake = (e) => {
    setCar((car) => ({ ...car, make: e.target.value }));
    
  };
  const handleModel = (e) => {
    setCar((car) => ({ ...car, model: e.target.value }));
   
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 text-xl">
        <p>
          Your favorite car is: {car.year} {car.make} {car.model}
        </p>

        <div
          className="flex flex-col gap-2 border border-cyan-400"
          id="input-items"
        >
          <input
            className="border border-red-600 p-2 m-4"
            type="number"
            value={car.year}
            onChange={handleYear}
          />{" "}
          <br />
          <input
            className="border border-red-600 p-2 m-4"
            type="text"
            value={car.make}
            onChange={handleMake}
          />{" "}
          <br />
          <input
            className="border border-red-600 p-2 m-4"
            type="text"
            value={car.model}
            onChange={handleModel}
          />{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default UpdateInState;
