import { useState } from "react"


const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [age , setAge] = useState("0");
    const updateName = () => {
        setName("Meriç");       
        setAge("22");
    }

  return (
    <>
    
    <div>
        <p>Age: {age}</p>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name!</button>
    </div>
    
    </>
  )
}

export default MyComponent