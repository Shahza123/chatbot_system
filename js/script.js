const chatIcon = document.getElementById("chat-icon");
const chatBot = document.getElementById("chat-bot");
const acceptCheckbox = document.getElementById("first_accept_check");
const secondAcceptCheckbox = document.getElementById("second_accept_check");
const thirdAcceptCheckbox = document.getElementById("third_accept_check");
const user_input = document.getElementById("user-input");
const sendButton=document.getElementById("send-btn");
const messageIcon = document.getElementById('message-icon');  // Message icon
const chevronIcon = document.getElementById('chevron-icon'); //chevron-icon
const card1=document.getElementById("card_1");
const card2=document.getElementById("card_2");
const cardTwoChild=document.getElementById("card2")
const cardOneChild=document.getElementById("card1");
var audio = document.getElementById("myAudio");
const audioSend=document.getElementById("audio_send");
const audioReceived=document.getElementById("audio_received");
const botClose=document.getElementById("bot_close");
const botCross=document.getElementById("bot_cross");

const popupFrist=document.getElementById("pop_content_parent1");
const popupFristChild=document.getElementById("popup-content-parent");
const secondPopupParent=document.getElementById("second_popup_parent");
const secondPopupChild=document.getElementById("popup-content2");
const thirdPopupParent=document.getElementById("third_popup_parent");
const thirdPopupChild=document.getElementById("pop_content_parent3");
const scrollBottom=document.getElementById("scroll_bottom");
const scrollBottomSecond=document.getElementById("scroll_bottom_second");
const scrollBottomThird=document.getElementById("scroll_bottom_third");
const signUpButton=document.getElementById("signupBtn");
const loginButton=document.getElementById("loginBtn");
const signUpForm=document.getElementById("form_Parent");
const nextOtpButton=document.getElementById("Next_otp_button");
const otpPage=document.getElementById("otp_page");
const otpForm=document.getElementById("otp_form");
const loginForm=document.getElementById("login_form");
const loginFormLoginParent=document.getElementById("form_login_parent");
const loginFormLogin=document.getElementById("login_form_login");
const model=document.getElementById("model");
const verifyOtpButton=document.getElementById("verify_otp_button");
const modelClosed=document.getElementById("model_sound");
const model_login=document.getElementById("model_login");
const model_login_cross=document.getElementById("model_login_cross");


//chat icon bounce logic
function bounceIcon(icon) {
 
  icon.classList.add('icon-bounce');


  setTimeout(() => {
    icon.classList.remove('icon-bounce');
  }, 500); 
}
botCross.addEventListener("click",()=>{
  playAudio();
})
//chat icon handling
if(window.innerWidth<430){
  if(chatBot.style.position==="static"){botCross.addEventListener("click",()=>{
         chatBot.style.marginTop="1000px"
 })}
else{

chatBot.style.position="static";
chatBot.style.marginTop="0px";
  

}}else{
  
chatIcon.addEventListener("click", () => {
  if (chatBot.classList.contains('open')) {
    
    chatBot.classList.remove('open');
 
    messageIcon.style.display = 'inline'; // Show message icon
    chevronIcon.style.display = 'none';   // Hide chevron icon
    bounceIcon(messageIcon);            // Apply bounce to message icon

  } else {

    chatBot.classList.add('open');

    messageIcon.style.display = 'none';   
    chevronIcon.style.display = 'inline';
    bounceIcon(chevronIcon);      
    

  }
})

}


botCross.addEventListener("click",()=>{
  chatBot.style.marginTop="1000px";
  chatBot.style.transition="0.7s"
})

chatIcon.addEventListener("click",()=>{
  chatBot.style.marginTop="0px";
  chatBot.style.transition="0.7s"
})

function playCloseSound(){
  botClose.play();
 
  


}
function playAudio() {
        audio.play();
        console.log("play auido function is caling here")
    }
messageIcon.addEventListener("click",()=>{
  playCloseSound();
})
chevronIcon.addEventListener("click",()=>{
  playAudio();
})

//message received notification

//message send notifciation
function playMessageSend(){
audioSend.play();
}

sendButton.addEventListener("click",()=>{
  playMessageSend();
})

