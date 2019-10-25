import React, {Component,Fragment} from 'react';
import ButtonTekan from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';
import {connect} from 'react-redux';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
        }
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    handleRegisterSubmit = async () => {
        // console.log(this.state);
        const { email,password } = this.state;
        const res = await this.props.registerAPI({email,password}).catch(err => err);
        if(res){
            this.setState({
                email:'',
                password:''
            })
        }
        
    }

    render(){
        return (
            <Fragment>
                <p>Register Page</p>
                <input placeholder="Email" id="email" type="email" onChange={this.handleChangeText}value={this.state.email} />
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                {/*<button onClick={this.handleRegisterSubmit}>Register</button>*/}
                {/*<button>Go to Dashboard</button>*/}
                <ButtonTekan saatTekan={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState,reduxDispatch)(Register);