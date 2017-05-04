class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            userProfileUrl:'', 
            profileImage:''
        };
        //bind us together forever and ever
        this.loginFunction = this.loginFunction.bind(this);
        /*this.googleFunction = this.googleFunction.bind(this);
        this.logoutFunction = this.logoutFunction.bind(this);
        this.displayProfileImage = this.displayProfileImage.bind(this);*/
    }
loginFunction() {
	let provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		this.setState({
            user:result.user
        }); //info
		console.log(this.user)
		if (user.displayName !== null) {
			nameHolder.innerHTML = "Loggedin with Facebook. " + this.user.displayName + "!";
		}
		else if (firebase.auth().currentUser.providerData[0].displayName) {
			nameHolder.innerHTML = "Loggedin with Facebook. " + firebase.auth().currentUser.providerData[0].displayName + "!";
		}
		else {
			nameHolder.innerHTML = "Loggedin with Facebook. " + user.email + "!";
		}
		userProfileUrl = firebase.auth().currentUser.providerData[0].photoURL;
		displayProfileImage();
        console.log(user.photoURL)
	}).bind(this);
};
/*
.catch()
googleFunction() {
	let googleProvider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(googleProvider).then(function (result) {
		user = result.user;
		if (user.displayName !== null) {
			nameHolder.innerHTML = "Loggedin with Google. " + user.displayName + "!";
		}
		else if (firebase.auth().currentUser.providerData[0].displayName) {
			nameHolder.innerHTML = "Loggedin with Google. " + firebase.auth().currentUser.providerData[0].displayName + "!";
		}
		else {
			nameHolder.innerHTML = "Loggedin with Google. " + user.email + "!";
		}
		userProfileUrl = firebase.auth().currentUser.providerData[0].photoURL;
		displayProfileImage();
		console.log(user.photoURL)
	});
};

logoutFunction() {
	firebase.auth().signOut().then(function (result) {
		console.log("You are no more my friend");
	}).catch(function (error) {
		// Utloggning misslyckades
		console.log("Det gick inte som vi ville" + error);
		nameHolder.innerHTML = "Somting went wrong";
	});
};

displayProfileImage() {
	imageHolder.innerHTML = "";
	profileImage = document.createElement("img");
	profileImage.src = userProfileUrl;
	profileImage.style.maxHeight = "100%";
	profileImage.style.maxWidth = "100%";
	imageHolder.appendChild(profileImage);
};
*/
render() {
    return (
    <div id="divContaienr">
		<div id="imageHolder">
		<p id="imageMessage">No picture</p>
		</div>
		<p id="nameHolder">Please login with Facsebook or Google</p>
		<button className="loginBtn loginBtn--facebook" id="loginButton" onClick={this.loginFunction} > Login with Facebook </button>
		<button className="loginBtn loginBtn--google" id="googleLogin" onClick={this.googleFunction}> Login with Google </button>
		<button id="logoutButton" onClick={this.logoutFunction}>Logout</button>
    </div>
        )
    }
}


ReactDOM.render(
        <App/>,
        document.getElementById('loginRoot')
      );