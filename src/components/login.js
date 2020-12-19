import React from 'react';

import { Form, Input, Button, Checkbox, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import login1 from '../images/Login1.svg';

function Login() {

    return (
        <Row>
            <Col span={12} className="bg-clr">
                <div className="imgdiv flex-between" style={{justifyContent: "center"}}>
                    <Image src={login1}/>
                </div>
            </Col>
            <Col span={12}>
                <div className="p-50-100">
                    <div className="flex-between mb-100">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr">Sign Up</Button>
                    </div>
                    <h1 className="ta-left bold-clr">Log in</h1>
                    <Form layout="vertical">
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr">Email address</p>
                            <Input placeholder="you@example.com" />
                        </div>
                        <div className="mb-30">
                            <div className="flex-between">
                                <p className="light-bold-clr">Password</p>
                                <p className="light-bold-clr main-clr">Forgot Password?</p>
                            </div>
                            <Input placeholder="Enter your password" />
                        </div>
                        <div className="mb-30 ta-left">
                            <Checkbox>Keep me logged in</Checkbox>
                        </div>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Log in</Button>
                        </Form.Item>
                    </Form>
                    <div className="mb-50">
                        <p className="ta-left bold-clr">Dont have an account? <span className="main-clr">Sign up</span></p>
                    </div>
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

export default Login;