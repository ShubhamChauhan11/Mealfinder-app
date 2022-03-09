import { useState } from "react";
import Ingredient from "./Ingredient";
import "./Items.css"
import Text from "./Text";
function Items({ item }) {
     
     const[content, setContent]= useState(false);
     const[ide,setIde]= useState("");
     function makecontent(id){
         setContent(!content);
         setIde(id);
         console.log(ide);
     }
     
     
     return (

          
          <>
         
          <div className="main">
          {item.map((ele,index)=>{
               return(
                   
                    <div  className="container">
                      <img id="img" 
                      onClick={()=>makecontent(index)} 
                      
                      src={ele.strMealThumb}
                      ></img>
                      
                     
                      <h4 id="imgtext">{ele.strMeal}</h4>
                      
                    </div>  
                    
                    
                       
                       
               )
          })}          
     </div> 
     {content?(<>
               <Text item={item} 
               
               id={ide}/>
               <Ingredient item={item}
               id={ide}
                />
               </>
          ): ""}
          
          
        </>       
      
          

     );
     
}
export default Items;