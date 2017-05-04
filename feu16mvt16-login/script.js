////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
	, nameHolder = document.getElementById("nameHolder")
	, loginButton = document.getElementById("loginButton")
	, googleLogin = document.getElementById("googleLogin")
	, logoutButton = document.getElementById("logoutButton")
	, imageMessage = document.getElementById("imageMessage")
	, user, userProfileUrl, profileImage;





//////Login
let loginFunction = function () {
	let provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		user = result.user; //info
		console.log(user)
		if (user.displayName !== null) {
			nameHolder.innerHTML = "Loggedin with Facebook. " + user.displayName + "!";
		}
		else if (firebase.auth().currentUser.providerData[0].displayName) {
			nameHolder.innerHTML = "Loggedin with Facebook. " + firebase.auth().currentUser.providerData[0].displayName + "!";
		}
		else {
			nameHolder.innerHTML = "Loggedin with Facebook. " + user.email + "!";
		}
		userProfileUrl = firebase.auth().currentUser.providerData[0].photoURL;
		displayProfileImage();
	}).catch();
};
////////Google
let googleFunction = function () {
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
	});
};
/////////Logout
let logoutFuntion = function () {
	firebase.auth().signOut().then(function (result) {
		console.log("You are no more my friend");
	}).catch(function (error) {
		// Utloggning misslyckades
		console.log("Det gick inte som vi ville" + error);
		nameHolder.innerHTML = "Somting went wrong";
	});
};
///////Functions//////
let displayProfileImage = function () {
	imageHolder.innerHTML = "";
	profileImage = document.createElement("img");
	profileImage.src = userProfileUrl;
	profileImage.style.maxHeight = "100%";
	profileImage.style.maxWidth = "100%";
	imageHolder.appendChild(profileImage);
};
loginButton.addEventListener("click", function () {
	loginFunction();
	console.log("loginButton pressed");
	loginButton.style.display = "none";
	googleLogin.style.display = "none";
	logoutButton.style.display = "inline";
});
logoutButton.addEventListener("click", function () {
	logoutFuntion();
	console.log("logoutButton pressed");
	nameHolder.innerHTML = "Another time then";
	loginButton.style.display = "inline";
	googleLogin.style.display = "inline";
	logoutButton.style.display = "none";
	profileImage.src = "";
});
googleLogin.addEventListener("click", function () {
	googleFunction();
	console.log("googleLogin pressed");
	googleLogin.style.display = "none";
	loginButton.style.display = "none";
	logoutButton.style.display = "inline";
});


ReactDOM.render(
	<p>React fungerar<p/>,
	document.getElementById('divContainer')
);