//welcome bot message
function showWelcomeMessage() {
  const chatBox = document.getElementById("chat-box");
    
       chatBox.innerHTML ='<div class="d-flex" style="display:flex"><img src = "./assets/bot.png" style="width:40px;height: 40px;"><div class="bot-message"><p class="welcome_bot">Welcome to PharmaBot</p><p class="welcome_second_p2">Ciao, sono PHARMABOT, il tuo assistente nella ricerca del farmaco e nella lettura dei fogli informativi. Non sono un medico o un farmacista e non faccio consulenza. Se vuoi sapere quali farmaci sono necessari per la cura o prevenzione dei tuoi sintomi consulta un professionista.</p><p class="welcome_third_p3">Se vuoi procedere autonomamente con lo strumento di ricerca.</p><div style="display:flex"><div id="checkbox-terms" class="accetta"><p id="first_accept_box" class="first-accept-para" style="cursor:pointer">Accetta i termini d` uso</p></div> <input id="first_small_check" type="checkbox" style="width:40px;height:15px;margin-top:29px" disabled="true"  /></div></div></div>';
   const firstChatBot = document.getElementById("checkbox-terms");
   const firstSmallCheck=document.getElementById("first_small_check");
firstChatBot.addEventListener("click",()=>{
  popupFrist.style.display="flex"
  
  
})
}
showWelcomeMessage(); 
const firstSmallCheck=document.getElementById("first_small_check");
if(acceptCheckbox){
  acceptCheckbox.addEventListener("change", function () {  

  if (acceptCheckbox.checked) {

    sessionStorage.setItem("accept_checkbox_state","true");
    console.log("check value is getting here",firstSmallCheck)
     firstSmallCheck.disabled=false;
     firstSmallCheck.setAttribute("checked","true")
         firstSmallCheck.disabled=true;
    // firstSmallCheck.checked=true;
    sessionStorage.setItem("accept_small_first_check","true");
  sendUserMessageFirst("Accetta  i termini d` uso");
            sendBotMessageSecond();
            } 
});
}

//first small check

const fSessionSmallCheck=sessionStorage.getItem("accept_small_first_check");
if(fSessionSmallCheck){
    firstSmallCheck.disabled=false;
     firstSmallCheck.setAttribute("checked","true");
     firstSmallCheck.disabled=true;
}
const checkboxState = sessionStorage.getItem("accept_checkbox_state");

    if (checkboxState) {
    

      sendUserMessageFirst("Accetta  i termini d` uso");
      sendBotMessageSecond();
   
// firstSmallCheck.checked = true;
         } 

    //first check get the color
function firstBoxRed(){
     const first=sessionStorage.getItem("accept_checkbox_state")
     const firstChatBot = document.getElementById("checkbox-terms");
     if(first){
firstChatBot.style.backgroundColor="#01C9A7"
     }
}

//first user mesaage 
 function sendUserMessageFirst(message) {
    const chatBox = document.getElementById("chat-box");

    
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("user-message");
  const textDiv = document.createElement("div");
    textDiv.classList.add("message-text");
  
    const emojiDiv = document.createElement("div");
const messageText = document.createElement("p");
    messageText.textContent = message;
    messageText.style.fontFamily="Fira Sans"
    const emojiSpan = document.createElement("img");
    emojiSpan.classList.add("emoji");
    emojiSpan.src = "/assets/user.png";
    emojiSpan.style.width="40px"
    emojiSpan.style.heigth="40px" 
textDiv.appendChild(messageText);
emojiDiv.appendChild(emojiSpan);
    botMessageDiv.appendChild(textDiv);
    botMessageDiv.appendChild(emojiDiv);
chatBox.appendChild(botMessageDiv);

  }

  //second accept checkbox logic
