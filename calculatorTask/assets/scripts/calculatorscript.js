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
