import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TheForm from './form.js';
import TheButton from './button.js';

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				inputName : '',
				inputEmail : ''
		}
		this.textChange = this.textChange.bind(this);
		this.clearInputs = this.clearInputs.bind(this);
	}
	
	textChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});
	}
	
	clearInputs() {
		this.setState({
			inputName: '',
			inputEmail: ''
		})
	}
	
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a happy place</h2>
        </div>
		<h3>Please sign in</h3>
		<br/>
		<TheForm textChange={this.textChange} inputName={this.state.inputName} inputEmail={this.state.inputEmail}/>
		<br/> 
		<TheButton clearInputs={this.state.clearInputs} inputName={this.state.inputName} inputEmail={this.state.inputEmail}/>
      </div>
    );
  }
}

export default App;