function sendBotMessageSecond() {
  const chatBox = document.getElementById("chat-box");


  const botSecondMessage ='<div class="d-flex" style="display:flex;margin-top:12px";><img src ="./assets/bot.png" style="width: 40px;height: 40px;"><div class="bot-message"><p>Per eseguire la ricerca trattiamo dati pesonali sanitari. Presti il consenso (punto 6.1 informativa privacy)? </p><div style="display:flex"><div id="checkbox-terms-second" class="accetta"><p class="first-accept-para" style="cursor:pointer">Presto il consenso</p></div><input id="second_small_check" type="checkbox" style="width:40px;height:15px;margin-top:29px" disabled="true"  /></div></div></div>';
 
chatBox.innerHTML+=botSecondMessage;
firstBoxRed()

const secondBotAccept=document.getElementById("checkbox-terms-second");
const secondSmallCheck=document.getElementById("second_small_check");
secondBotAccept.addEventListener("click",()=>{
    secondPopupParent.style.display="flex"
})
secondSmallCheck.addEventListener("click",()=>{
  secondPopupParent.style.display="none";
 
})
}


//second page accept checkbox  logic



 secondAcceptCheckbox.addEventListener("change", function () {  
  const secondSmallCheck=document.getElementById("second_small_check");

  if (secondAcceptCheckbox.checked) {
sessionStorage.setItem("second_checkbox_state","true");
    sessionStorage.setItem("second_small_check","true");
    console.log("second small check value is coming here",secondSmallCheck);
    secondSmallCheck.setAttribute("checked","true");
   secondPopupParent.style.display="none";
   
   
   sendUserMessageSecond("Pristo il Consenso");
     sendBotMessageThird();


  } 

});

      const secondCheckboxState = sessionStorage.getItem("second_checkbox_state");
        const secondSmallCheck=document.getElementById("second_small_check");
if( secondCheckboxState ){
     secondSmallCheck.setAttribute("checked","true");
    sendUserMessageSecond("Pristo il Consenso");
    sendBotMessageThird();
}

function secondBoxRed(){
      const secondBotTerms = document.getElementById("checkbox-terms-second");
        const secondCheckboxState = sessionStorage.getItem("second_checkbox_state");

        if(secondCheckboxState){
            secondBotTerms.style.backgroundColor="#01C9A7"
        }

}

function sendUserMessageSecond(message) {
    const chatBox = document.getElementById("chat-box");
     const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("user-message");


    const textDiv = document.createElement("div");
    textDiv.classList.add("message-text");
    const emojiDiv = document.createElement("div");
const messageText = document.createElement("p");
    messageText.textContent = message;
    messageText.style.fontFamily="Fira Sans"
     const emojiSpan = document.createElement("img");
    emojiSpan.classList.add("emoji");
    emojiSpan.src = "/assets/user.png";
    emojiSpan.style.width="40px"
    emojiSpan.style.heigth="40px" 

textDiv.appendChild(messageText);
emojiDiv.appendChild(emojiSpan);
 botMessageDiv.appendChild(textDiv);
    botMessageDiv.appendChild(emojiDiv);
 chatBox.appendChild(botMessageDiv);

  }

//third page accept checjbox logic
function sendBotMessageThird() {
  const chatBox = document.getElementById("chat-box");
const botThirdMessage ='<div class="d-flex" style="display:flex;margin-top:12px";><img src ="./assets/bot.png" style="width: 40px;height: 40px;"><div class="bot-message"><p>Scusa, ancora un attimo.Ecco alcune informazioni sintetiche.  </p><div style="display:flex"><div id="checkbox-terms-third" class="accetta" style="width:250px"><p class="first-accept-para" style="cursor:pointer;font-size:12px" >Ok, ho letto le informazioni sintetiche.</p></div><input id="third_small_check" type="checkbox" style="width:40px;height:15px;margin-top:29px" disabled="true"  /></div></div></div>';
 
chatBox.innerHTML+=botThirdMessage;

const thirdBotAccept=document.getElementById("checkbox-terms-third");

thirdBotAccept.addEventListener("click",()=>{
    thirdPopupParent.style.display="flex";
})
secondBoxRed();
}
 //  const thirdBotTerms = document.getElementById("checkbox-terms-third");
thirdAcceptCheckbox.addEventListener("click",()=>{
    thirdPopupParent.style.display="none"
})
thirdAcceptCheckbox.addEventListener("change", function () {  
  const thirdSmallCheck=document.getElementById("third_small_check");

  if (thirdAcceptCheckbox.checked) {

    sessionStorage.setItem("third_checkbox_state","true");
    console.log("third checbox  is coming here",thirdSmallCheck);
    sessionStorage.setItem("third_small_check","true");
   thirdSmallCheck.setAttribute("checked","true");
thirdBoxRed();

         sendUserMessageFourth("Ok, ho letto le informazioni sintetiche.");
         
      sendBotMessageFourth();
   } 

});
const thirdCheckStorage=sessionStorage.getItem("third_checkbox_state");
 const thirdSmallCheck=document.getElementById("third_small_check");
