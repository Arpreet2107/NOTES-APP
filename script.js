document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('addNote');
    const noteTextArea = document.getElementById('noteText');
    const notesContainer = document.getElementById('notesContainer');

    addNoteButton.addEventListener('click', () => {
        const noteText = noteTextArea.value.trim();
        if (noteText === '') {
            alert('Please write a note before adding.');
            return;
        }

        // Create new note element
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <p>${noteText}</p>
            <button class="deleteNote">Delete</button>
        `;

        // Append new note to notes container
        notesContainer.appendChild(noteElement);

        // Clear the textarea
        noteTextArea.value = '';

        // Add event listener to the delete button
        noteElement.querySelector('.deleteNote').addEventListener('click', () => {
            notesContainer.removeChild(noteElement);
        });
    });
});
