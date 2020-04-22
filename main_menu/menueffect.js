function loadbg() {
    welcome = document.getElementById("welcome");

    welcome.transitionTimingFunction = "ease-in-out";
    welcome.style.transitionDelay = "0.5s";
    welcome.style.transitionDuration = "1s";
    welcome.style.opacity = "1";
}

function birdmove() {
    setTimeout(function(){
        bird = document.getElementById("bird");

        bird.style.transitionDelay = "0.5s";
        bird.style.transitionDuration = "1s";
        bird.style.opacity = "1";
    
        for (let x = 5; x <= 10; x++)
        {
            var y = -1 * Math.pow(x, 2) + 14 * x - 15;
    
            bird.style.paddingLeft = (x - 8) + "vw";
            bird.style.paddingTop = y + "vw";
        }
    }, 1000);

    setTimeout(function() { bird.style.transitionDuration = "0s";}, 4000);
}

function flowermove(flower) {
    setTimeout(function(){
        flower.style.transitionDelay = "0.5s";
        flower.style.transitionDuration = "1s";
        flower.style.opacity = "1";

        flower.style.paddingTop = "3.5vw";
    }, 1000);

    setTimeout(function() { flower.style.transitionDuration = "0s";}, 4000);
}

function titlemove() {
    setTimeout(function(){
        title = document.getElementById("title");

        title.style.transitionDelay = "0.5s";
        title.style.transitionDuration = "2s";
        title.style.opacity = "1";
    }, 2000);

    setTimeout(function() { title.style.transitionDuration = "0s";}, 4000);
}

function bestmove(best) {
    setTimeout(function(){
        best.style.transitionDelay = "0.5s";
        best.style.transitionDuration = "1s";
        best.style.opacity = "1";

        best.style.paddingTop = "29vw";
    }, 3000);

    setTimeout(function() { best.style.transitionDuration = "0s";}, 4000);
}

function togglemusic() {
    var button = document.getElementById("bg-button");
    var music = document.getElementById("bg-music");

    if (music.paused) {
        button.src = "main_menu/sound_play.png";
        music.play();
    }
    else if (!music.paused && !music.muted) {
        button.src = "main_menu/sound_muted.png";
        music.muted = true;
    }
    else {
        button.src = "main_menu/sound_play.png";
        music.muted = false;
    }
}

function darkBgEnabled(bg) { bg.style.background = "rgba(0,0,0,0.5)"; }

function darkBgDisabled(bg) { bg.style.background = "transparent"; }