if(thirdCheckStorage){
     thirdSmallCheck.setAttribute("checked","true");
  thirdBoxRed()
   sendUserMessageFourth("Ok, ho letto le informazioni sintetiche.");
 sendBotMessageFourth();
}
  
//third bxo red

function thirdBoxRed(){
  const thirdCheckTerm=document.getElementById("checkbox-terms-third");
  const thirdCheckBox=sessionStorage.getItem("third_checkbox_state");
if(thirdCheckBox){
  thirdCheckTerm.style.backgroundColor="#01C9A7";
}
}
//send user  third message
 function sendUserMessageFourth(message) {
    const chatBox = document.getElementById("chat-box");
const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("user-message");
  const textDiv = document.createElement("div");
  textDiv.classList.add("message-text");
    const emojiDiv = document.createElement("div");
    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageText.style.fontFamily="Fira Sans"
     const emojiSpan = document.createElement("img");
    emojiSpan.classList.add("emoji");
    emojiSpan.src = "/assets/user.png";
    emojiSpan.style.width="40px"
    emojiSpan.style.heigth="40px" 
 textDiv.appendChild(messageText);
    emojiDiv.appendChild(emojiSpan);
    botMessageDiv.appendChild(textDiv);
    botMessageDiv.appendChild(emojiDiv);
    chatBox.appendChild(botMessageDiv);
  }

  //bot fourth message

function sendBotMessageFourth(){
   const chatBox = document.getElementById("chat-box");
  const botFourthMessage ='<div class="d-flex" style="display:flex;margin-top:12px";><img src ="./assets/bot.png" style="width: 40px;height: 40px;"><div class="bot-message"><p>Presti il consenso alla trasmissione della Tua domanda e della risposta a Thinkalize Global ltd  per l’alimentazione del Database e per le ricerche statistiche e per l’analisi intelligente effettuate mediante operatori extraeuropei.</p><p style="margin-top:12px">(art. 6.3 Informativa Privacy)?</p><div id="checkbox-terms-third" style="display:flex;flex-direction:column;gap:6px;margin-top:6px"><button id="yes">SÌ </button><button id="no">NO</button></div></div>';
  chatBox.innerHTML+=botFourthMessage;

  //yes button is is getting here
   const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
yesButton.addEventListener("click", () => {
  const computedStyle = window.getComputedStyle(yesButton);
  const currentBackground = computedStyle.backgroundColor;
      if (currentBackground === "rgba(0, 0, 0, 0)" || currentBackground === "transparent") {
yesButton.style.background = "#01C9A7"; 
    noButton.style.background = "transparent";
    user_input.disabled = false; 
    user_input.style.border = "1px solid #01C9A7"; 
    user_input.classList.add("input_placeholder");
     sendButton.setAttribute("fill", "#01C9A7");
   } else {
    
    yesButton.style.background = "transparent";
      user_input.classList.remove("input_placeholder");
  }
});

// no button id is getting here
noButton.addEventListener("click", () => {
  if(noButton.style.background=="transparent"){
 noButton.style.background = "#01C9A7";
 yesButton.style.background="transparent"
 user_input.disabled=true;
 user_input.style.border="1px solid #cccccc";
 user_input.style.backgroundColor="white";

  }else{
    noButton.style.background = "transparent";
  }
 
});

noButton.addEventListener("click",()=>{

      sessionStorage.removeItem("third_small_check");
        sessionStorage.removeItem("third_checkbox_state");
        sessionStorage.removeItem("second_small_check");
         sessionStorage.removeItem("second_checkbox_state");
          sessionStorage.removeItem("accept_small_first_check");
           sessionStorage.removeItem("accept_checkbox_state");
location.reload();


  console.log("no buttin is clicked");
})

}
    //send the use message to bot
