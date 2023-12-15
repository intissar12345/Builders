console.log("het werkt");

let boxes = document.querySelectorAll(".box");
let turn = "player";

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turn == "player" && box.textContent == "") {
            box.textContent = "boot player";
            turn = "computer";if(turn=="explosie"&& box.textContent==""){
                box.textContent="explosie";
                turn="player"
            }
        } else if (turn == "computer" && box.textContent == "") {
            box.textContent = "boot computer";
            turn = "player";
        };
    });
});


