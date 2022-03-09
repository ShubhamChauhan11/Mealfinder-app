import React, { useState } from "react";
import "./Ingredient.css"
const Ingredient=(props)=>{
     const arr=[];
     
     console.log(props.item)
     
           
     arr.push(props.item[props.id].strIngredient1)
     arr.push(props.item[props.id].strIngredient2)
     arr.push(props.item[props.id].strIngredient3)
     arr.push(props.item[props.id].strIngredient4)
     arr.push(props.item[props.id].strIngredient5)
     arr.push(props.item[props.id].strIngredient6)
     arr.push(props.item[props.id].strIngredient7)
     arr.push(props.item[props.id].strIngredient8)
     arr.push(props.item[props.id].strIngredient9)
     arr.push(props.item[props.id].strIngredient10)
     arr.push(props.item[props.id].strIngredient11)
     arr.push(props.item[props.id].strIngredient12)
     arr.push(props.item[props.id].strIngredient13)
     arr.push(props.item[props.id].strIngredient14)
     arr.push(props.item[props.id].strIngredient15)
     console.log(arr)
    
     const csspart={
          border: "3px solid blue",
          height:"25px",
          width:"200px",
          marginTop:"5px",
          
          
          
     }
    
     
     return(
          <>
          <h2 className="first"> Ingredients</h2>
          <div className="firstdiv">
          {arr.map((ele,ind)=>{
               if(ele!==""){
                    return <h4 style={csspart} key={ind}>{ele}</h4>
               }
          })}
          </div>
          </>
          
          
     )
}
export default Ingredient