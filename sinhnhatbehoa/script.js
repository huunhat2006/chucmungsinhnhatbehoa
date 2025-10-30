const passwordScreen = document.getElementById("password-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const wishScreen = document.getElementById("wish-screen");
const checkBtn = document.getElementById("check-password");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-message");
const music = document.getElementById("music");
const toWishBtn = document.getElementById("to-wish");
const layer = document.getElementById("animation-layer");

const CORRECT_PASSWORD = "31102008";

checkBtn.addEventListener("click", () => {
  const val = passwordInput.value.trim().toLowerCase();

  if (val === CORRECT_PASSWORD) {
    passwordScreen.classList.remove("active");
    birthdayScreen.classList.add("active");

    // ✅ Phát nhạc ngay khi chuyển màn hình sinh nhật
    setTimeout(() => {
      music.play().catch(() => {
        console.log("Trình duyệt cần thao tác người dùng để phát nhạc");
      });
    }, 300);
  } else {
    errorMsg.textContent = "Sai mật khẩu rồi, thử lại nhé 💔";
  }
});

toWishBtn.addEventListener("click", () => {
  birthdayScreen.classList.remove("active");
  wishScreen.classList.add("active");
  startHeartsAndBubbles();
});

function startHeartsAndBubbles() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 400);

  setInterval(() => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = 3 + Math.random() * 4 + "s";
    layer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 7000);
  }, 500);
}
