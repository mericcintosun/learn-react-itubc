
const Button = () => {

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     alert(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     alert(`${name}! Stop clicking me!`);
  //   }
  // };
  const handleClick = (e) => {
    e.target.textContent = "UPS!";
  }
  return (
    <>
      <button
        id="click-button"
        className="bg-[#00aaff] text-white py-3 px-10 rounded-md cursor-pointer"
        onClick={(e) => handleClick(e)}
      >
        Click Me!
      </button>
    </>
  );
};

export default Button;
