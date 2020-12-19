import React from 'react';

import { Form, Input, Button, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import ResetPassword1 from '../images/ResetPassword1.svg';

function ResetPassword() {

    return (
        <Row>
            <Col span={12} className="bg-clr">
                <div className="imgdiv flex-between" style={{justifyContent: "center"}}>
                    <Image src={ResetPassword1}/>
                </div>
            </Col>
            <Col span={12}>
                <div className="p-50-100">
                    <div className="flex-between mb-100">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr">Log in</Button>
                    </div>
                    <h1 className="ta-left bold-clr">Reset Password?</h1>
                    <Form layout="vertical" className="mb-100">
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr">New Password</p>
                            <Input.Password placeholder="Enter your new password" />
                            <p className="light-bold-clr" style={{marginTop: "10px", fontSize: "12px"}}>Must be atleast 8 characters.</p>
                        </div>
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr">Confirm Password</p>
                            <Input.Password placeholder="Confirm your new password" />
                            <p className="light-bold-clr" style={{marginTop: "10px", fontSize: "12px"}}>Both passwords must match.</p>
                        </div>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Reset Password</Button>
                        </Form.Item>
                    </Form>
                    <div className="vertical-bottom">
                        <div className="flex-between">
                            <p className="second-clr"><a className="second-clr text-line">Privacy Policy</a> and <a className="second-clr text-line">Terms of Service</a></p>
                            <p className="main-clr"><QuestionCircleFilled style={{marginRight: '5px'}} />Help</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ResetPassword;