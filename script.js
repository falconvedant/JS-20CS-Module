let premBtn = document.getElementById("prembtn");
let primeBtn = document.getElementById("primebtn");
let dmImg = document.getElementById("dthemebtn");
let lmImg = document.getElementById("lthemebtn");

function premBtnClick() {
  
    prompt('Enter you credit card number:');
    alert('Thanks!');
    console.log("PremBtn works!");
    
}
function primeBtnClick() {
    prompt("Enter your credit card number:"); 
    alert('Thanks!');
    console.log("PrimeBtn works!");
    
}

function lighMode() {
    let body = document.getElementById("bodydiv");
    let classes = body.classList;
    if (classes.contains('lightmode')) {
        alert("already in light mode");
        
    }
   body.classList.remove('bodydiv');
    body.classList.add('lightmode');
    

}

function darkMode() {
    let body = document.getElementById("bodydiv");

    let classes = body.classList;
     console.log(classes);
     if (classes.contains('bodydiv')) {

         body.classList.remove('bodydiv');
         alert("already in dark mode");
        } else{
        body.classList.remove('lightmode');

     }
    body.classList.add('bodydiv');

    
}


premBtn.addEventListener('click', premBtnClick);   
primeBtn.addEventListener('click', primeBtnClick);
dmImg.addEventListener('click',darkMode );
lmImg.addEventListener('click', lighMode);

// relative isolate bg-stone-500 px-6 py-24 sm:py-32 lg:px-8



// relative isolate bg-neutral-800 px-6 py-24 sm:py-32 lg:px-8