//this is previous
let isFirstMessage = true; // Flag to track if it's the first message

document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {

    const userInput=document.getElementById("user-input");
    const userMessage=userInput.value.trim();
    // getChatbotResponse(userMessage);
    playMessageSend();
    sendMessage();  
  }
});

sendButton.addEventListener("click",()=>{
sendMessage();
})

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();


  if (message !== "") {
    const chatBox = document.getElementById("chat-box");
    const userMessageWrapper = document.createElement("div");
    userMessageWrapper.classList.add("user_message_wrapper");

    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user_messages");

    const userImage = document.createElement("img");
    userImage.src = "./assets/user.png"; // Path to the user image
    userImage.alt = "User Image";
    userImage.style.width = "40px";
    userImage.style.height = "40px";

    const userText = document.createElement("span");
    userText.textContent = message;

    userMessageDiv.appendChild(userText);
    userMessageWrapper.appendChild(userMessageDiv);
    userMessageWrapper.appendChild(userImage);
    
    chatBox.appendChild(userMessageWrapper);
    userInput.value = ""; // Clear input after sending the message
    chatBox.scrollTop = chatBox.scrollHeight;
getChatbotResponse(message);
    // Call bot response only if it's the first message
    if (isFirstMessage) {
      isFirstMessage = false; // Set the flag to false so this block won't be executed again
      setTimeout(addBotResponse, 1000);
    }
  }
}

// Function to handle the bot's response (only called once)
function addBotResponse() {
  const chatBox = document.getElementById("chat-box");

  const botMessageWrapper = document.createElement("div");
  botMessageWrapper.classList.add("bot_message_wrapper");

  const botMessageDiv = document.createElement("div");
  botMessageDiv.classList.add("bot_messages");

  const botImage = document.createElement("img");
  botImage.src = "./assets/bot.png";
  botImage.style.width = "40px";
  botImage.style.height = "40px"; 
  botImage.alt = "Bot Image";

  const botText = document.createElement("div");
  botText.classList.add("other_div");

  const firstPara = document.createElement("p");
  firstPara.textContent = "Ecco i farmaci coerenti con la ricerca da te effettuata.";
  firstPara.classList.add("firstPara");

  const secondPara = document.createElement("p");
  secondPara.textContent = "(Dati rilasciati da AIFA (licenza CC-BY)";
  secondPara.classList.add("secondPara");

  const thirdPara = document.createElement("p");
  thirdPara.textContent = "Vuoi consultare un professionista?";
  thirdPara.style.marginTop = "8px";
  thirdPara.classList.add("thirdPara");

  const nestedOther = document.createElement("div");
  nestedOther.classList.add("nested_other");

  const buttonFirst = document.createElement("button");
  buttonFirst.textContent = "SÌ";
  buttonFirst.id = "button_first";

  const buttonSecond = document.createElement("button");
  buttonSecond.textContent = "NO";
  buttonSecond.id = "button_second";

  const buttonThird = document.createElement("button");
  buttonThird.textContent = "Compra ora";
  buttonThird.id = "button_third";

  botText.appendChild(firstPara);
  botText.appendChild(secondPara);
  botText.appendChild(thirdPara);
  nestedOther.appendChild(buttonFirst);
  nestedOther.appendChild(buttonSecond);
  nestedOther.appendChild(buttonThird);
  botText.appendChild(nestedOther);

  botMessageWrapper.appendChild(botImage);
  botMessageDiv.appendChild(botText);
  botMessageWrapper.appendChild(botMessageDiv);

  chatBox.appendChild(botMessageWrapper);

  chatBox.scrollTop = chatBox.scrollHeight;

  // Add event listeners for buttons (if needed)
  setupButtonListeners();
}

function setupButtonListeners() {
  const yesButton = document.getElementById("button_first");
  yesButton.addEventListener("click", () => {
    card2.style.display = "block";
  });
  card2.addEventListener("click", () => {
    card2.style.display = "none";
  });
  cardTwoChild.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  const noButton = document.getElementById("button_second");
  noButton.addEventListener("click", () => {
    noButton.style.background = "#01C9A7";
    callApi = true;
    sendNoMessage();
  });

  const otherDiv = document.getElementById("card_1");
  const otherButton = document.getElementById("button_third");
  otherButton.addEventListener("click", () => {
    otherDiv.style.display = "block";
  });
  otherDiv.addEventListener("click", () => {
    otherDiv.style.display = "none";
  });
  cardOneChild.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}


