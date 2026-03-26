const message = `Hieee NISHANT 💜

I wishh you a very very very happiest and blessed birthdayyy 🎉

YAAAAYYY!!!!!! You are turning 18 this year 😭✨  
I am super excited for your journeyy which is gonna start...

And yeah, you are entering into the golden phase of your life 🌙  
I wish that you enjoy your birthday to your fullest 💫  

And I hope this day will be as sweet as you  
and as good as you... 💜
`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}

window.onload = typeWriter;

function goToPage3() {
  window.location.href = "page3.html";
}