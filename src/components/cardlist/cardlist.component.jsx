import React from 'react';
import './cardlist.style.css';
import {Card} from '../card/card.component';


function Cardlist(props){
    const {text, monsters}=props;
    return(
     <div className='cardlist'>
        {
            monsters.map((monster,index)=>(
             <Card key={monster.id} monster={monster}/>
            )
            )
        }
     </div>
    );
} 
export{Cardlist};