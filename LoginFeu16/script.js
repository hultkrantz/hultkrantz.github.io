////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
    , nameHolder = document.getElementById("nameHolder")
    , loginButton = document.getElementById("loginButton")
    , logoutButton = document.getElementById("logoutButton")
    , user;
//////Login
let loginFunction = function () {
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        alert("ab");
        user = result.user;
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
let displayProfileImage = function () {
    let profileImage = document.createElement("img");
    console.log("Profile image: "+profileImage);
    profileImage.src = localStorage.getItem(user.photoURL);
    imageHolder.appendChild(profileImage);
    console.log("Profile image: "+profileImage);
};
loginButton.addEventListener("click", function () {
    loginFunction();
    console.log("loginButton pressed");
    nameHolder.innerHTML = "Utloggad";
    loginButton.style.display = "none";
    logoutButton.style.display = "inline";
    console.log("localStorage: "+localStorage);
    displayProfileImage();
});
logoutButton.addEventListener("click", function () {
    logoutFuntion();
    console.log("logoutButton pressed");
    nameHolder.innerHTML = "Inloggad";
    loginButton.style.display = "inline";
    logoutButton.style.display = "none";
    console.log(localStorage);
});