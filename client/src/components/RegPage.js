import React,{useState,useEffect} from 'react';
import "./RegPage.css";
import { Link } from "react-router-dom";
 import {BsPlusCircleFill} from "react-icons/bs";

  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {GoLocation} from "react-icons/go";
 import{IoIosMail} from "react-icons/io";
  import{IoCall} from "react-icons/io5"
const RegPage =({ match, history })=>{
  let [formValues,setFormValues]= useState([{name:"",age:0,gender:""}])
  const [name,setName]=useState("");
  const [age,setAge]=useState(0); 
  const[gender,setGender]=useState("");
  const [contact,setContact]=useState("")
  const id = match.params.id;
  // console.log(id);
const [org,setOrg]=useState({});
const fetchorg =async()=>{

const resp = await fetch(`https://one-queue-server.herokuapp.com/api/_v1/get/organization/${id}`);
const data = await resp.json();
console.log(data.organization[0]);
setOrg(data.organization[0]);
console.log(org.name)
}


useEffect(()=>{
  fetchorg();
},[id]);
 let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }

       
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let handleSubmit =async()=>{
  console.log("inside handlesubmit");
  //    const resp =  await fetch("https://one-queue-server.herokuapp.com/api/_v1/register/user/",
  // {method:'POST',
  // mode: 'no-cors',
  // 'Content-Type': 'application/json',
  //       body:JSON.stringify({
  //         userContact:{contact},
  //         userName:{name},
  //         userGender:{gender},
  //         userAge:{age}
  //       })
  //     });

      // console.log(resp.json());
      history.push('/otppage');
    }
return (
<div className="container-fluid mt-2 bwrapper">

<div className="row ml-2 mr-2">
<div className="col justify-content-center">
<div className="image-text">
<img src="https://media.istockphoto.com/photos/indian-parliament-in-new-delhi-the-politic-government-of-india-picture-id184085544?k=20&m=184085544&s=612x612&w=0&h=En8wfmqblytHVPJFPMzWdxhAx6ByanMOa7bEzZQcisA="/>
<div className="bottom-left">{org.name}</div>

</div>
<h4 className="time">Estimated Time: <span>38 minutes</span></h4>
</div>

<div className="col mt-5 pt-4">
<div className="first_line">
    <span className="green">Open </span><span className='itz_bold'>11:30 AM - 6:30 PM</span><span className='itz_bold'> <GoLocation/> Locate</span>
<br/>
<span className='itz_bold'>Address: {org.address}</span><br/>
<span className='itz_bold'>Pincode: XXXXXX</span>
<br/>
<span className='itz_bold'><IoCall/> {org.contact}</span><br/>
<span className='itz_bold'><IoIosMail/> {org.email}</span><br/>
<span className='itz_bold'>{org.website}</span><br/>
    </div>
  </div>
</div>

<div className="row justify-content-center my-form mt-4">
  <div className="col-4">
<form>
  <div className="form-group">
    
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address or Phone number" onChange={(e)=>{
    setContact(e.target.value)
  }}/>
    
  </div>

  {/* <div classNlame="form-group">
    
    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name"/>
   
  </div> */}
  <div className="row">
    <div className="col">
      <div className="form-group">
  <input type="text" className="form-control" placeholder="Enter age" onChange={(e)=>{
    setAge(e.target.value)
  }}/>
   
  </div>
    </div>
    <div className="col">
      <div className="form-group">


   <div className="dropdown">
  {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Gender
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <a className="dropdown-item" >Action</a>
    <a className="dropdown-item" >Another action</a>
    <a className="dropdown-item" >Something else here</a> 
  </div> */}
   <select name="category" id="category" className="form-control" onChange={(e)=>{
    setGender(e.target.value)
   }} >
                    <option value="">Select Gender</option>
                    <option value="hospital">Female</option>
                    <option value="government">Male</option>
                </select>
</div>
  </div>
    </div>
  
</div>

  <div className="form-group">
    <div className="form-group">Choose an appointment:</div>
     <div className="row">
    <div className="col">
      <div className="form-group">
  <input type="text" className="form-control" placeholder="Enter age"/>
   
  </div>
    </div>
    <div className="col">
      <div className="form-group">


   <div className="dropdown">
  {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select Gender
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a> }
  </div> */}
     <select name="category" id="category" className="form-control" >
                    <option value="">Select Gender</option>
                    <option value="hospital">Female</option>
                    <option value="government">Male</option>
                </select>
</div>
  </div>
    </div>
  
</div>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    For multiple users(validation might be required at the time of entry)
  </div>

  {formValues.map((element, index) => (
    <div>
  <div className="form-group">
    <input type="text" placeholder="Enter person 1 name" className="form-control" onChange={e => handleChange(index, e)} />
   
  </div>
    <div className="row">
    <div className="col">
      <div className="form-group">
  <input type="text" className="form-control" placeholder="Enter age" onChange={e => handleChange(index, e)} />
   
  </div>
    </div>
    <div className="col">
      <div className="form-group ">


   <div className="dropdown">
  {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Gender
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a> 
  </div> */}
   <select name="category" id="category" className="form-control" >
                    <option value="">Select Gender</option>
                    <option value="hospital">Female</option>
                    <option value="government">Male</option>
                </select>
</div>
  </div>
    </div>
    
      </div>
       {/* {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              } */}
    </div>
   
  ))}
   <button className="btn btn-outline" onClick={()=>setFormValues([...formValues,{name:"",age:0,gender:""}])}> <BsPlusCircleFill className="plus"/>   Add Person</button>


<div className="mybtn mb-4">
  <button type="submit" className="btn btn-primary btn-block " onClick={()=>{handleSubmit()}}>Book Appointment</button>
  </div>
</form>
</div>
</div>



</div>
)
}

export default RegPage;