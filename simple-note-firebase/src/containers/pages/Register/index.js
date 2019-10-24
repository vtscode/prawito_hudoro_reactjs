import React, {Component,Fragment} from 'react';
import firebase from '../../../config/firebase';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }

    handleChangeText = (e) => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    handleRegisterSubmit = () => {
        // console.log(this.state);

        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            console.log('success',result);
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }

    render(){
        return (
            <Fragment>
                <p>Register Page</p>
                <input placeholder="Email" id="email" type="email" onChange={this.handleChangeText} />
                <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                <button onClick={this.handleRegisterSubmit}>Register</button>
                {/*<button>Go to Dashboard</button>*/}
            </Fragment>
        )
    }
}

export default Register;