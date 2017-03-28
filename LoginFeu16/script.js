//////Login
let loginFunction = function () {
	let provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		alert("a")
		let user = result.user;
		console.log(result.user)
	});
};
/////////Logout
let logoutFuntion = function () {
		firebase.auth().signOut().then(function (result) {}).catch(function (error) {
			// Utloggning misslyckades
		});
	}
	////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
	, nameHolder = document.getElementById("nameHolder")
	, logginButton = document.getElementById("logginButton");
///////Functions//////
logginButton.addEventListener("click", function () {
	loginFunction();
});