document.getElementById("controls").addEventListener("click", function(event) {
    let target = event.target.closest('div');
    if (target) {
        let color = target.style.color === "black" ? "white" : "black";
        target.style.color = color;
    }
});
