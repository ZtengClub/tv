import React from 'react';
import fetch from 'isomorphic-fetch';
import styles from './Login.css';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import config from '../../../config';
const API_HOST = `${config.HOST}:3000`

const convertFormdataToJson = (formData) => {
    let objData = {};
    formData.forEach((value, key) => objData[key] = value);
    
    return JSON.stringify(objData);
}

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }


    submit(e) {
        var form = document.querySelector('#formLogin');
        form.submit()
    }

    render() {
        const open = this.props.open;
        
        return (
            <Dialog
                modal={false}
                open={open}
                bodyClassName={styles.outerClass}
                contentClassName={styles.contentClass}
                onRequestClose={this.props.handleClose}
                >
                <div className={styles.registerSec}>
                    <div className={styles.imageSec}></div>
                    <div className={styles.inputSec}>
                        <div>
                        <h4>欢迎来到<span>RUARUA.live</span></h4>
                            <form id="formLogin" action={`${API_HOST}/login`} method="get" ref="registerForm">

                            <TextField
                                hintText=""
                                floatingLabelText="邮箱"
                                type="email"
                                name="email"
                            /><br />
                            <TextField
                                hintText=""
                                floatingLabelText="密码"
                                type="password"
                                name="password"
                            />
                            </form>
                        </div>
                        <div className={styles.btnGroup}>
                            <FlatButton
                                label="登录"
                                backgroundColor="#5d7ce6"
                                hoverColor="#4e6dd7"
                                style={{
                                    color: '#fff',
                                }}
                                onClick={this.submit}
                            />

                            <FlatButton
                                label="取消"
                                style={{
                                    color: '#999',
                                    marginLeft: '10px',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default Register;