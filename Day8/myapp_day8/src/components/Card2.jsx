import React from "react";
import { useState } from "react";
function Card2({image,title}) {
  // const change=0;

  return(
    <div>
        <img src={image} alt="error" style={{width:"100px",height:"100px"}}></img>
        <div className="title">{title}</div>
    </div>
    );
}
export default Card2;