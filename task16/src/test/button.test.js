import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TheButton from '../button.js';
import { shallow } from 'enzyme';


// Check button render
it('Does it render?', () => {
	const div = document.createElement('div');
	ReactDOM.render(<TheButton />, div);
});
// Check button shallow render
test('The shallow render', () => {
	shallow(<TheButton/>);
//Button has className
test ('button has class buttonClass', () => {
	const wrapper = shallow(<TheButton/>)
	expect(wrapper.find('button').hasClass('buttonClass')).toBe(true);
})
// Check if state clears
test('clear state from contamination', () => {
		const wrapper = shallow(<App/>);
		console.log(wrapper.state)
		wrapper.find('button').simulate('click', {
			target: {
				className: 'buttonClass'
			},
			type: 'click'
		});
		let actual = wrapper.state('inputEmail');
		expect(actual).toBe('');
	})
});	
	