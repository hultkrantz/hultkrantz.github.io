var userName = document.getElementById("userName")
    , loginButton = document.getElementById("loginButton")
    , chatWindow = document.getElementById("chatWindow")
    , sendChatInput = document.getElementById("sendChatInput")
    , chatInput = document.getElementById("chatInput")
    , messageToUser = document.getElementById("messageToUser");
/////////////////////
//////functions//////
/////////////////////
let userLogin = function () {
        console.log("inside userLogin")
        if (userName.value === "") {
            console.log(userName.innerHTML)
            messageToUser.innerHTML = "Not a valid username";
            messageToUser.style.color = "red";
        }
        else {
            localStorage.setItem('loggedinUser', userName.value);
            messageToUser.innerHTML = "Loged in";
            messageToUser.style.color = "green";
            loginButton.innerHTML = "Logout"
			
            
            console.log("Item set to localstorage: " + userName.value)
        }
    }
let pushMessage = function () {
    let message = chatInput.value;
    let loggedinUser = localStorage.getItem("loggedinUser");
    console.log(loggedinUser);
    firebase.database().ref("messages").push({
        message: message
        , user: loggedinUser
    })
}
let displayMessage = function (messages) {
        let messageArray = [];
        for (let key in messages) {
            console.log(`${messages[key].user}: ${messages[key].message}`);
            messageArray.push(`${messages[key].user}: ${messages[key].message}`);
        }
        for (let i = messageArray.length - 1; i >= 0; i--) {
            let textContainer = document.createElement("li");
            textContainer.innerHTML = messageArray[i];
            chatWindow.appendChild(textContainer);
        }
    }
    /////////////////////
    /////////event///////
    /////////////////////
loginButton.addEventListener("click", function (event) {
	if(loginButton.innerHTML == "Logout"){
		localStorage.clear();
		loginButton.innerHTML = "Login";
		messageToUser.innerHTML =  "Logedout";
		messageToUser.style.color = "red";
			} else
    userLogin();
});
sendChatInput.addEventListener("click", function (vent) {
    
    if (chatInput.value != "") {
        chatWindow.innerHTML = "";
        pushMessage();
        displayMessage();
    } else messageToUser.innerHTML = "No message";
    chatInput.value = "";
})
firebase.database().ref('messages/').on('value', function (snapshot) {
    let data = snapshot.val();
    let key = snapshot.key;
    console.log(data);
    displayMessage(data);
});