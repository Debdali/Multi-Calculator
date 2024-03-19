// for Compound Interest
function calcompoundint() {
    let combprincipal= document.getElementById("principal").value;
    let combrateofint= document.getElementById("rateofint").value;
    let combnoofyear= document.getElementById("noofyear").value;
    if(combprincipal>0 && combrateofint>0 && combnoofyear>0 ){
    let total = parseInt(combprincipal) *(1+(parseFloat(combrateofint)/100))**parseInt(combnoofyear);
    let comint = total - parseInt(combprincipal) ;
    document.getElementById("compoundresult").innerHTML = "Total Amount is : "+ total.toFixed (2,0) + "<br>"+
    " Compound Interest is  : "+ comint.toFixed(2,0);
    }
    else {
        document.getElementById("compoundresult").innerHTML = "Invalid Number";
        // error for invalid and empty entry
    }
};





//Script for Simple Calculator
function calsimpleint() {

    var simpleprin = document.getElementById ("simpleprin").value;
    var simpleintrate = document.getElementById ("simpleintrate").value;
    var simplenoofyears = document.getElementById ("simplenoofyears").value;
    if (simpleprin>0 && simpleintrate>0 && simplenoofyears>0){
    var total = parseInt(simpleprin) + ((parseInt(simpleprin) *(parseFloat(simpleintrate)/100) )*parseInt(simplenoofyears)); 
    var simpleint = total - parseInt(simpleprin)
    document.getElementById ("ans").innerHTML = "The Total Amount is : " + total.toFixed(2,0) + "<br>" +
    "The Interest amount is : "+ simpleint.toFixed(2,0);
    } 
    else {
        document.getElementById ("ans").innerHTML = "Invalid Number";
        // error for invalid and empty entry
    }  
};

    //for Simple Calculator 

    let display = document.getElementById("screen");
function allclear(){
    display.value=""
}
function show (n){
    display.value += n;
}
function cal(){
    display.value = eval(display.value)
}
function clear(){
    display.value = display.value.slice(0,-1)
}

    
    //for selectselection 
const calculatorEl = document.getElementById("selectCal");
calculatorEl.addEventListener("change", ()=>{
    const optionvalue = calculatorEl.value;    
    const compounddiv = document.getElementById("compound")
    const simplediv = document.getElementById("simple")
    const indexPic = document.getElementById
    const simpleCalculator = document.getElementById("simpleCalculator")
      
    
    if (optionvalue === ""){
        simplediv.style.display = "none";
        compounddiv.style.display = "none";
        indexPic.style.display = "block";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "none";

    }
    else if (optionvalue === "compound") {
        simplediv.style.display = "none";
        compounddiv.style.display = "block";
        indexPic.style.display = "none";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "none";
    }
    else if (optionvalue === "simple") {
        simplediv.style.display = "block";
        compounddiv.style.display = "none";
        indexPic.style.display = "none";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "none";
    }
    else if (optionvalue === "DegtoRad") {
        simplediv.style.display = "none";
        compounddiv.style.display = "none";
        indexPic.style.display = "none";
        degtoRad.style.display = "block";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "none";
    }
    else if (optionvalue === "areaOfTrape") {
        simplediv.style.display = "none";
        compounddiv.style.display = "none";
        indexPic.style.display = "none";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "block";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "none";
    }
    else if (optionvalue === "areaOfParallel") {
        simplediv.style.display = "none";
        compounddiv.style.display = "none";
        indexPic.style.display = "none";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "block";
        simpleCalculator.style.display = "none";
    }
    else if (optionvalue === "simpleCalculator") {
        simplediv.style.display = "none";
        compounddiv.style.display = "none";
        indexPic.style.display = "none";
        degtoRad.style.display = "none";
        areaOfTrape.style.display = "none";
        areaOfParallel.style.display = "none";
        simpleCalculator.style.display = "grid";
    }
})
