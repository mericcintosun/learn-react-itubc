// import Button from "./components/Button";
// import Card from "./components/Card";
// import Food from "./components/Food";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Student from "./components/Student";
import "./index.css";
function App() {
  return (
    <>
      <Student name = 'Meriç' age = {22} isStudent={true} />
      <Student name = 'Ece' age = {22} isStudent={false} />
      <Student name = 'Çetin Eymen' age = {12} isStudent={true} />
      <Student name = 'Mehmet' age = {65} isStudent={false} />
      <Student/>
    </>
  );
}

export default App;
