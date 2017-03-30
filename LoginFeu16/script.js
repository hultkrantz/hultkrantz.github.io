////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
	, nameHolder = document.getElementById("nameHolder")
	, loginButton = document.getElementById("loginButton")
	, logoutButton = document.getElementById("logoutButton")
	, secretButton = document.getElementById("secretButton")
	, imageMessage = document.getElementById("imageMessage")
	, user, userProfileUrl, profileImage;
/////////Secret User
let secretFunction = function(){
	if(user.email === carl.hultkrantz@gmail.com){
		secretButton.style.visibility ="visible";
	}
};
//////Login
let loginFunction = function () {
	let provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		user = result.user;
		userProfileUrl = user.photoURL;
		displayProfileImage();
		if (user.displayName !== null) {
			nameHolder.innerHTML = "Welcome " + user.displayName + "!";
		}
		else if (firebase.auth().currentUser.providerData[0].displayName) {
			nameHolder.innerHTML = "Welcome " + firebase.auth().currentUser.providerData[0].displayName+"!";
		}
		else {
			nameHolder.innerHTML = "Welcome " + user.email + "!";
		}
	});
		secretFunction();
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
	logoutButton.style.display = "inline";
});
logoutButton.addEventListener("click", function () {
	logoutFuntion();
	console.log("logoutButton pressed");
	nameHolder.innerHTML = "Another time then";
	loginButton.style.display = "inline";
	logoutButton.style.display = "none";
	profileImage.src = "";
});
secretButton.addEventListener("click", function () {
	alert("The cake is a lie");
});