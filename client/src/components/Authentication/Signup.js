import React from 'react';
const Signup = ()=>{

    return(
<div id="login-form">
    <h3>Organizational Login</h3>
<form>
    <input type="text" placeholder="Enter email or username"/>
    <input type="password" placeholder="Enter password"/>
    <button type="button" class="btn login">login</button>
    <p><a href="javascript:void(0)">Forgotten account</a></p>
    <hr/>
    <button type="button" class="btn -box-sd-effect"> <i class="fa fa-google fa-lg" aria-hidden="true"></i> sign in with google</button>
    <button type="button" class="btn -box-sd-effect"> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> sign in with linkedin</button>
    <button type="button" class="btn -box-sd-effect"> <i class="fa fa-windows fa-lg" aria-hidden="true"></i> sign in with microsoft</button>
</form>
</div>
    )
}
export default Signup;
