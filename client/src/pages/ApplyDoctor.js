import React from 'react'
import Layout from '../components/Layout'
import { Row,Col, Form,Input,TimePicker, Button } from 'antd'

const ApplyDoctor = () => {
    // handle form
    const handleFinish = (values) => {
        console.log(values)
    }

  return (
    <Layout>
       <div className="text-center">Apply Doctor</div>

       <Form layout='vertical' onFinish={handleFinish} className='m-4'>

        <h4 className="text-bold">Personal Details :</h4>
       <Row gutter={20}>
          
           {/* column one for First name */}
            <Col xs={24} md={24} lg={8}>
              <Form.Item label="First Name" name="firstName" required
              rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your first name"/>
              </Form.Item>
            </Col>
          
            {/* column two for Last name */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Last Name" name="lastName" required
            rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your last name"/>
            </Form.Item>
            </Col>
         
            {/* column three for Phone number */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Phone Number" name="phone" required
            rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your phone number"/>
            </Form.Item>
            </Col>

            {/* column one for Email */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Email" name="email" required
            rules={[{required:true}]}>
                <Input type="email" placeholder="Enter your email"/>
            </Form.Item>
            </Col>

            {/* column two for Website */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
                <Input type="text" placeholder="Enter your website"/>
            </Form.Item>
            </Col>

            {/* column three for Address */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Address" name="address" required
            rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your address"/>
            </Form.Item>
            </Col>

       </Row>

         <h4 className="text-bold">Professional Details :</h4>
       <Row gutter={20}>
             {/* column one for specialization */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Specialization" name="specialization" required
            rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your specialization"/>
            </Form.Item>
            </Col>

            {/* column two for experience */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Experience" name="experience" required
            rules={[{required:true}]}>
                <Input type="text" placeholder="Enter your experience"/>
            </Form.Item>
            </Col>

            {/* column three for fees per consulating */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Fees Per Consulating" name="feesPerConsulating" required
            rules={[{required:true}]}>
                <Input type="number" placeholder="Enter your fees per consulating"/>
            </Form.Item>
            </Col>

            {/* column one for work timing */}
            <Col xs={24} md={24} lg={8}>
            <Form.Item label="Work Timing" name="timing" required
            rules={[{required:true}]} >
                <TimePicker.RangePicker />
            </Form.Item>
            </Col>

      </Row>
 
       <div className="d-flex justify-content-end">
            <button className="btn btn-primary form-btn" type='submit'>Submit</button>
       </div>

       </Form>
    </Layout>
  )
}

export default ApplyDoctor
