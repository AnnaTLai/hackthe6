import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password:"",
            usernameError: "",
            emailError: "",
            passwordError:"",
            success: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(e) {
        this.setState({usernameError: "", emailError:"", passwordError:"", success: ""});
        this.setState({ [e.target.name]: e.target.value });
    }

    validate(username, email, password) {

        let emailRegEx = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if( this.state.username === "") {
            this.setState({ usernameError : "Your username is empty"})
        } else if( this.state.username.length < 6) {
            this.setState({ usernameError : "Your username is not valid"})
        return false;
    }

        if( this.state.email === "") {
            this.setState({ emailError : "Your email is empty"})
        } else if (!this.state.email.match(emailRegEx)) {
            this.setState({ emailError : "Your email is not valid"})
        return false;
    }

        if( this.state.password === "" || this.state.password.length < 8) {
            this.setState({ passwordError : "Your password is not valid"})
        return false;
        }
        this.setState({ success: 'Signup successful' })

    return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validate() === true) {
        this.setState({ username: "", email: "", password:"", usernameError: "", emailError: "", passwordError:"" });
        }
    }

    render() {
        return(
            <div className="Form">
                <h2>Create your free account</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Your Username"
                    />
                    {this.state.username.length > 1 && this.state.username.length < 6 ? <p className="input-alert">Your username must be at least 6 characters</p> : null}
                    <p className="error-msg">{this.state.usernameError}</p>
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Your Email"
                    />
                    <p className="error-msg">{this.state.emailError}</p>
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Your Password"
                    />
                    {this.state.password.length >= 1 && this.state.password.length < 8 ? <p className="input-alert">Your password must be at least 8 characters</p> : null }
                    <p className="error-msg">{this.state.passwordError}</p>
                    <button>Submit</button>
                    {this.state.success ? <p className="submit-success">Signup Successful</p>: null}
                </form>
            </div>
        );
    }
}


export default Form;
