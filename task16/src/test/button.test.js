import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TheButton from '../button.js';
import { shallow, mount } from 'enzyme';


// Check button render
it('Does it Render?', () => {
	const div = document.createElement('div');
	ReactDOM.render(<TheButton />, div);
});
// Check button shallow render
test('The shallow render', () => {
	shallow(<TheButton/>);
			});
//Button has className
test ('Button has class buttonClass', () => {
	const wrapper = mount(<App/>)
	expect(wrapper.find('button').hasClass('buttonClass')).toBe(true);
})
// Check if state clears
test('Clear state from contamination', () => {
		const wrapper = mount(<App/>);
		console.log(wrapper.state("inputEmail"))
		wrapper.find('button#deleteButton').simulate('click', {
			target: {
				type: 'button',
				className: 'buttonClass'
			},
			type: 'click'
		});
		let actual = wrapper.state('inputEmail');
		expect(actual).toBe('');
	})

	