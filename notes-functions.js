//Dylan's code starts here
function searchbar() {
    //Get input in searchbar and set it toLowerCase.
    //Get all notecards.
    let input = document.getElementById('search-bar').value
    input=input.toLowerCase();
    let noteCard = document.getElementsByClassName('note-card');

    for (i = 0; i < noteCard.length; i++) { 
        //If notecard HTML doesn't match input, display nothing.
        if (!noteCard[i].innerHTML.toLowerCase().includes(input)) {
            noteCard[i].style.display="none";
        }
        //else display matching items
        else {
            noteCard[i].style.display="item";                 
        }
    }
}
//Grab delete-all id, create event listener.
const deleteNotes = document.querySelector('#delete-all')
deleteNotes.addEventListener('click', function(){
    //change delete-popup id to display block (previous display none to hide)
    const deleteDiv = document.querySelector('#delete-popup');
    deleteDiv.style.display = "block";
    //grab delete-yes button add event listener
    const confirmDelete = document.querySelector('#delete-yes')
    confirmDelete.addEventListener('click',function(){
        //grab all notecards and remove them. 
        const noteCards = document.querySelectorAll('.note-card');
        for (const notecard of noteCards) {
            notecard.remove();
        }
        //reset the pop-up to display none (re-hides the popup)
        deleteDiv.style.display = "none";
    })
    //grab the delete-no id buttom and reset the display style to none to hide the popup.
    const denyDelete = document.querySelector('#delete-no')
    denyDelete.addEventListener('click',function(){
        deleteDiv.style.display = "none";
    })

})
//Dylan's code ends here
//TO DO: 
    //Fix search bar
        //Searchbar is functional, but it doesn't refresh when the bar is cleared. 
        //Need to find a way to have items pop back up when search bar is cleared.
        //Need to maintain background size/color when nothing is found. 
        //Add a "No items found" section?
    //Fix Delete Button
        //Delete button is functional, but it all previous notes repopulate when a new one is enetered. 
        //Need to permanently remove all previous notes.
        //Need to maintain background size/color when notes are deleted.
    //Update CSS
        //Maybe make the notes look more like sticky notes? 
        //Search bar and buttons need some styling.
    //Update HTML Layout
        //Create, Delete, and Search in one flex with their own sections?

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.body.toLowerCase().includes(filters.searchText) || 
        note.title.toLowerCase().includes(filters.searchText);
    });
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

const updateFilters = () =>{
    search.addEventListener('input', (e) =>{
    });
}

//LYNCASTERC'S PREVIOUS COMMENTS: 
//todo: finish updateFilters:
    // I've added an event listener to the searchbar. 
    // It is listening for input and will fire every time user enters anything 
    // into the search bar.

    // Function should update the searchText key value located
    // in the filters object in main.js (line 7)
    // If user types 'groceries' into searchbar, filters.searchText should equal 'groceries', etc
    // User input should be made lowercase for case insensitivity. 
    // You also need to call renderTodos inside the event listener.
    // call updateFilters in main.js when fininshed


//todo: add line in renderNotes() (line 1 in this file) that creates a filteredNotes array that filters the notes array for the notes
    //that includes the searchText in the title OR body.
    // make this case insensitive (toLowerCase)
    // Replace the notes on line 4 of renderNotes with this filteredNotes array so that the function renders the filtered notes in DOM