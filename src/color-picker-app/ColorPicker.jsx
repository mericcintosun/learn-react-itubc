import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col items-center" id="color-picker">
      <h1 className="text-2xl m-[50px]">Color Picker</h1>
      <div
        id="color-display"
        className="w-[300px] flex items-center justify-center border rounded-md mb-[25px] transition-all ease-linear"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-xl text-center" style={{ backgroundColor: color }}>
        Selected Color: {color}
      </p>
      <label className="font-bold text-xl mb-3">Select a Color:</label>
      <input
        className="w-72 border rounded-xl bg-transparent h-12"
        type="color"
        value={color}
        onChange={handleColor}
      />
    </div>
  );
};

export default ColorPicker;
