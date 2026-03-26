const finalMsg = `those silly laughs, those silly fights, those silly romance did become my huge memory 💜

sitting quietly under the vast sky made me realize something…

when this world had people who never really put efforts into holding a relationship…

it was always me…

but for the first time, I saw someone trying to hold a relationship with me.

I am really grateful for that 💜

everyday you wake me up… and you make me sleep…

OMG love you so much mann 😭💜

on the other hand, I feel guilty sometimes…
like I’m not doing enough in return…

but that’s okay…

because I’m planning something really special for you soon ✨

Lub u a lot kozhandha papa 💜`;

let i = 0;

function typeWriter() {
  if (i < finalMsg.length) {
    document.getElementById("finalText").innerHTML += finalMsg.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}

window.onload = () => {
  document.getElementById("music").play().catch(()=>{});
  typeWriter(); // 🔥 starts immediately
};