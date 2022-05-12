const nextEl = document.getElementById("next");
const previousEl = document.getElementById("previous");
const stepsEl = document.querySelectorAll(".step");
const frontBarEl = document.querySelector(".progress-bar-front")
let currentChecked = 1;
nextEl.addEventListener("click", () =>{
      currentChecked++;
      if(currentChecked > stepsEl.length){
          currentChecked = stepsEl.length;
      }
      updateStepProgress();
})

previousEl.addEventListener("click", () =>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepProgress();
})

function updateStepProgress(){
    stepsEl.forEach((stepEl, idx)=>{
        if(idx < currentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${idx === 0? "Start" : idx === stepsEl.length-1 ? "Final" : "Step "+ idx}</small>`;
       }else{
           stepEl.classList.remove("checked");
           stepEl.innerHTML = `
           <i class="fas fa-times"></i>`;
       }
    })

   const checkedNumber = document.querySelectorAll(".checked");
   frontBarEl.style.width = ((checkedNumber.length-1) /(stepsEl.length-1 )) *100 + "%";
   
   if(currentChecked === 1){
       previousEl.disabled = true;
   }else if(currentChecked === stepsEl.length){
       nextEl.disabled = true;
   }else{
       previousEl.disabled = false;
       nextEl.disabled = false;
   }
}