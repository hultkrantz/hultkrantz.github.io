class Copycat extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			text : ""
		};
		this.copyText = this.copyText.bind(this)
	}
	copyText(event){
		this.setState({
			text: event.target.value
		})
	}
	render(){
		return(
		<section>
			<h2> Uppgift 1 </h2>
			<input type = "text" onChange = {this.copyText}/>
			<p id = "outputOne"> {this.state.text}</p>
		</section>
			)
	}
}
///////////////////
class Addition extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputOne : 0,
			inputTwo: 0
		}
		this.AddA = this.AddA.bind(this);
		this.AddB = this.AddB.bind(this);
	}
	AddA(event){
		this.setState ({
			inputOne : Number(event.target.value)
		})
	}
		
	AddB(event){
		this.setState ({
			inputTwo : Number(event.target.value)
				  })
	}
	render() { 
		return (
		<section>
			<h2> Uppgift 2 </h2>
			<input type="number" onChange = {this.AddA}/>+
			<input type="number" onChange = {this.AddB}/>	
			<p>={this.state.inputOne+this.state.inputTwo}</p>
		</section>	
		)
	}
}
///////////////////
class TwoButtons extends React.Component {
	constructor (props){
		super(props)
			this.state = {
				text : "",
				styleBtnOne : "",
				styleBtnTwo : "",
				styleBtnThree : "",
				valueOf : 0
		}
		this.clickCounter = this.clickCounter.bind(this);
        this.FirstButton = this.FirstButton.bind(this);
        this.SecondButton = this.SecondButton.bind(this);	
        this.ThirdButton = this.ThirdButton.bind(this);	
	}
FirstButton(){
	this.setState ({
		text :  "First Button",
        styleBtnOne : "blue",
		styleBtnTwo : "",
		styleBtnThree : "",
	})
}
SecondButton(){
	this.setState ({
		text : "Second Button",
		styleBtnOne : "",
		styleBtnTwo : "blue",
		styleBtnThree : "",
	})
}
ThirdButton(){
	this.setState ({
		text : "Third Button",
		styleBtnOne : "",
		styleBtnTwo : "",
		styleBtnThree : "blue",
	})
}
clickCounter(){
	this.setState({
		valueOf: this.state.valueOf +1
	});
}

render() {
	return (
		<section>
			<h2> Uppgift 3 </h2>
			<button className={this.state.styleBtnOne} onClick={this.clickCounter, this.FirstButton}>First </button>
			<button className={this.state.styleBtnTwo} onClick={this.clickCounter, this.SecondButton}>Second </button>	
			<button className={this.state.styleBtnThree}onClick={this.clickCounter, this.ThirdButton}>Third </button>
			<p>Pressed  : {this.state.text}</p>
            {console.log(this.state.text+"!")}
		</section>
			)
		}
	}
/*///////////////////
ReactDOM.render(){
    <h2>Uppgift 4</h2>
    
};
///////////////////*/
function Page(){
	return(
	<div>
		<Copycat/>
		<Addition/>
		<TwoButtons/>
	</div>
		)
}
ReactDOM.render(<Page/>, document.getElementById('root'));
	
