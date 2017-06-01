import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TheForm from '../form.js';
import { shallow, mount } from 'enzyme';


// Check for render
it('Does it render?', () => {
	const div = document.createElement('div');
	ReactDOM.render(<TheForm />, div);
});
// Check for shallow render
test('The shallow render', () => {
	shallow(<TheForm/>);
});

// Check state name change
test('user change Name in state.', () => {
	const newStateName = 'Carl',
	event = {target: {
			value: newStateName,
			name : "inputName"},
			type: 'change'
		};
	let wrapper = mount(<App/>),
	input = wrapper.find('input#formName');
	
	input.simulate('change', event)
	
	let actual = wrapper.state('inputName');
	expect(actual).toBe(newStateName);
	})

// Check state email change
test('user change email in state.', () => {
	const newStateEmail = 'newEmail@gmail.com',
		event = {target :{
				value:newStateEmail,
				name:'inputEmail'},
				 type:'change'
	};
	let wrapper = mount(<App/>),
	input = wrapper.find('input#formEmail');
	
	input.simulate('change', event	);
	
	let actual = wrapper.state('inputEmail');
	expect(actual).toBe(newStateEmail); 
})