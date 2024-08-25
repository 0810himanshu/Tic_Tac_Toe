let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],    
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos1val === pos3val){
                alert("Winner is : " + pos1val);
                for(let all of boxes){
                    all.disabled = true;
                }
            }
            
        }
    }
};

reset.addEventListener("click", resetGame = () => {
    turnO = true;
    for(let all of boxes){
        all.disabled = false;
        all.innerHTML= "";
    }
});