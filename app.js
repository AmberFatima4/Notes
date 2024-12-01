const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
    attachEditListeners();
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = "New Note"; 
    img.src = "images/delete.png";
    
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    
    attachEditListener(inputBox);
    
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); 
    }
});

function attachEditListener(noteElement) {
    noteElement.onkeyup = function() {
        updateStorage();
    };
}

function attachEditListeners() {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        attachEditListener(nt);
    });
}

document.addEventListener("keydown",event =>{
    if(
        event.key === "Enter"
){
    document.execCommand("insertLineBreak")
    event.preventDefault()
}
})
