// import Button from "./components/Button";
// import Card from "./components/Card";
// import Food from "./components/Food";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Student from "./components/Student";
// import UserGreeting from "./components/UserGreeting";
import List from "./components/List";

import "./index.css";
function App() {
  const fruits = [
    { id: 1, name: "apple", property: 95 },
    { id: 2, name: "orange", property: 45 },
    { id: 3, name: "banana", property: 105 },
    { id: 4, name: "coconut", property: 159 },
    { id: 5, name: "pineapple", property: 37 },
  ];
  const countries = [
    { id: 1, name: "Turkey", property: "red" },
    { id: 2, name: "Greece", property: "blue" },
    { id: 3, name: "ABD", property: "white" },
    { id: 4, name: "Germany", property: "yellow" },
    { id: 5, name: "Italy", property: "green" },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {countries.length > 0 ? <List items={countries} category="Countries" /> : null}
    </>
  );
}

export default App;
