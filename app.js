console.log("hello world")

const img = document.querySelector(".img")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

img.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})

const login= document.querySelector(".login")
const lodpage = document.querySelector(".lodpage")
const closee = document.querySelector(".closee")
const logbutton = document.querySelector(".logbutton")

login.addEventListener("click",()=>{
    lodpage.style.display="flex"
})

closee.addEventListener("click",()=>{
    lodpage.style.display="none"
})

logbutton.addEventListener("click",()=>{
    lodpage.style.display="none"
});


function validateForm() {
    const form = document.getElementById("myform");
    const fname = document.getElementById("1");
    const mname = document.getElementById("2");

    
     const fnameValue = fname.value.trim();
     const mnameValue = mname.value.trim(); // Corrected here
     

    if (fnamevalue === "") {
        alert("Please enter a first name");
        return false; // Prevent form submission
    }
    if (mnameValue === "") {
        alert("Please enter a middle name");
        return false; // Prevent form submission
    }
        return false; // Prevent form submission
    

    // If all validations pass, you might submit the form here if needed
    // form.submit(); 
    return true; // Allow form submission
}