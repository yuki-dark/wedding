const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = 15 + Math.random()*20 + "px";

    petal.style.animationDuration =
        5 + Math.random()*5 + "s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },10000);

}

setInterval(createPetal,500);