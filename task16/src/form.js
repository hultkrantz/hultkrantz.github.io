import React, {Component} from 'react';

class TheForm extends Component{
	
	
	render() {
		return (
			<div>
				<form>
					Add your name:<br/>
					<input type="text" id="formName" name="inputName" onChange={this.props.textChange} value={this.props.inputName}/><br/>
					Enter your email:<br/>
					<input type="text" id="formEmail" name="inputEmail" onChange={this.props.textChange} value={this.props.inputEmail}/>
				</form>
			</div> 
			); 
	}
}

export default TheForm;