function sendNoMessage() {
  const chatBox = document.getElementById("chat-box");

  // Create the user "NO" message
  const userMessageWrapper = document.createElement("div");
  userMessageWrapper.classList.add("user_message_wrapper");

  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("user_messages");

  const userImage = document.createElement("img");
  userImage.src = "./assets/user.png"; 
  userImage.alt = "User Image";
  userImage.style.width="40px";
  userImage.style.height="40px";


  const userText = document.createElement("span");
  userText.textContent = "NO";  

  userMessageDiv.appendChild(userText);
  userMessageWrapper.appendChild(userMessageDiv);
  userMessageWrapper.appendChild(userImage);
  chatBox.appendChild(userMessageWrapper);

  // // Scroll the chatbox to the bottom
  // chatBox.scrollTop = chatBox.scrollHeight;

  // Immediately send the bot's response
  setTimeout(function () {
    const botMessageWrapper = document.createElement("div");
    botMessageWrapper.classList.add("bot_message_wrapper");

    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot_messages");

    const botImage = document.createElement("img");
    botImage.src = "./assets/bot.png"; // Path to the bot image
    botImage.alt = "Bot Image";
    botImage.style.width="40px";
    botImage.style.heigth="40px";

    const botText = document.createElement("span");
    botText.textContent = "Posso aiutarti ancora?"; // Bot's immediate response after "NO"

    botMessageDiv.appendChild(botText);
    botMessageWrapper.appendChild(botImage);
    botMessageWrapper.appendChild(botMessageDiv);
    chatBox.appendChild(botMessageWrapper);

    // Scroll the chatbox to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  playMessageReceived()
  }, 500); // Bot response delay after user message
}

function playMessageReceived(){
 audioReceived.play();
}

function playSendMessage(){
  audioSend.play();
}
let memory_backlog=[]


function getChatbotResponse(userMessage) {
  // Show typing indicator before sending the API request
  showTypingIndicator();

  const apiUrl = `http://35.171.25.221/chatbot/pharmabot/chat?query=${encodeURIComponent(userMessage)}`;
  
  const requestData = {
      token: "dsd33",
    data: memory_backlog  // memory_backlog Send the previous history or empty if none exists
  };
  
  // Make a POST request to the chatbot API
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    console.log("Response is coming here", response);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();  // Parse JSON response
  })
  .then(data => {
    // Hide typing indicator when response is received
    hideTypingIndicator();
    memory_backlog=data.memory_backlog

    // Append the bot's response to the chat box
    // console.log("Data is coming here from bot", data);
    appendChatbotMessage(data.message);  // Call a function to append the response
  })
  .catch(error => {
    console.error("There was an error while calling the API.", error);  // Handle any error

    // Hide typing indicator in case of an error
    hideTypingIndicator();
  });
}

// Function to show typing indicator
function showTypingIndicator() {
  const chatBox = document.getElementById('chat-box');
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('typing');
  typingIndicator.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;
  typingIndicator.setAttribute('id', 'typing-indicator'); // Set an ID for easy removal later
  chatBox.appendChild(typingIndicator);
}

// Function to hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();  // Remove the typing indicator
  }
}


//fetching api
function appendChatbotMessage(message) {
    const chatBox = document.getElementById("chat-box");  // Get the chat box element
  chatBox.scrollTop = chatBox.scrollHeight;
    // Create a wrapper div for the bot's message and image
    const botMessageWrapper = document.createElement("div");
    botMessageWrapper.classList.add("bot_message_wrapper");  

    // Create the bot's image element
    const botImage = document.createElement("img");
    botImage.src = "./assets/bot.png";  
    botImage.alt = "Bot Image";
    botImage.style.width = "40px";
    botImage.style.height = "40px";  
    botImage.classList.add("bot-image");  

    // Create the div to hold the bot's message
    const messageDiv = document.createElement("div");
    messageDiv.className = "bot_messages";  
    messageDiv.innerHTML = message;
      const images = messageDiv.getElementsByTagName('img');
    for (let img of images) {
        img.style.maxWidth = '100px';  
        img.style.maxHeight = '100px'; 
    }



    botMessageWrapper.appendChild(botImage);  
    botMessageWrapper.appendChild(messageDiv);  

    chatBox.appendChild(botMessageWrapper);

    chatBox.scrollTop=chatBox.scrollHeight;
    
     scrollToBottom();
 playMessageReceived();
   
    
}


