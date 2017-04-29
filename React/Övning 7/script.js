class Login extends React.Component{
	
	handleClick(event){
        if(monster.innerHTML === "Login")
		monster.innerHTML="Logout"
	 else 
        monster.innerHTML ="Login"
    }
		
	render() {
		return 	<button id="monster" onClick={this.handleClick}>Login</button>;
	}
}



ReactDOM.render(
    <div>
	<Login/>
    </div>,
	document.getElementById("app"))