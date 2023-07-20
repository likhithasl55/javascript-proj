const outputEl=document.querySelector(".text");
const valEl = document.querySelectorAll(".val");
const ClearEl = document.querySelector(".AC");
const deleteEl = document.querySelector(".DEL");
const equalEl = document.querySelector(".equal");

// it adds every value and display the output

valEl.forEach((val)=>{
    val.addEventListener("click",()=>{
        outputEl.value += val.value;  
      })
})
 
// it clears the data
ClearEl.addEventListener("click",()=>{
    outputEl.value ="";
})

// it deletes the last degit in the output

deleteEl.addEventListener("click",()=>{
    outputEl.value=outputEl.value.slice(0,-1);
})

equalEl.addEventListener("click",()=>{;
try{
    outputEl.value=eval(outputEl.value);
}catch(e){
    alert(e);
}
})