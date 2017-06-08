import React, {Component} from 'react';


class TheButton extends Component{
	
	render() {
		return (
			<button type="button" id="deleteButton" className="buttonClass" onClick={this.props.clearInputs}>Remove from state</button>
		);
	}
}


export default TheButton;