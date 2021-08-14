const renderNotes = (notes) => {
    notesContainer.innerHTML = '';

    notes.forEach(note => {
        const noteCard = document.createElement('p');
        noteCard.classList.add('note-card');
        noteCard.textContent = note.body;
        notesContainer.appendChild(noteCard);
    });
};

const createNote = () => {
    newNoteForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const titleInput = e.target.elements[0];
        const bodyInput = e.target.elements[1];
        notes.push({
            title: titleInput.value,
            body: bodyInput.value
        });
        titleInput.value = '';
        bodyInput.value = '';

        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes(notes, filters);
    });
};