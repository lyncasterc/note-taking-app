//Grab delete-all id, create event listener.
const deleteAllNotes = (notes) => {
    deleteAllButton.addEventListener('click', function(){
        //change delete-popup id to display block (previous display none to hide)
        const deleteDiv = document.querySelector('#delete-popup');
        deleteDiv.style.display = "block";
        //grab delete-yes button add event listener
        const confirmDelete = document.querySelector('#delete-yes')
        confirmDelete.addEventListener('click', function(){
            notes = []; //clearing the notes array
            localStorage.setItem('notes', JSON.stringify(notes)); // saving notes array to storage
            location.reload(); // reloading the page, which rerenders all the notes.

            //reset the pop-up to display none (re-hides the popup)
            deleteDiv.style.display = "none";
        })
        //grab the delete-no id buttom and reset the display style to none to hide the popup.
        const denyDelete = document.querySelector('#delete-no')
        denyDelete.addEventListener('click', function() {
            deleteDiv.style.display = "none";
        })
    })
}; 

const generateNoteDOM = () =>{
    const noteCard = document.createElement('div');
    const noteTitle = document.createElement('h2');
    const noteBody = document.createElement('p');

    noteCard.classList.add('note-card');
    noteTitle.classList.add('note-title');
    noteBody.classList.add('note-body');

    noteCard.appendChild(noteTitle);
    noteCard.appendChild(noteBody);

    return noteCard;
};


const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.body.toLowerCase().includes(filters.searchText) || 
        note.title.toLowerCase().includes(filters.searchText);
    });
    notesContainer.childNodes.forEach(note => {
        if(note.id !== 'new-note-btn'){
            note.remove();
        }
    });
    
    // display message if no notes are found, else render the filtered notes
    if(filteredNotes.length === 0 && searchBar.value !== ''){
        notesContainer.textContent = 'No notes found.';
    } else {
        filteredNotes.forEach(note => {
            const noteCard = generateNoteDOM();
            noteCard.firstChild.textContent = note.title;
            noteCard.lastChild.textContent = note.body;
            notesContainer.appendChild(noteCard);
        });
    }
};

const createNote = () => {
    newNoteButton.addEventListener('click', (e) =>{
        newNoteButton.style.display = 'none';
        newNoteForm.style.display = 'block';
    });

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
        newNoteButton.style.display = 'inline';
        newNoteForm.style.display = 'none';
        renderNotes(notes, filters);
    });
};

const updateFilters = (filters) =>{
    searchBar.addEventListener('input', (e) =>{
        filters.searchText = e.target.value.toLowerCase();
        renderNotes(notes, filters);
    });
}

// Helper function to create test notes to check styling
    // createTestNotes(notes, filters, 10) => renders 10 notes in DOM
    // Call in main.js as last function call
const createTestNotes = (notes, filters, num) => {
    for (let index = 0; index < num; index++) {
        notes.push({
            title: 'test',
            body: 'test'
        });
    
    }
    renderNotes(notes, filters);
}