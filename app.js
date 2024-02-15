let equalPressed = 0;

let buttonInput = document.querySelectorAll(".input-button");

let erase = document.getElementById('erase');
let clear = document.getElementById('clear');
let input = document.getElementById('input');
let equal = document.getElementById('equal');

window.onload = ()=> {
    input.value = "";
};

buttonInput.forEach((bclass) => {
    bclass.addEventListener("click" ,()=>{
        if(equalPressed == 1){
            input.value = "";
            equalPressed = 0;
        }
        input.value += bclass.value;
    });
});

equal.addEventListener("click" , ()=> {
    equalPressed = 1;
    let inpVal = input.value;

    try{
        let res = eval(inpVal);
        if(Number.isInteger(res)){
            input.value = res;
        }
        else{
            input.value = res.toFixed(2);
        }
    }
    catch(err){
        alert("Invalid !nput");
    }
});

clear.addEventListener("click" , () => {
    input.value = "";
})

erase.addEventListener("click" , ()=> {
    input.value = input.value.substr(0, input.value.length - 1);
});

