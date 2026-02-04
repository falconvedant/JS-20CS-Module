let premBtn = document.getElementById("prembtn");
let primeBtn = document.getElementById("primebtn");
let dmImg = document.getElementById("dthemebtn");
let lmImg = document.getElementById("lthemebtn");

function premBtnClick() {
    alert("Sorry we are still under development, this is a test page");
    console.log("PremBtn works!");
    
}
function primeBtnClick() {
    alert("Sorry, we are still under development, this is test page");
    console.log("PrimeBtn works!")
    
}

function lighMode() {
    let body = document.getElementById("bodydiv");
   
    body.classList.add('lightmode');
    

}

function darkMode() {
    let body = document.getElementById("bodydiv");
    body.classList.add('darkmode');

    
}


premBtn.addEventListener('click', premBtnClick);   
primeBtn.addEventListener('click', primeBtnClick);
dmImg.addEventListener('click',darkMode );
lmImg.addEventListener('click', lighMode);

// relative isolate bg-stone-500 px-6 py-24 sm:py-32 lg:px-8



// relative isolate bg-neutral-800 px-6 py-24 sm:py-32 lg:px-8