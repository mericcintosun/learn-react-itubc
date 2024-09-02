import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("Meric");

  return (
    <>
      <div id="box">
        <h1 className="title">ComponentA</h1>
        <h2> {`Hello ${user}`} </h2>
        <UserContext.Provider value={user}>
          <ComponentB user={user} />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
