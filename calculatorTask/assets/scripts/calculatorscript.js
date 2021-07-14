function showOnDisplay(num){
    document.getElementById("display").value+=num
}

function calculate(){
    let entry = document.getElementById("display").value
    let calculatedValue = eval(entry)
    console.log(calculatedValue)

    document.getElementById("display").value = calculatedValue
}

function clearDisplay(){
    document.getElementById("display").value=""
}


//keyboard functionality

document.addEventListener('keypress', (event) => {
    
    var keyPressed = event.key;
    var keyPressedCode = event.code;

    //alert(`Key pressed ${keyPressed} , Key code: ${keyPressedCode}`);

    if(keyPressed == 1){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 2){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 3){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 4){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 5){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 6){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 7){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 8){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == 9){
        document.getElementById("display").value+=keyPressed
    }


    //operators

    if(keyPressed == '*'){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == '-'){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == '+'){
        document.getElementById("display").value+=keyPressed
    }
    if(keyPressed == '/'){
        document.getElementById("display").value+=keyPressed
    }

    //equal sign

    if(keyPressedCode == 'Equal'){
        calculate()
    }

    //clearing data by using c key

    if(keyPressed == 'c'){
        clearDisplay()
    }
    

  })