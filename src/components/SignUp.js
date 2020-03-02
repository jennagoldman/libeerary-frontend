import React, { Component } from 'react';
import request from 'superagent';

	export default class App extends Component {
        state = {
            usernameSignUp: '',
            passwordSignUp: '',
            usernameSignIn: '',
            passwordSignIn: ''
        }

        handleSignUp = async (event) => {
            event.preventDefault();
            const user = await request.post(`https://damp-meadow-28672.herokuapp.com/api/auth/signup`, {
                email: this.state.usernameSignUp,
                password: this.state.passwordSignUp,
            })
    
            this.props.setUser(user);

            this.props.history.push('/');
        }

        handleSignIn = async (event) => {
            event.preventDefault();
            const user = await request.post(`https://damp-meadow-28672.herokuapp.com/api/auth/signin`, {
                email: this.state.usernameSignIn,
                password: this.state.passwordSignIn,
            })

            this.props.setUser(user);
        
            this.props.history.push('/');
        }

		render() {
			return (
                <div className="signup-and-signin">
                    <div className="signup-container">
                        <form onSubmit={ this.handleSignUp }>
                            <input 
                                placeholder="Email address" 
                                value={this.state.usernameSignUp} 
                                onChange={(e) => this.setState({ usernameSignUp: e.target.value})} 
                            />
                            <input 
                                placeholder="Password" 
                                value={this.state.passwordSignUp} 
                                onChange={(e) => this.setState({ passwordSignUp: e.target.value})} 
                            />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="signin-container">
                        <form onSubmit={ this.handleSignIn }>
                            <input 
                                placeholder="Email address" 
                                value={this.state.usernameSignIn} 
                                onChange={(e) => this.setState({ usernameSignIn: e.target.value})} 
                            />
                            <input 
                                placeholder="Password" 
                                value={this.state.passwordSignIn} 
                                onChange={(e) => this.setState({ passwordSignIn: e.target.value})} 
                            />
                            <button>Sign In</button>
                        </form>
                    </div>
                </div>
			)
		}
	}