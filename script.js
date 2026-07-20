const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = 15 + Math.random() * 20 + "px";

    petal.style.animationDuration =
        5 + Math.random() * 5 + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);

    // 3秒後にお祝い画面を削除
    setTimeout(() => {

        const celebration = document.getElementById("celebration");

        if (celebration) {
            celebration.remove();
        }

    }, 3600);

    // ---------------------
    // 紙吹雪
    // ---------------------

    const confettiContainer = document.getElementById("confetti-container");

    const colors = [
        "#ff6b6b",
        "#ffd93d",
        "#6bcB77",
        "#4d96ff",
        "#ff8fab",
        "#c77dff"
    ];

    function createConfetti() {

        const paper = document.createElement("div");

        paper.className = "paper";

        paper.style.left = Math.random() * 100 + "vw";

        paper.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        paper.style.animationDuration =
            3 + Math.random() * 3 + "s";

        paper.style.width =
            8 + Math.random() * 8 + "px";

        paper.style.height =
            paper.style.width;

        confettiContainer.appendChild(paper);

        setTimeout(() => {
            paper.remove();
        }, 6000);

    }

    // 約120枚
    for (let i = 0; i < 120; i++) {

        setTimeout(createConfetti, i * 25);

    }



    // ---------------------
    // キラキラ
    // ---------------------

    const sparkleArea = document.getElementById("sparkles");

    function createSparkle() {

        const s = document.createElement("div");

        s.className = "sparkle";

        s.innerHTML = "✨";

        s.style.left = Math.random() * 100 + "vw";

        s.style.top = Math.random() * 100 + "vh";

        s.style.fontSize =
            15 + Math.random() * 25 + "px";

        sparkleArea.appendChild(s);

        setTimeout(() => {
            s.remove();
        }, 1200);

    }

    // 約60個
    for (let i = 0; i < 60; i++) {

        setTimeout(createSparkle, i * 80);

    }

}

setInterval(createPetal, 500);
