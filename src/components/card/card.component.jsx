import React from 'react';
import './card.style.css';
 

const Card=(props)=>{
    const {monster}=props;
    return(
   <div className='card'>
  <img src={`https://robohash.org/'${monster.id}?set=set4&size=180x180`}alt="monster"/>

  <h2>{monster.name} </h2>
   <p> {monster.email} </p>
   </div>
    )
 }

 export{Card};

 