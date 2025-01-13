
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// let inputData = document.getElementById("input-el").value;



inputBtn.addEventListener("click", function() {
    // let inputData = document.getElementById("input-el").value;
    myLeads.push(inputEl.value)
    console.log(myLeads)
})