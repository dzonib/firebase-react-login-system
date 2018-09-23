import React, { Component } from 'react';
import fire from '../config/fire';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

    this.onChangeHandler = this.onChangeHandler.bind(this);
		this.login = this.login.bind(this)
		this.signup = this.signup.bind(this)
    
  }
  
  login(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((dosomethingifyouwant) => {})
			.catch(e => console.log(e))
  }
  
  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u)
      }).catch(e => console.log(e));
  }


	onChangeHandler(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div>
				<form>
					<input 
            type="text" 
            value={this.state.email} 
            name="email" 
            onChange={this.onChangeHandler} />
					<input 
            type="text" 
            name="password" 
            value={this.state.password} 
            onChange={this.onChangeHandler} />

            <button type="submit" onClick={this.login}>Login</button>
            <button onClick={this.signup}>Signup</button>
				</form>
			</div>
		);
	}
}

export default Login;