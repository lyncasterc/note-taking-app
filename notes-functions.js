const renderNotes = (notes, filters) => {
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

//todo: finish updateFilters:
    // I've added an event listener to the searchbar. 
    // It is listening for input and will fire every time user enters anything 
    // into the search bar.

    // Function should update the searchText key value located
    // in the filters object in main.js (line 7)
    // If user types 'groceries' into searchbar, filters.searchText should equal 'groceries', etc
    // User input should be made lowercase for case insensitivity. 
    // You also need to call renderTodos inside the event listener.
    //  call updateFilters in main.js when fininshed


//todo: add line in renderNotes() (line 1 in this file) that creates a filteredNotes array that filters the notes array for the notes that includes the searchText in the title OR body.
    // make this case insensitive (toLowerCase)
    // Replace the notes on line 4 of renderNotes with this filteredNotes array so that the function renders the filtered notes in DOM

const updateFilters = () =>{
    search.addEventListener('input', (e) =>{
    });
}