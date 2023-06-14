import React from 'react';
import "./Card.css"

const Card = ({ image, title, id, onDelete, onPatch, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt="User" />
      <h3>{title}</h3>
      <div className="button-container">
        <button onClick={onPatch}>Update</button>
        <button onClick={onDelete}>{buttonText}</button>
      </div>
    </div>
  );
};




//-------------- EEE -----------------------
// function Card({ image, id, title, onClick, buttonText }) {
//   return (
//     <div>
//       <div className='card'>
//       <h1>{title}</h1>
//       <img src={image} alt="Error" />
//       <p>{id}</p>
//       <button onClick={onClick}>{buttonText}</button>
//       </div>
//     </div>
//   );
// }


//----------- Only for search -----------------
// function Card({image,title}){
//   return(
//     <div>
//       <div className='card'>
//       <img src={image} alt="err"/>
//       <h3>{title}</h3>
//       </div>
//     </div>
//   );
// }

export default Card;
