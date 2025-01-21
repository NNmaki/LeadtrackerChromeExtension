
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com", "www.nnmaki.com"]

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let inputData = document.getElementById("input-el").value;

inputBtn.addEventListener("click", function() {
    let inputData = document.getElementById("input-el").value;
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = "";

    // document.getElementById("input-el").value = "";
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li>" + "<a href='"+myLeads[i]+"'></a>" +myLeads[i]+ "</li>"
        listItems += "<li><a target='_blank' href= '" + myLeads[1] +  "'>" + myLeads[i] + "</a></li>"



    }
    ulEl.innerHTML = listItems
}

