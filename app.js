// Pertanyaan awal
function showMessage() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>Aku cuma mau bilang sesuatu yang penting banget... 😳</p>
            <div class="buttons">
                <button class="glow-btn" onclick="showBoyfriendQuestion()">Iya, terusin</button>
                <button class="glow-btn" onclick="moveButton('engga')">Enggak 😢</button>
            </div>
        </div>
    `;
}

// Pertanyaan "Do you want to be my boyfriend?"
function showBoyfriendQuestion() {
    createLove();
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>Aku mau bilang sesuatu spesial buat kamu di hari ulang tahunmu! 🎂✨</p>
            <div class="buttons">
                <button class="glow-btn" onclick="showThankYouLetter()">Baca Pesan</button>
                <button class="glow-btn" onclick="moveButton('mikir')">Nanti aja</button>
            </div>
        </div>
    `;
}

// Pop up surat makasih, lalu tombol WA
function showThankYouLetter() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="mini-letter popupIn">
            <p style="margin:0 0 20px 0;">
                Selamat ulang tahun! 🎉<br><br>
                Semoga di hari spesial ini, semua harapan dan impianmu bisa tercapai.<br><br>
                Terima kasih sudah menjadi sosok yang luar biasa, selalu menginspirasi dan memberi semangat di setiap langkahku.<br><br>
                Aku bersyukur bisa mengenalmu dan berjalan bersama di cerita hidup ini.<br><br>
                Semoga kebahagiaan, kesehatan, dan cinta selalu menyertai setiap harimu.<br><br>
                Jangan lupa untuk selalu tersenyum dan tetap jadi diri sendiri, karena kamu sangat berarti.<br><br>
                Sekali lagi, selamat ulang tahun! Semoga tahun ini membawa lebih banyak kebahagiaan dan petualangan indah untukmu.
            </p>
            <a 
                href="https://wa.me/6285117162287?text=Terima%20kasih%20ucapannya%20ya%20:)" 
                class="glow-btn" 
                target="_blank" 
                style="margin-top:18px;display:inline-block;"
            >
                Kirim WA Sekarang!
            </a>
        </div>
    `;
}

// Fungsi kembali ke pesan awal
function backToMessage() {
    showMessage();
}

// Pertanyaan "Yakin nih?"
function showFinalQuestion(answer) {
    const letter = document.getElementById("letter");
    let text = "";
    if (answer === "yes") {
        text = "Yakin nih mau menerima semua doa dan harapan baik di hari ulang tahunmu? Semoga tahun ini penuh kebahagiaan, kesehatan, dan semua impianmu tercapai! 🎂🥳";
        letter.innerHTML = `
            <div class="letter-content fade-in">
                <p>${text}</p>
                <div class="buttons">
                    <a href="https://wa.me/6285117162287?text=${encodeURIComponent("Terima kasih atas ucapan dan doanya!")} " class="glow-btn" target="_blank">Kirim WA Sekarang!</a>
                </div>
            </div>
        `;
    }
}

// Tombol "enggak" yang ngeselin
function moveButton(type) {
    let pesan = "";
    if (type === "mikir") {
        pesan = "🧐 Gak apa-apa, dipikirin dulu yaa~ Semoga di hari ulang tahunmu ini, semua yang terbaik segera datang untukmu!";
    } else {
        pesan = "😭 Yakin nggak mau? Pesan ulang tahun ini tetap spesial buat kamu kok!";
    }
    const letter = document.getElementById("letter");
    letter.innerHTML += `
        <div class="mini-letter">
            <p style="margin:0 0 16px 0;">${pesan}</p>
            <button class="glow-btn" style="margin-top:8px;" onclick="backToMessage()">Back</button>
        </div>
    `;
    setTimeout(() => {
        const mini = document.querySelector('.mini-letter');
        if (mini) mini.remove();
    }, 2500);
}

// Love-love terbang
function createLove() {
    const loveBg = document.querySelector('.love-bg');
    const love = document.createElement('div');
    love.className = 'love-float';
    love.innerText = ['❤️','💖','💕','💗','💘','💝'][Math.floor(Math.random()*6)];
    love.style.left = Math.random() * 80 + 10 + '%';
    love.style.fontSize = (Math.random() * 24 + 24) + 'px';
    love.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
    loveBg.appendChild(love);
    setTimeout(() => love.remove(), 4000);
}

setInterval(createLove, 400);

// Play audio saat halaman di-load (jika diizinkan)
window.onload = function() {
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.volume = 0.7;
        audio.play().catch(() => {
            // Jika autoplay diblokir, play saat klik pertama user
            document.body.addEventListener('click', function playAudioOnce() {
                audio.play();
                document.body.removeEventListener('click', playAudioOnce);
            });
        });
    }
    if (typeof showMessage === "function") showMessage();
};



