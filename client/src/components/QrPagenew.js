import React,{useEffect,useState} from 'react';

const QrPagenew =({match,history})=>{

    let [orgList,setOrgList] = useState([]);
   const id = match.params.id;
   const orgId = match.params.orgId;

    const fetchOrganization =async()=>{
         const resp = await fetch(`https://one-queue-server.herokuapp.com/api/_v1/get/organization/`);
     
    const data = await resp.json();


    console.log(data.organization);
    setOrgList(data.organization);
    }
    useEffect(()=>{
       
console.log("inside function")
        fetchOrganization();
    },[]);

console.log(orgList);
let myorg = orgList.find((org)=>{
return org._id === (orgId);
})
console.log(myorg);
let service = myorg.services.find((ser)=>{
    return ser.serviceCode === (+id);
})

return (
    <div>
        <h2>One-Queue</h2>

<div className="qr">
<img src = {service.qrcode}  alt ="qr code"/>

    </div>



            </div>
)

}

export default QrPagenew;