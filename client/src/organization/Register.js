import React from 'react';
import "./register.css"
function Register(){
  return(

 
  <div>
    <div class="header">One-Queue</div>
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Organization Name</span>
              <input type="text" placeholder="Enter your username" required/>
            </div>
            <div class="input-box">
            <select name="category" id="category" className="form-control " >
                    <option value="">Select District</option>
                    <option value="hospital">Jaipur</option>
                    <option value="government">Kota</option>
                    <option value="stands">Ajmer</option>
                    <option value="other">Udaipur</option>
                </select>
            </div>
            <div class="input-box">
            <select name="category" id="category" className="form-control " >
                    <option value="">Select Type</option>
                    <option value="hospital">Hospital and related Facility</option>
                    <option value="government">Government Offices & Facilities</option>
                    <option value="stands">Bus Stands/ Railway Station</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required/>
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required/>
            </div>
            <div class="input-box">
              <span class="details">Enter Address</span>
              <input type="text" placeholder="Enter your Address" required/>
            </div>
            <div class="input-box">
              <span class="details">Enter Description</span>
              <input type="text" placeholder="Enter The Description" required/>
            </div>
            <div class="input-box">
              <span class="details">Upload Logo</span>
              <input type="file" id="myfile" name="myfile"/>
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" placeholder="Enter your password" required/>
            </div>
            <div class="input-box">
              <span class="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required/>
            </div>
          </div>
           
          
          <div class="button">
            <input type="submit" value="Register"/>
          </div>
        </form>
      </div>
    </div>
    
  </div>

);
}
export default Register;
