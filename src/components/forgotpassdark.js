import React from 'react';

import { Form, Input, Button, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import ForgotPasswordDark1 from '../images/ForgotPasswordDark1.svg';

function ForgotPasswordDark() {

    return (
        <Row>
            <Col span={12} className="bg-dark-clr">
                <div className="imgDarkdiv flex-between" style={{ justifyContent: "center" }}>
                    <Image src={ForgotPasswordDark1} />
                </div>
            </Col>
            <Col span={12} className="dark-mode">
                <div className="p-50-100">
                    <div className="flex-between mb-100">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr border-clr" style={{backgroundColor: 'transparent'}}>Log in</Button>
                    </div>
                    <h1 className="ta-left bold-clr mb-0 dark-mode-clr">Forgot Password?</h1>
                    <p className="ta-left mb-50" style={{ color: "#7D7D7D" }}>Enter your registered email address and we will send you instructions to reset your password.</p>
                    <Form layout="vertical">
                        <Form.Item label="Enter your registered email address" className="dark-mode-clr">
                            <Input placeholder="dummy@gmail.com" className="dark-mode second-dark-clr border-clr" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Send instructions</Button>
                        </Form.Item>
                    </Form>
                    <div className="mb-100">
                        <p className="ta-left bold-clr dark-mode-clr">Did not receive the email? <span className="main-clr">Try another email</span></p>
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

export default ForgotPasswordDark;