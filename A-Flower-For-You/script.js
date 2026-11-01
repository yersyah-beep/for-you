
/* =========================
   APOLOGY MESSAGE
========================= */

const apology = `Nurma Putri aku minta maaf banget udah nyakiti hati kamu karena ego aku.

aku gak enak banget sampai kepikiran terus kenapa aku bisa berbuat kayak gitu.

padahal kamu orangnya baik banget dan gak pernah buat aku marah apalagi pas kamu ceria di sicabar aku seneng liatnya.

aku gak maksa kamu untuk balik lagi kayak di sicabar selalu ceria dan senyum kalau sama aku.

Terima kasih sudah pernah memberikan begitu banyak hal indah.`;


/* =========================
   ELEMENTS
========================= */

const intro = document.getElementById("intro");
const message = document.getElementById("message");

const openButton = document.getElementById("openButton");
const musicButton = document.getElementById("musicButton");

const bgMusic = document.getElementById("bgMusic");
const typingElement = document.getElementById("typing");
const closing = document.getElementById("closing");


/* =========================
   OPEN MESSAGE
========================= */

let started = false;

openButton.addEventListener("click", async () => {

    // Mencegah tombol diklik berulang kali
    if (started) return;

    started = true;

    // Sembunyikan halaman pembuka
    intro.style.display = "none";

    // Tampilkan pesan
    message.classList.add("show");

    // Mulai musik
    bgMusic.volume = 0.35;

    try {
        await bgMusic.play();
    } catch (error) {
        console.log("Musik gagal diputar:", error);
        musicButton.textContent = "♫ Putar Musik";
    }

    // Jalankan animasi
    startFlowers();
    startHearts();

    // Jalankan efek mengetik
    startTyping();

});


/* =========================
   FALLING FLOWERS
========================= */

function startFlowers() {

    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "🌼",
        "💮"
    ];

    const flowerInterval = setInterval(() => {

        const flower = document.createElement("div");

        flower.classList.add("flower-petal");

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.fontSize =
            (15 + Math.random() * 20) + "px";

        flower.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 11000);

    }, 250);


    // Bunga berjatuhan selama 15 detik
    setTimeout(() => {
        clearInterval(flowerInterval);
    }, 15000);

}


/* =========================
   FLOATING HEARTS
========================= */

let heartInterval;

function startHearts() {

    heartInterval = setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = "♡";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 15) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 11000);

    }, 1200);

}


/* =========================
   TYPING ANIMATION
========================= */

function startTyping() {

    let index = 0;

    function type() {

        if (index < apology.length) {

            typingElement.textContent += apology.charAt(index);

            index++;

            // Kecepatan mengetik
            setTimeout(type, 35);

        } else {

            // Tampilkan pesan penutup
            setTimeout(() => {
                closing.classList.add("show");
            }, 1000);

        }

    }

    type();

}


/* =========================
   MUSIC CONTROL
========================= */

musicButton.addEventListener("click", async () => {

    if (bgMusic.paused) {

        try {
            await bgMusic.play();
            musicButton.textContent = "♫ Matikan Musik";
        } catch (error) {
            console.log("Musik gagal diputar:", error);
        }

    } else {

        bgMusic.pause();
        musicButton.textContent = "♫ Putar Musik";

    }

});
