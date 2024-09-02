import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <>
      <div id="box">
        <h1 className="title">ComponentB</h1>
        <ComponentC/>
      </div>
    </>
  );
};

export default ComponentB;
