import React from 'react';
import './card.style.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        alt='monsters'
        src={`https://robohash.org/${props.moster.id}?set=set2&size=270x270`}
      />
      <h2>{props.moster.name}</h2>
      <h3>{props.moster.email}</h3>
    </div>
  );
};
