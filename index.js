
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com", "www.nnmaki.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let inputData = document.getElementById("input-el").value;

// testing

inputBtn.addEventListener("click", function() {
    let inputData = document.getElementById("input-el").value;
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}