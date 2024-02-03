import React, { useState } from 'react'

function Stylechange() {
    const stylech ={
        title:"CNC WEB WORLD",
        css:{
            color:"red",
            fontSize:"28px"
        }

    }
    const [fontstyle,mystyle]=useState(stylech);
    function newStyle(){
        mystyle({
            title:"its my programming world",
            css:{
                color:"blue",
                fontSize:"40px",
                border:"2px solid red"
            }
        })
    }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Techlimpid</h1>
    <h2 style={fontstyle.css}>{fontstyle.title}</h2>
    <button onClick={newStyle}> sneha</button>
    <hr />

    </>
  )
}

export default Stylechange