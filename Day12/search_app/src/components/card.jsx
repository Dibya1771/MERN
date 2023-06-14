import React from "react";

function Card({userid, body,title}) {
    return (
        <div>
            <h1>{userid}</h1>
            {/* <img src={logo} alt="err" /> */}
            <h3>{title}</h3>
            {/* <h3>{country}</h3> */}
            <p>{body}</p>
        </div>
    );
}
export default Card;
