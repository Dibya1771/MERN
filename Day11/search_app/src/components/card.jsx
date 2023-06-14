import React from 'react';
import "./Card.css"

const Card = ({image, name,email,mobile,gender, onDelete, onPatch, buttonText }) => {
//const Card = ({image, name,email,mobile,gender, onDelete, onPatch, buttonText }) => {
  return (
    <div className="card">
      <div className='text-name'>
      <img src={image} alt="User" />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{mobile}</p>
      <p>{gender}</p>
      </div>
      <div className="button-container">
        <button onClick={onPatch} id='upd'>Update</button>
        <button onClick={onDelete} id='del'>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;