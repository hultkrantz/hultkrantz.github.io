var userName = document.getElementById("userName")
    , chatWindow = document.getElementById("chatWindow")
    , sendChatInput = document.getElementById("sendChatInput")
    , chatInput = document.getElementById("chatInput")
    , messageToUser = document.getElementById("messageToUser");
/////////////////////
//////functions//////
/////////////////////
let pushMessage = function () {
    let message = chatInput.value;
    firebase.database().ref("messages").push({
        message: message
    })
}
let displayMessage = function (messages) {
        let messageArray = [];
        for (let key in messages) {
            //console.log(`${messages[key].user}: ${messages[key].message}`);
            messageArray.push(`${messages[key].message}`);
        }
        for (let i = 5; i >= 0; i--) {
		
            let textContainer = document.createElement("li");
            textContainer.innerHTML = messageArray[i];
            chatWindow.appendChild(textContainer);
        
			}
    }
    /////////////////////
    /////////event///////
    /////////////////////
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
    //console.log(data);
    displayMessage(data);
});