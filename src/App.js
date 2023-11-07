import {useState, useEffect } from 'react';
import './App.css'
import { Logo } from './components/logo/logo.component';
// import {Box} from './components/box/box.component';
import { Cardlist } from './components/cardlist/cardlist.component';
import {SearchBox} from './components/searchbox/searchbox.component.jsx';


function App() {
const[monsters,setmonsters]=useState([]);
const[searchValue,setSearchValue]=useState('');


useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>setmonsters(data));

},[]);

const onSearchChange=(e)=>{
  setSearchValue(e.target.value);
}

const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchValue.toLowerCase()))


  return(
<div className='app'>
  
  <Logo />
  <SearchBox onSearchChange={onSearchChange}/>
{/* <Box/> */}
<Cardlist  monsters={filteredMonsters}/>
 </div>
  );
  }


export default App;