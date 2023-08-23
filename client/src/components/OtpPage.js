 import React,{useState,useEffect} from "react";
 import OTPInput, { ResendOTP } from "otp-input-react";
 import { Link } from "react-router-dom";
 import "./form.css"
 function OtpPage(){
    const [OTP, setOTP] = useState("");
    return(
        <div className="otp">
            <h1> OTP Verification</h1>
         <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
      <Link to="/detail"><button className="btn btn-primary otpbtn">Verify</button></Link>
    </div>
    
    
    );
    }
    export  default OtpPage;
   