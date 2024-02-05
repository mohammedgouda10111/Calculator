let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");


// =============================================//

document.getElementById("add").addEventListener("click" , function(){
    result.value = parseInt(num1.value)+parseInt(num2.value);
})

// ============================================//

document.getElementById("sub").addEventListener("click" , function(){
    result.value = parseInt(num1.value)-parseInt(num2.value);
}) 
// ============================================//

document.getElementById("mul").addEventListener("click" , function(){
    result.value = parseInt(num1.value)*parseInt(num2.value);
})

// =============================================//

document.getElementById("div").addEventListener("click" , function(){
    if(num2.value == "0" ){
        Swal.fire("Error");
        return 0;
    }
    result.value = parseInt(num1.value)/parseInt(num2.value);
})

// =============================================//

document.getElementById("mod").addEventListener("click" , function(){
    result.value = parseInt(num1.value)%parseInt(num2.value);
})
