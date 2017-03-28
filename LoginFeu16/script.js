let provider = new firebase.auth.GithubAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(function(result) {
    alert("a")
    let user = result.user;
	console.log(result.user)
});

let imageHolder = document.getElementById("imageHolder"),
	nameHolder = document.getElementById("nameHolder");

