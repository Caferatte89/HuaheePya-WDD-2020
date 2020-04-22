function parashow(panel) {
    panel.style.zIndex = "1";
    panel.style.color = "white";
    panel.style.textShadow = "0.5px 0.5px 20px white";
    panel.style.background = "rgba(0, 0, 0, 0.66)";
    panel.style.boxShadow = "0 0.2vw 0.4vw rgba(255, 255, 255, 0.5), 0 -0.1vw 0.1vw #666, inset 0 -0.2vw 0.2vw rgba(0,0,0,0.5), inset 0 0.1vw 0.1vw rgba(255, 255, 255, 0.5)";
}

function parahide(panel) {
    panel.style.zIndex = "0";
    panel.style.color = "transparent";
    panel.style.textShadow = "0 0 0";
    panel.style.background = "transparent";
    panel.style.boxShadow = "0 0 0 0";
}