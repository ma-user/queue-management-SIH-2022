import React,{useState,createContext,useEffect} from 'react';
export const DistrictContext=createContext();
export const DistrictProvider=props=>{
    
   let[value,setValue]= useState("");
   let [type,setType]=useState("");
   return(
    <DistrictContext.Provider value={[[value,setValue],[type,setType]]}>
      {props.children}
    </DistrictContext.Provider>
   ) 
  
}