function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    }, 100);  // Add a small delay to ensure it scrolls after the content is added
}


window.addEventListener("load", function() {
    scrollToBottom();  // Scroll to the bottom of the chat box on page load
});


popupFrist.addEventListener("click",()=>{
    popupFrist.style.display="none"
})
popupFristChild.addEventListener("click",(Event)=>{
    Event.stopPropagation();
})

chatIcon.addEventListener("click",()=>{
    popupFrist.style.display="none";
})

chatIcon.addEventListener("click",()=>{
 secondPopupParent.style.display="none";
})

chatIcon.addEventListener("click",()=>{
  thirdPopupParent.style.display="none";
})
acceptCheckbox.addEventListener("click",()=>{
popupFrist.style.display="none";
})

//second popup logic
secondPopupParent.addEventListener("click",()=>{
    secondPopupParent.style.display="none";
})

secondPopupChild.addEventListener("click",(Event)=>{
 Event.stopPropagation();   
})



//scrollBottom button logic of the popup
scrollBottom.addEventListener("click",()=>{
  popupFristChild.scrollTop= popupFristChild.scrollHeight;
scrollBottom.style.display="none"
  console.log("scrolling is applying here");
})



 
scrollBottom.addEventListener("click", () => {

  popupFristChild.scrollTop = popupFristChild.scrollHeight;
  

  scrollBottom.style.display = "none";
  
 
});

popupFristChild.addEventListener("scroll", () => {

  if (popupFristChild.scrollTop < popupFristChild.scrollHeight - popupFristChild.clientHeight) {
    scrollBottom.style.display = "block";
  } else {

    scrollBottom.style.display = "none";
  }
});


//second popup scroll button

scrollBottomSecond.addEventListener("click",()=>{
 secondPopupChild.scrollTop=secondPopupChild.scrollHeight;
 console.log("yes button si cliked");
 

 });
secondPopupChild.addEventListener("scroll", () => {

  if (secondPopupChild.scrollTop < secondPopupChild.scrollHeight - secondPopupChild.clientHeight) {
    scrollBottomSecond.style.display = "block";
  } else {

    scrollBottomSecond.style.display = "none";
  }
});
//third scroll bottom
scrollBottomThird.addEventListener("click",()=>{
  thirdPopupChild.scrollTop=thirdPopupChild.scrollHeight
})

thirdPopupChild.addEventListener("scroll",()=>{
 if (thirdPopupChild.scrollTop < thirdPopupChild.scrollHeight - thirdPopupChild.clientHeight) {
    scrollBottomThird.style.display = "block";
  } else {

    scrollBottomThird.style.display = "none";
  }
})


//sign up form handling
signUpButton.addEventListener("click",()=>{
  // signUpForm.style.display="flex";
  card2.style.display="none";

})

const fname=document.getElementById("f_name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const password=document.getElementById("password");
loginForm.addEventListener("submit",function(event){
  event.preventDefault();
  const formData={
    f_name:fname.value,
   email:email.value,
    phone:phone.value,
    password:password.value,
    
  }
 
  const apiUrl="https://multivendor.doclive.info/api/v1/auth/sign-up";
  fetch(apiUrl,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
  }).then((response)=>{response.json()
      console.log("response is this by signup",response)
      if(response.status===200){
         alert("Form submitted succesfully")
        otpForm.style.display="block"
        otpForm.style.zIndex="1000"
        otpForm.style.width="380px"
        otpForm.style.height="300px"
      
        otpForm.style.overflow="visible"
        otpForm.style.visibility="visible"
  otpForm.style.bottom="30%"
  otpForm.style.right="40%"
   loginForm.style.display="none"
   chatBot.style.zIndex="-1000"
   chatIcon.style.zIndex="-1000"
  
     
  }
}

  ).then(result=>{
    console.log("sucess",result);
  
   const userName = result?.f_name;  // Extract the user's name from the response
      appendChatbotMessage(`Welcome, ${userName}`);
   
      modelOPen()
    
  }).catch(error=>{
    console.log('Error',error);
    
  })
})


