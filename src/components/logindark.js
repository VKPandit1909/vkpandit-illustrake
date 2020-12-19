import React from 'react';

import { Form, Input, Button, Checkbox, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import loginDark1 from '../images/LoginDark1.svg';

function LoginDark() {

    return (
        <Row>
            <Col span={12} className="bg-dark-clr">
                <div className="imgDarkdiv flex-between" style={{ justifyContent: "center" }}>
                    <Image src={loginDark1} />
                </div>
            </Col>
            <Col span={12} className="dark-mode">
                <div className="p-50-100">
                    <div className="flex-between mb-100">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr border-clr" style={{backgroundColor: 'transparent'}}>Sign Up</Button>
                    </div>
                    <h1 className="ta-left bold-clr dark-mode-clr">Log in</h1>
                    <Form layout="vertical">
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr dark-mode-color">Email address</p>
                            <Input placeholder="you@example.com" className="dark-mode second-dark-clr border-clr" />
                        </div>
                        <div className="mb-30">
                            <div className="flex-between">
                                <p className="light-bold-clr dark-mode-color">Password</p>
                                <p className="light-bold-clr main-clr">Forgot Password?</p>
                            </div>
                            <Input placeholder="Enter your password" className="dark-mode second-dark-clr border-clr" />
                        </div>
                        <div className="mb-30 ta-left">
                            <Checkbox style={{color: "#DBDBDB"}}>Keep me logged in</Checkbox>
                        </div>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Log in</Button>
                        </Form.Item>
                    </Form>
                    <div className="mb-50">
                        <p className="ta-left bold-clr dark-mode-clr">Dont have an account? <span className="main-clr">Sign up</span></p>
                    </div>
                    <div className="vertical-bottom">
                        <div className="flex-between">
                            <p className="second-dark-clr"><a className="second-dark-clr text-line">Privacy Policy</a> and <a className="second-dark-clr text-line">Terms of Service</a></p>
                            <p className="main-clr"><QuestionCircleFilled style={{marginRight: '5px'}} />Help</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default LoginDark;