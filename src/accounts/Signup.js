import React from 'react'
import './css/Login.css'

export const Signup = () => {
  return (
    <form>
        <h1>Employer Sign Up</h1>
        <div className="inset">
        <p>
            <label for="email">EMAIL ADDRESS</label>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" id="password" />
        </p>
    </div>
    <p className="p-container">
      <input type="submit" name="go" id="go" value="Sign Up" />
    </p>
  </form>
  )
}
