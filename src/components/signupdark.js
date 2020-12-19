import React from 'react';

import { Form, Input, Button, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import SignUpDark1 from '../images/SignUpDark1.svg';

function SignUpDark() {

    return (
        <Row>
            <Col span={12} className="bg-dark-clr">
                <div className="imgDarkdiv flex-between" style={{ justifyContent: "center" }}>
                    <Image src={SignUpDark1} />
                </div>
            </Col>
            <Col span={12} className="dark-mode">
                <div className="p-50-100">
                    <div className="flex-between mb-50">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr border-clr" style={{backgroundColor: 'transparent'}}>Log in</Button>
                    </div>
                    <h1 className="ta-left bold-clr dark-mode-clr">Sign up</h1>
                    <Form layout="vertical" className="ta-left">
                        <div className="flex-between">
                            <Form.Item label="First name" className="w-48 dark-mode-clr">
                                <Input placeholder="Enter your first name" className="dark-mode second-dark-clr border-clr" />
                            </Form.Item>
                            <Form.Item label="Last name" className="w-48 dark-mode-clr">
                                <Input placeholder="Enter your last name" className="dark-mode second-dark-clr border-clr" />
                            </Form.Item>
                        </div>
                        <Form.Item label="Email address" className="dark-mode-clr">
                            <Input placeholder="you@example.com" className="dark-mode second-dark-clr border-clr" />
                        </Form.Item>
                        <Form.Item label="Password" className="dark-mode-clr">
                            <Input placeholder="Enter your password" className="dark-mode second-dark-clr border-clr" />
                        </Form.Item>
                        <Checkbox className="mb-30" style={{color: "#DBDBDB"}}>I agree to the <span style={{color: "#73D13D"}}>Terms and conditions</span></Checkbox>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Sign up</Button>
                        </Form.Item>
                    </Form>
                    <div className="mb-50">
                        <p className="ta-left bold-clr dark-mode-clr">Already have an account? <span className="main-clr">Log in</span></p>
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

export default SignUpDark;