function modelOPen(){
 modelClosed.play();
}
signUpButton.addEventListener("click",()=>{
  console.log("signup button is clicking")
  modelOPen()
  model.style.display="block"
// model.style.zIndex="1000"
chatBot.style.zIndex="-1000"
chatIcon.style.zIndex="-1000"
  loginForm.style.width="380px"
  loginForm.style.height="385px"
  loginForm.style.overflow="visible"
loginForm.style.visibility="visible"
loginForm.style.bottom="30%"
loginForm.style.right="40%"

 
})

//verify otp logic

const otp=document.getElementById("otp");
otpForm.addEventListener("submit",(event)=>{
event.preventDefault();
  const otpData={
    phone:phone.value,
    otp:otp.value
  }
  const apiUrl="https://multivendor.doclive.info/api/v1/auth/verify-phone";
  fetch(apiUrl,{
    method:"POST",
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(otpData)
    
  }).then((response)=>{response.json()
    console.log("resposne is coming here form the verify otp",response)
    if(response.status===200){
      otpForm.style.width="0%"
      otpForm.style.height="0%"
      otpForm.style.overflow="hidden"
      otpForm.style.visibility="hidden"
      otpForm.style.position="absolute"
      otpForm.style.bottom="0%"
      otpForm.style.right="0%"
      otpForm.style.transition="all 1s ease"
   
        setTimeout(() => {
     model.style.display = "none";
  }, 1000);

    }
  }).then((result)=>{console.log("result is coming here of otp",result);
alert("Otp verified successfully")
   modelOPen()



}).catch((error)=>{
  console.log("error is coming from the otp verification process",error)
})

})

// login  model logic
loginButton.addEventListener("click", () => {
  modelOPen()
  model_login.style.display = "flex";
  loginFormLogin.style.width = "380px";
  loginFormLogin.style.height = "225px";
  loginFormLogin.style.visibility = "visible";
  loginFormLogin.style.overflow = "visible";
  loginFormLogin.style.position = "absolute";
  loginFormLogin.style.bottom = "30%";
  loginFormLogin.style.right = "40%";
  chatBot.style.zIndex = "-1000"; 
  chatIcon.style.zIndex = "-1000"; 
  console.log("Yes, login button is clicking");
});



//next otp button logic
loginFormLogin.addEventListener("submit", (event) => {
  event.preventDefault(); 
  modelOPen()
  
  // Start transition for hiding the form
  loginFormLogin.style.transition = "all 0.5s ease"; 

  loginFormLogin.style.bottom = "0"; 
  loginFormLogin.style.right = "0";  

  
  loginFormLogin.style.width = "0%";
  loginFormLogin.style.height = "0%";
  loginFormLogin.style.visibility = "hidden";
  loginFormLogin.style.overflow = "hidden";

  setTimeout(() => {
    model_login.style.display = "none";
  }, 1000); 
});
//model login close logic
model_login_cross.addEventListener("click",()=>{
  modelOPen()
   loginFormLogin.style.transition = "all 1s ease"; 

  loginFormLogin.style.bottom = "0"; 
  loginFormLogin.style.right = "0";  

  
  loginFormLogin.style.width = "0%";
  loginFormLogin.style.height = "0%";
  loginFormLogin.style.visibility = "hidden";
  loginFormLogin.style.overflow = "hidden";

  setTimeout(() => {
    model_login.style.display = "none";
  }, 1000); 

})

// model close otp logic
verifyOtpButton.addEventListener("click",()=>{
     otpForm.style.width="0%"
      otpForm.style.height="0%"
      otpForm.style.overflow="hidden"
      otpForm.style.visibility="hidden"
      otpForm.style.position="absolute"
      otpForm.style.bottom="0%"
      otpForm.style.right="0%"
      otpForm.style.transition="all 1s ease"
   
        setTimeout(() => {
     model.style.display = "none";
  }, 1000);
})