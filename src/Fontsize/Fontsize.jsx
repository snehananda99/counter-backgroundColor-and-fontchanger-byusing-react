import React, { useState } from 'react'
import './Fontsize.css'

function Fontsize() {
    const[fsize,setfsize]=useState();
    function getValue(e){
    //   console.log(e.target.value);
    let value=e.target.value+"px";
    setfsize(value);
    }
    function getColor(e){
        console.log(e.target.value);
        let color=e.target.value;
        setfsize(color);
    }
    
   
    

  return (
    <>
    <h1 style={{textAlign:"center"}}>font size changer</h1>
    <h1 style={{fontSize:fsize, color:fsize}}>Techlimpid</h1>
    <input type="range" name="range" onChange={getValue} step={5} min={25}/>
    <input type="color" name="color" onChange={getColor} />
    
    </>
  )
}

export default Fontsize