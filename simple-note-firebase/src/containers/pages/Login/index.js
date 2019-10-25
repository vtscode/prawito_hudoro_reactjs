import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
// import { actionUserName } from '../../../config/redux/action/index';
import ButtonTekan from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component {

    // changeUser = () => {
    //     this.props.changeUserName()
    // }

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
    
    handleLoginSubmit = async () => {
        // console.log(this.state);
        const { email,password } = this.state;
        const { history } = this.props;
        const res = await this.props.loginAPI({email,password}).catch( err => err);
        if(res){
            console.log('login success');
            localStorage.setItem('userData',JSON.stringify(res))
            console.log(res);
            this.setState({
                email:'',
                password:''
            });
            history.push('/');
        }else{
            console.log('login failed!');
        }
    }
    
    render(){
        
        return (
        //return(
        // <Fragment>
        //     <p>Login Page {this.props.userName}</p>
        //     <button onClick={this.changeUser}>Change Username</button>
        // </Fragment>)
            <Fragment>
                <p>Login Page</p>
                <input placeholder="Email" id="email" type="email" onChange={this.handleChangeText}value={this.state.email} />
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                <ButtonTekan saatTekan={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
            </Fragment>
        )
    }
}

// const reduxState = (state) => ({
//     popUpProps: state.popUp,
//     userName: state.user
// })

// const reduxDispatch = (dispatch) =>({
//     changeUserName : () => dispatch(actionUserName())
// })


const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState,reduxDispatch)(Login);