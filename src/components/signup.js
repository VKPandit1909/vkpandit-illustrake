import React from 'react';

import { Form, Input, Button, Row, Col, Image } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import SignUp1 from '../images/SignUp1.svg';

function SignUp() {

    return (
        <Row>
            <Col span={12} className="bg-clr">
                <div className="imgdiv flex-between" style={{ justifyContent: "center" }}>
                    <Image src={SignUp1} />
                </div>
            </Col>
            <Col span={12}>
                <div className="p-50-100">
                    <div className="flex-between mb-50">
                        <h1 className="main-clr bold-clr mb-0">Lookfinity</h1>
                        <Button type="default" className="main-clr bold-clr">Log in</Button>
                    </div>
                    <h1 className="ta-left bold-clr">Sign up</h1>
                    <Form layout="vertical" className="ta-left">
                        <div className="flex-between">
                            <Form.Item label="First name" className="w-48">
                                <Input placeholder="Enter your first name" />
                            </Form.Item>
                            <Form.Item label="Last name" className="w-48">
                                <Input placeholder="Enter your last name" />
                            </Form.Item>
                        </div>
                        <Form.Item label="Email address">
                            <Input placeholder="you@example.com" />
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input placeholder="Enter your password" />
                        </Form.Item>
                        <Checkbox className="mb-30">I agree to the <span className="main-clr">Terms and conditions</span></Checkbox>
                        <Form.Item>
                            <Button type="link" block style={{ backgroundColor: "#73D13D", color: "#ffffff" }} className="light-bold-clr">Sign up</Button>
                        </Form.Item>
                    </Form>
                    <div className="mb-50">
                        <p className="ta-left bold-clr">Already have an account? <span className="main-clr">Log in</span></p>
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

export default SignUp;