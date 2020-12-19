import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/login.css';

function CreateAgency() {

    return (
        <div className="main">
            <div className="imgdiv w-50 p-50-100">
                <h1 className="main-clr bold-clr ta-left">Lookfinity</h1>
                <div className="vertical-center">
                    <div style={{display: "flex"}}>
                        <div className="circle-div">1</div>
                        <div className="ta-left">
                            <p className="mb-0">Create Agency</p>
                            <p className="mb-0">Enter agency details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50 p-50-100 vertical-bottom">
                {/* <div className="vertical-bottom"> */}
                    <div className="flex-between">
                        <p className="second-clr"><a className="second-clr text-line">Privacy Policy</a> and <a className="second-clr text-line">Terms of Service</a></p>
                        <p className="main-clr"><QuestionCircleFilled />  Help</p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default CreateAgency;