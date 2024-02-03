import React, { useState } from 'react'
import './Buttontext.css'

function Buttontext() {
    const ob={
        class:"shown",
        btntxt:"Hide"
    }
    const [show,setShow]=useState(ob);
    function Fun(){
        if(show.class === "shown"){
            setShow({
                class:"hidden",
                btntxt:"Show"
            })
        }
        else{
            setShow({
                class:"shown",
                btntxt:"Hide"
            })
        }
    }

  return (
    <div><h3 className={show.class}>hello we are hidding text</h3>
    <button onClick={Fun} >{show.btntxt}</button>
    </div>
  )
}

export default Buttontext