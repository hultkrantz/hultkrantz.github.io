let provider = new firebase.auth.GithubAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(function(result) {
    alert("a")
    let user = result.user;
});
