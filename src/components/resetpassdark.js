import React from 'react';

import { Form, Input, Button, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import ResetPasswordDark1 from '../images/ResetPasswordDark1.svg';

function ResetPasswordDark() {

    return (
        <Row>
            <Col span={12} className="bg-dark-clr">
                <div className="imgDarkdiv flex-between" style={{ justifyContent: "center" }}>
                    <Image src={ResetPasswordDark1} />
                </div>
            </Col>
            <Col span={12} className="dark-mode">
                <div className="p-50-100">
                    <div className="flex-between mb-100">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr border-clr" style={{backgroundColor: 'transparent'}}>Log in</Button>
                    </div>
                    <h1 className="ta-left dark-mode-clr">Reset Password?</h1>
                    <Form layout="vertical" className="mb-100">
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr dark-mode-color">New Password</p>
                            <Input.Password placeholder="Enter your new password" className="dark-mode second-dark-clr border-clr" />
                            <p className="light-bold-clr dark-mode-color" style={{marginTop: "10px", fontSize: "12px"}}>Must be atleast 8 characters.</p>
                        </div>
                        <div className="mb-30 ta-left">
                            <p className="light-bold-clr dark-mode-color">Confirm Password</p>
                            <Input.Password placeholder="Confirm your new password" className="dark-mode second-dark-clr border-clr" />
                            <p className="light-bold-clr dark-mode-color" style={{marginTop: "10px", fontSize: "12px"}}>Both passwords must match.</p>
                        </div>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Reset Password</Button>
                        </Form.Item>
                    </Form>
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

export default ResetPasswordDark;