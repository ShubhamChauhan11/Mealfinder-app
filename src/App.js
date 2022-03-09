import React, { useState } from 'react';
import './App.css';
import  Axios  from 'axios';
import Items from './Components/Items';

function App() {
  const [text, setText]= useState("");
  const [item, setItem]= useState([]);

  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
  console.log(text);
  const getData=async()=>{
    const data= await Axios.get(url);
    console.log(data);
    setItem(data.data.meals);

    console.log( item);
  }
  const getrandom=async()=>{
    const data= await Axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    console.log(data);
    setItem(data.data.meals);
  }
  
  const searchresult=(e)=>{
    e.preventDefault();
    if(text!==""){
      getData();

    }
    
    setText("");
  }
  document.body.style = 'background: orange;';
  const sufflestyle={
    height:35,
    width:80,
    fontSize:20
  }
 
  return (
    <div className='App'>
    <h1 >Meal Finder</h1>
    <form onSubmit={searchresult}>
        <input style={{ height:30,width:200,fontSize:20}}type="texy" placeholder='Type Meal' value={text} onChange={(e)=>{
          setText(e.target.value)
        }}></input>
        <input style={{height:35,width:80,fontSize:20}}type="submit" value="search"/>
        <button style={sufflestyle} onClick={getrandom}>suffle</button>
        
        
    </form>
    
    <Items  item={item}/>
   
    </div>
    
  )
}

export default App;
