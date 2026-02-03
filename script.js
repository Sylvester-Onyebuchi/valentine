function celebrate() {
    const colors = ["#ff4b6e", "#ffd93d", "#6bcBef", "#95f9c3"];

    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = "20px";
        heart.style.animation = "fall 3s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }

    document.getElementById("finalMessage").style.display = "block";

    const music = document.getElementById("music");
    if (music) music.play();
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);