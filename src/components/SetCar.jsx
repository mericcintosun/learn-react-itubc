import { useState } from "react";

const SetCar = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((cars) => [...cars, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };
  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((element, i) => i !== index));
  };
  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };
  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <div className="p-6  min-h-screen flex items-center border justify-center">
        <div className="  border shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">List of Car Objects</h2>
          <ul className="mb-4">
            {cars.map((car, i) => (
              <li key={i} className="mb-2">
                {car.year} {car.make} {car.model}
                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveCar(i)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <input
              type="number"
              value={carYear}
              onChange={handleYearChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              placeholder="Enter car year"
            />
            <input
              placeholder="Enter car make"
              type="text"
              value={carMake}
              onChange={handleMakeChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              placeholder="Enter car model"
              type="text"
              value={carModel}
              onChange={handleModelChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleAddCar}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
          >
            Add Car
          </button>
        </div>
      </div>
    </>
  );
};

export default SetCar;
