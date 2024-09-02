import {useContext} from 'react';
import { UserContext } from './ComponentA';
const ComponentD = () => {

  const user = useContext(UserContext);
  return (
    <>
      <div id="box">
        <h1 className="title">ComponentD</h1>
        <h1> {`Bye! ${user}`  } </h1>
      </div>
    </>
  );
};

export default ComponentD;
