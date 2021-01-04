import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';
export const CardList = (props) => (
  <div className='card-list'>
    {props.mosters.map((monster) => (
      <Card key={monster.id} moster={monster} />
    ))}
  </div>
);
