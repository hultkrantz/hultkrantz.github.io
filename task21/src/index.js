import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/*Utgå från bankAccount.js från uppgift 17. Föreställ dig hur en applikation som hanterar ett bankkonto skulle kunna se ut. Skriv ner vad applikationen kan ha för state. Skriv också ner Actions som man skulle kunna använda i en sådan applikation, minst tre stycken. Skriv dessutom en Reducer-funktion som skapar nya state baserat på dina Actions.
Lämna in uppgiften på samma sätt som tidigare uppgifter, genom att länka till ett repo på GitHub som innehåller en fil.
*/

import {createStore} from 'redux';


const initalState = {
	accounts : {
		accountOne : {
			accountNumber : 5547899,
			key: 456789,
			accountOwner : 'Hugo Boss',
			accountType: 'Checking Account',
			balance : 5000
		},
		accountTwo : {
			accountNumber : 2547199,
			key: 789456,
			accountOwner : 'Hugo Boss',
			accountType: 'Savings Account', 
			balance : 12
		}
	}	
}

const reducer = (state = initalState, action ) => {
		switch (action.type) {
			
		case 'WITHDRAW':
			state = {
				...state,
				balance: state.balance - action.value
			}
			break;
		case 'DEPOSIT':  {
			state = {
				...state,
				balance: state.balance + action.value 
			}
		} 
			break;
			case 'CHANGE_ACCOUNT_TYPE':
				state = {
					...state,
					accountType: action.newType
				}
	}
	return state;
};
const store = createStore(reducer);

store.dispatch({
  type: 'WITHDRAW',
  value: 16
});



store.dispatch({
  type: 'DEPOSIT',
  value: 256
});

store.dispatch({
  type: 'CHANGE_ACCOUNT_TYPE',
  newType: 'Savings Account'
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
