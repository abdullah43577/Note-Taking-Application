"use strict";

// 1. listen for click in the 'Add new' button
const noteContent = [];
const addNote = document.querySelector("#addNote");
const noteInput = document.querySelector("#noteInput");
const noteSection = document.querySelector("#noteSection");
// const viewMore = document.querySelectorAll(".show-Modal");
const modalMessage = document.querySelector(".paragraph");
const modalContainer = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//console.log(modalContainer);
const closeModal = document.querySelector(".close-modal");

// function for closing down the modal popup window
const closeModalDown = () => {
  modalContainer.classList.add("hidden");
  overlay.classList.add("hidden");
};

addNote.addEventListener("click", () => {
  //console.log(`Add new button is being clicked`);
  //2. get in the input value in the input box and store in an array
  if (noteInput.value !== "") {
    //console.log(noteInput.value);
    noteContent.push(noteInput.value);

    let textContent = "";
    for (let i = 0; i < noteContent.length; i++) {
      textContent = `<div class="container">
                          <h3>Note ${i + 1}</h3>
                          <p class="messageEl">${noteInput.value}</p>
                          <button class="show-Modal" onclick="showModal(event)" id="${i}">View Details</button>  
                    </div>`;
      console.log(textContent);
    }
    noteSection.innerHTML += textContent;
    textContent = "";
  }
  // empty the input field
  noteInput.value = "";
});

//showModal popup function
function showModal(e) {
  console.log(e.target.id);

  let modalRow = e.target.id;
  let index = noteContent[noteContent.length - 1];
  modalMessage.textContent = noteContent[modalRow];

  modalContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//close Modal Button function call
closeModal.addEventListener("click", closeModalDown);

//listening for the escape key to close down the modal
document.addEventListener("keydown", function (e) {
  // if the press key is 'Escape' and does not contains the class of hidden
  if (e.key === "Escape" && !modalContainer.classList.contains("hidden")) {
    closeModalDown();
  }
});
