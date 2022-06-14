import React from 'react'
import './css/Login.css'

export const Login = () => {
  return (
    <form>
        <h1>Employer Log in</h1>
        <div className="inset">
        <p>
            <label for="email">EMAIL ADDRESS</label>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" id="password" />
        </p>
     <p>
      <input type="checkbox" name="remember" id="remember" />
      <label for="remember">Remember me for 14 days</label>
    </p>
    </div>
    <p className="p-container">
      <span>Forgot password ?</span>
      <input type="submit" name="go" id="go" value="Log in" />
    </p>
  </form>
  )
}
