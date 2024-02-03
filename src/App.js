
import './App.css';
import { useState } from 'react';
import Stylechange from './Stylechange/Stylechange';
import Fontsize from './Fontsize/Fontsize';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap';
import Buttontext from './Buttontext/Buttontext';

function App() {
  // console.log(useState());
  // const [data, update]= useState("programming world");

  let [count, setCount] = useState(1);
  let [bg, bgColor]=useState("bg-warning")
  function Subt() {
    if (count > 1) {
      count -= 1;
      setCount(count);
    }
  }
  function Pluse() {
    if (count < 20) {
      count += 1;
      setCount(count);
    }
  }
  return (
    <>
      <div style={{ height:"100vh"}} className={bg}>
        {/* <h1>{data}</h1>
    <button onClick={()=>update("software quine sneha")}>its cnc</button> */}
        <h1>
          Counter
        </h1>
        <h2>Value: {count}</h2>
        <button onClick={Subt}>Sub</button> &nbsp;
        <button onClick={Pluse}>Add</button>
        <br />
        <hr />

        <Stylechange />
        <Fontsize />
       
        <div className='d-flex justify-content-evenly'>
          <button className='btn btn-success'onClick={()=>bgColor('bg-success')}>green</button>
          <button className='btn btn-danger' onClick={()=>bgColor('bg-danger')}>red</button>

        </div>
      </div>
      <Buttontext />
    </>

  );
}

export default App;
