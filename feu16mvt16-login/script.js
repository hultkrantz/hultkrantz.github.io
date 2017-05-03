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
	/*
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
*/
	let provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		user = result.user;

		if (user.displayName !== null) {
			nameHolder.innerHTML = "Loggedin with Github. " + user.displayName + "!";
		}
		else if (firebase.auth().currentUser.providerData[0].displayName) {
			nameHolder.innerHTML = "Loggedin with Github. " + firebase.auth().currentUser.providerData[0].displayName + "!";
		}
		else {
			nameHolder.innerHTML = "Loggedin with Github. " + user.email + "!";
		}

				userProfileUrl = firebase.auth().currentUser.providerData[0].photoURL;
		displayProfileImage();
	});

};
////////Google
let googleFunction = function() {
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
//facebookStatus
