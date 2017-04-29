class App extends React.Component {
	
	constructor (props) {
		super(props)
		this.state = {
			name : ["Lenovo", "Asus", "MSI", "Nintendo"],
			oldList : [
				{x: "ett", y: 10},
				{x : "två", y : 3},
				{x:"tre", y :7},
				{x : "fyra", y :55}]
		}
	}
	render(){
		console.log(this.state.name);
		let namesArr = this.state.name.map((username, i)=> <Greeting key={"greetingKey" + i}name = {username}/>);
		return (
			<section>
			
				 {namesArr}
			</section>
		)
	}
}
class MyList extends React.Component {
	render() {
		console.log(this.state.oldList.x)
		let newList = this.state.oldList.map(
		x => <li>{x.y}</li>
		);
	return (
		<section>
			<ul>
				{newList}
			</ul>
		</section>
		)
	}
}
function Greeting(props) {
	 return <h1>Hello {props.name}</h1>
}

function Page(){
	return(
		<section>
	<App/>
	<MyList/>
	</section>
	)
}


ReactDOM.render( <Page/>, document.getElementById("root"));