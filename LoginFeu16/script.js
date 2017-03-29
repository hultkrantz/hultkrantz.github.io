////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
    , nameHolder = document.getElementById("nameHolder")
    , loginButton = document.getElementById("loginButton")
    , logoutButton = document.getElementById("logoutButton");
//////Login
let loginFunction = function () {
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        alert("ab");
        let user = result.user;
        console.log(result.user);
    });
};
/////////Logout
let logoutFuntion = function () {
    firebase.auth().signOut().then(function (result) {
        console.log("Du är nu utloggad");
    }).catch(function (error) {
        // Utloggning misslyckades
        console.log("Det gick inte som vi ville" + error);
    });
};
///////Functions//////
loginButton.addEventListener("click", function () {
    loginFunction();
    nameHolder.innerHTML = "Utloggad";
});
logoutButton.addEventListener("click", function () {
            logoutFuntion();
            nameHolder.innerHTML = "Inloggad";
        });