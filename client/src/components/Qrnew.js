import React,{useEffect,useState} from 'react';

const Qrnew =({match})=>{

   const id = match.params.id;
   const orgId = match.params.orgId;
    
let [orgList,setOrgList] = useState([]);
   
     const fetchOrganisation =async()=>{
    
    
     
    const resp = await fetch(`https://one-queue-server.herokuapp.com/api/_v1/get/organization/`);
     
    const data = await resp.json();


    console.log(data);
   
      setOrgList(data.organization);
   
}
    useEffect(()=>{
    fetchOrganisation();
},[])
 
    console.log(orgList);
let myorg = orgList.find((org)=>{
return org._id === (orgId);
})
console.log(myorg);
let service = undefined;
if(service){
service = myorg.services.find((ser)=>{
    return ser.serviceCode === (+id);
})
console.log(service);
console.log(service.qrcode);
}
return (
    <div>
        <h2>One-Queue</h2>

<div className="qr">
    {(service!==undefined)?<img src = {service.qrcode}  alt ="qr code"/> :<></>}


    </div>



            </div>
)
}

export default Qrnew;