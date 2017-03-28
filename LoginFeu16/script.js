////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
	, nameHolder = document.getElementById("nameHolder")
	, loginButton = document.getElementById("loginButton");

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
		firebase.auth().signOut().then(function (result) {
			console.log("Du är nu utloggad");
		}).catch(function (error) {
			// Utloggning misslyckades
			console.log("Det gick inte som vi ville" + error)
		});
	}
	
///////Functions//////

if (loginButton.innerHTML == "Sign out") {
	loginButton.addEventListener("click", function () {
		logoutFuntion();
		loginButton.innerHTML = "Sign in";
	})
}else{
	loginButton.addEventListener("click", function () {
	loginFunction();
	loginButton.innerHTML = "Sign out";
});
}