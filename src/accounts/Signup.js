import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser } from '../redux/userSlice'
import './css/Login.css'

export const Signup = () => {
  const dispatch = useDispatch();

  const initialData = {
    "status": false,
}

  const [data, updateData] = useState(initialData);

  const handleChange = (e) => {
    updateData({
      ...data,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const register = (e) => {
    e.preventDefault()
    console.log(data)
    if(data){
      dispatch(addUser(data))
    }
  }

  return (
    <form>
        <h1>Employer Sign Up</h1>
        <div className="inset">
        <p>
            <label for="email">EMAIL ADDRESS</label>
            <input type="text" name="email" id="email" onChange={handleChange}  required />
        </p>
        <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" id="password" onChange={handleChange} required />
        </p>
    </div>
    <p className="p-container">
      <input type="submit" name="go" id="go" value="Sign Up" onClick={register} />
    </p>
  </form>
  )
}
