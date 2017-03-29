////////Declaration////////
let imageHolder = document.getElementById("imageHolder")
    , nameHolder = document.getElementById("nameHolder")
    , loginButton = document.getElementById("loginButton")
    , logoutButton = document.getElementById("logoutButton")
    , pictureButton = document.getElementById("pictureButton")
    , imageMessage = document.getElementById("imageMessage")
    , user, userProfileUrl, profileImage;
//////Login
let loginFunction = function () {
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        user = result.user;
        console.log(result.user);
        console.log("user.photUrL :" + user.photoURL);
        userProfileUrl = user.photoURL;
        displayProfileImage();
        if (user.displayName === null) {
            nameHolder.innerHTML = "Welcome " + user.email+"!";
        }
        else {
            nameHolder.innerHTML = "Welcome " + user.displayName+"!";
        }
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
    imageMessage.innerHTML = "";
    profileImage = document.createElement("img");
    profileImage.src = userProfileUrl;
    profileImage.style.maxHeight ="100%";
    profileImage.style.maxWidth ="100%";
    imageHolder.appendChild(profileImage);
};
loginButton.addEventListener("click", function () {
    loginFunction();
    console.log("loginButton pressed");
    loginButton.style.display = "none";
    logoutButton.style.display = "inline";
    console.log("localStorage: " + localStorage);
});
logoutButton.addEventListener("click", function () {
    logoutFuntion();
    console.log("logoutButton pressed");
    nameHolder.innerHTML = "Another time then";
    loginButton.style.display = "inline";
    logoutButton.style.display = "none";
    console.log("Local storage: " + localStorage);
    profileImage.src ="";
    imageHolder.innerHTML ="Login for more fun!"
});
