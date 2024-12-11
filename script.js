let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date();
    let hours= day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Vaibhav");
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Vaibhav");
    }else{
        speak("Good Evening Vaibhav");
    }
}

window.addEventListener("load",()=>{
    wishMe();
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
    console.log(event)
}
btn.addEventListener("click",()=>{
    console.log("it is working")
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"

    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can i help you?")
    }else if(message.includes("who are you")){
        speak("I am shriya virtual assistant, created by vaibhav")

    }else if(message.includes("Open you tube")){
        speak("opening you tube..")
        window.open("https://www.youtube.com/")
    }else if(message.includes("Open instagram")){
        speak("opening instagram..")
        window.open("https://www.instagram.com/")
    }else if(message.includes("open google")){
        speak("opening google..")
        window.open("https://www.google.com/")
    }else if(message.includes("shriya open your intsta video")){
        speak("opening insta post..");
        window.open("https://www.instagram.com/shitalwayal999/reel/DDW0ocCKRzqQRfDdIbGMO00ScbAcb5KgPZ36mI0/")

    }
    else if(message.includes("open your instagram")){
        speak("opening insta")
        window.open("https://www.instagram.com/lil_cutie_shriya230423/")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)

    }
    else if(message.includes("your name")){
        speak("My name is Shriya Bhagwat Jeughale, and I am 1.5 years old. I am originally from Chikhali but currently live in Daund, Pune.")
    }
    else{
        let finalText = "this is what i found internet regarding" +message.replace("shriya","")|| message.replace("shreeya","")

        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shriya","")}`,"_blank")
    }
}