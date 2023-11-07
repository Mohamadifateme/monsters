import React from 'react';
import './searchbox.style.css';

const SearchBox =(props)=>{
    const {onSearchChange}=props;
    return (
      <input
      className='searchBox'
      type='search'
      placeholder='search monsters ...'
      onChange={onSearchChange}

      />
    );
}
export{SearchBox};