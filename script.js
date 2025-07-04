const messages = [
  "Aliya, you're the reason behind my smile 💕",
  "With you, every moment feels magical ✨",
  "You’re my sunshine on the cloudiest day 🌤️",
  "Aliya, you're not just beautiful, you're my whole world 🌍",
  "Every heartbeat of mine whispers your name 💓",
  "I fall for you more every day 🥰",
  "Aliya, being with you is my favorite story 📖❤️"
];

let index = 0;
const textElement = document.getElementById('typed-text');
const music = document.getElementById('bg-music');

function typeMessage(message, i = 0) {
  if (i < message.length) {
    textElement.innerHTML += message.charAt(i);
    setTimeout(() => typeMessage(message, i + 1), 50);
  }
}

function startTyping() {
  textElement.innerHTML = "";
  const msg = messages[Math.floor(Math.random() * messages.length)];
  typeMessage(msg);
  music.play();
}
