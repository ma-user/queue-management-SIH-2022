import {React,useState,useEffect, useContext} from 'react';
import Cards from './Cards';
import './midpage.css';
import { DistrictContext } from './DistrictContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

const MidPage =()=>{
 const array =useContext(DistrictContext);
 const [value,setValue]=array[0];
 const [type,setType]=array[1];
  //  console.log(value);
  
let [orgList,setOrgList] = useState([]);

    const fetchOrganisation =async()=>{
    
      console.log(value);
     
    const resp = await fetch(`https://one-queue-server.herokuapp.com/api/_v1/get/organization/`);
     
    const data = await resp.json();


    console.log(data.organization);
    const arr = data.organization;
    if(value!==""){
    let myarr = arr.filter((ele)=>{
      return ((ele.district === `${value}`));
    })
   
    if(type!==""){
      let newarr = myarr.filter((ele)=>{
        return ((ele.type === `${type}`));
      })
      setOrgList(newarr);
    }
    else{
      setOrgList(myarr);
    }
  }
    else{
      if(type!==""){
        let newarr = arr.filter((ele)=>{
          return ((ele.type === `${type}`));
        })
        setOrgList(newarr);
      }
      else{
        setOrgList(arr);
      }
      
    }
      
   
}
useEffect(()=>{
    fetchOrganisation();
},[value,type])

// const orgList=[
//     {
//         src:"https://media.istockphoto.com/photos/pharmacy-chemist-woman-in-drugstore-picture-id167236700?k=20&m=167236700&s=612x612&w=0&h=C_C4XW13vuzdw91D3XLqv5LGxC5GzX6ZZL5cSArLWso=",
//         name:"Medical",
//         tokens:2,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     }

//     ,{
//         src:"https://media.istockphoto.com/photos/billboard-series-picture-id483287991?b=1&k=20&m=483287991&s=170667a&w=0&h=wyKydg7HOGHuK8-MR-kmLeD15wpuFmdxDoUDMjRzpyk=",
//         name:"Bus Stops",
//         tokens:6,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     }
//     ,{
  
//         src:"https://media.istockphoto.com/photos/indian-parliament-in-new-delhi-the-politic-government-of-india-picture-id184085544?k=20&m=184085544&s=612x612&w=0&h=En8wfmqblytHVPJFPMzWdxhAx6ByanMOa7bEzZQcisA=",
//         name:"Government Office",
//         tokens:6,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     }
//      ,{
  
//         src:"https://media.istockphoto.com/photos/indian-parliament-in-new-delhi-the-politic-government-of-india-picture-id184085544?k=20&m=184085544&s=612x612&w=0&h=En8wfmqblytHVPJFPMzWdxhAx6ByanMOa7bEzZQcisA=",
//         name:"Government Office",
//         tokens:6,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     },
//     {
  
//         src:"https://media.istockphoto.com/photos/indian-parliament-in-new-delhi-the-politic-government-of-india-picture-id184085544?k=20&m=184085544&s=612x612&w=0&h=En8wfmqblytHVPJFPMzWdxhAx6ByanMOa7bEzZQcisA=",
//         name:"Government Office",
//         tokens:6,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     },
//     {
  
//         src:"https://media.istockphoto.com/photos/indian-parliament-in-new-delhi-the-politic-government-of-india-picture-id184085544?k=20&m=184085544&s=612x612&w=0&h=En8wfmqblytHVPJFPMzWdxhAx6ByanMOa7bEzZQcisA=",
//         name:"Government Office",
//         tokens:6,
//         status:"Open",
//         traffic:"no traffic",
//         tokenAvail:4
//     },

     
// ];
let [counter,setCounter]=useState(0);
    return(
      <div className="container mywrapper">
  <div className="wrapper">

     {orgList.map((org)=>{
      return (
       org.services.map((service)=>{
          return(
         
     

       
      <Cards
        img={org.logo}
        name={org.name}
        token ={org.currentTokenServed}
        serviceName={service.serviceName}
        serviceCode={service.serviceCode}
        status={org.activeStatus}
        traffic={org.currentTraffic}
        tokenAvail ={org.numberOfAllowedTokens}
        id={org._id}
        key ={org._id}
      />
         
      )
    })
        
      )
      }
     )
    }
      
    </div>
    </div>
  
    );


}
export default MidPage;