import React,{useState,useEffect} from 'react';

const QrPage =({match,history})=>{
let [orgList,setOrgList] = useState([]);
    const id = match.params.id; // serviceCode
    const orgId = match.params.orgId; // orgId 
  useEffect(()=>{
    console.log("hey")
   hello();
   },[id,orgId]);
    console.log(id);
    console.log(orgId);
    console.log(typeof +id ,typeof +orgId);
    // const fetchorganization  = async()=>{
    //     console.log("inside func")
    // const resp = await fetch("https://one-queue-server.herokuapp.com/api/_v1/get/organization/");
     
    // const data = await resp.json();

    // setOrgList(data.organization);
    // console.log(orgList);
    // }
    const hello = ()=>{
        console.log("hello")
    }
 


console.log(orgList);
let myorg = orgList.find((org)=>{
return org._id === (orgId);
})
console.log(myorg);
let service = myorg.services.find((ser)=>{
    return ser.serviceCode === (+id);
})
//now service.qrcode
    return (
        <div>
        <h2>One-Queue</h2>

<div className="qr">
<img src = {service.qrcode}  alt ="qr code"/>

    </div>



            </div>
    )
}

export default QrPage;