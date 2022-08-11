console.log("good");
shownotes();

//If user adds a note add it to localstorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    shownotes();
});

//function to show notes in webpage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let a = "";
    notesObj.forEach(function (element, index) {
        a += `<div class="notecard card  my-3 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="del(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`

    });
    let noteelm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteelm.innerHTML = a;
    } else {
        noteelm.innerHTML = `<br><h2>Start Saving Notes</h2>`
    }


}

//To Delete a note
function del(index) {
    console.log("Deleted", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
//To search a note
let search = document.getElementById('search');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log("input on");
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        console.log(cardtxt);
    })
});