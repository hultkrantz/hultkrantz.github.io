class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oldList : [
				{x: "one", y: 1},
				{x : "two", y : 2},
				{x:"three", y :3},
				{x : "four", y :4}],
			author: "",
			title: "" 
		}
	}
	render() {
		let newList = this.state.oldList.map(
		x => <li id="newList"> {x.y} and {x.x}</li>
		);
	return (
		<div>
		<MyList/>
		<AddForm/>
			<ul>
				{newList}
			</ul>
		</div>
		)
	}
}
class AddForm extends React.Component {
}
changeAuthor(){
	
}
render(){
		return(
			<div>
			<input type="text" placeholder="First" id="inputOne"/>
			<input type="text" placeholder="Second" id="inputTwo"/> 
			<button onClick ={this.changeAuthor}>Add</button>
			</div>
		)
	}
}
////////////////
////////// Functions


ReactDOM.render( <App/>, document.getElementById("root"));