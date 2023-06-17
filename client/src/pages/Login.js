import React from 'react'
import { Form } from 'antd'
import {Link} from 'react-router-dom'
import "../styles/RegisterStyles.css";
const Login = () => {

    // form handler
    const onfinishHandler = (values) => {
        console.log(values)
    }
  return (
    <div>
      <>
          <div className="form-container">
              <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
                
                 <h3 className="text-center">Login Form</h3>
                 
                 <Form.Item label="Email" name="email">   
                      <input type="email" required />
                 </Form.Item>

                 <Form.Item label="Password" name="password">   
                      <input type="password" required />
                 </Form.Item>

                 <Link to="/register" className="m-2">Not a user login here</Link>
                 <button className="btn btn-primary" type="submit">
                  Login
                 </button>
              </Form>
          </div>
      </>
    </div>
  )
}

export default Login
