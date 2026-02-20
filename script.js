// script.js

// Functionality for photo uploads
function uploadPhoto(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        document.body.appendChild(img);
    };
    reader.readAsDataURL(file);
}

// Love notes management with local storage
function saveLoveNote(note) {
    const notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    notes.push(note);
    localStorage.setItem('loveNotes', JSON.stringify(notes));
}

function displayLoveNotes() {
    const notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.textContent = note;
        document.body.appendChild(noteElement);
    });
}

// Interactive feature: form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    uploadPhoto(fileInput.files[0]);
});

// Call to display love notes on load
window.onload = displayLoveNotes;
