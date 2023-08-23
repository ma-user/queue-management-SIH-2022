import React from 'react';
// import "./loginPage.css"
function LoginPage(){
	return(
 
  <div class="form">

    <ul class="top-area">
      <li class="tab active"><a href="/signup">Organization Login</a></li>
      <li class="tab"><a href="/login">Official Login</a></li>
    </ul>

    <div class="tab-content">
      <div id="signup">

        <form action="/" method="post">
          <div class="label-field">
            <input type="text" required autocomplete="off" name="email"
              placeholder="Enter username, email or phone number" />
          </div>

          <div class="label-field">
            <input type="password" required autocomplete="off" name="pswd" placeholder="Enter Password" />
          </div>

          <p class="forgot"><a href="/">Forgot Password?</a></p>

          <button type="submit" class="button button-block">Login</button>

        </form>

      </div>

      <div id="login">

        <form  method="post">

          <div class="label-field">
            <input type="email" required autocomplete="off" name="email"
              placeholder="Enter username, email or phone number" />
          </div>

          <div class="label-field">
            <input type="password" required autocomplete="off" name="pswd" placeholder="Enter Password" />
          </div>

          <p class="forgot"><a href="/">Forgot Password?</a></p>

          <button class="button button-block">Log In</button>

        </form>

      </div>

    </div>
  </div>
  


	);

}
export default LoginPage;
