//Dylan's code starts here
// function searchbar() {
//     //Get input in searchbar and set it toLowerCase.
//     //Get all notecards.
//     let input = document.getElementById('search-bar').value
//     input=input.toLowerCase();
//     let noteCard = document.getElementsByClassName('note-card');

//     for (i = 0; i < noteCard.length; i++) { 
//         //If notecard HTML doesn't match input, display nothing.
//         if (!noteCard[i].innerHTML.toLowerCase().includes(input)) {
//             noteCard[i].style.display="none";
//         }
//         //else display matching items
//         else {
//             noteCard[i].style.display="item";                 
//         }
//     }
// }

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
    
    // display message if no notes are found, else render the filtered notes
    if(filteredNotes.length === 0){
        notesContainer.textContent = 'No notes found.';
    } else {
        filteredNotes.forEach(note => {
            const noteCard = document.createElement('div');
            const noteTitle = document.createElement('h2');
            const noteBody = document.createElement('p');

            noteCard.classList.add('note-card');
            noteTitle.classList.add('note-title');
            noteBody.classList.add('note-body');
            noteTitle.textContent = note.title;
            noteBody.textContent = note.body;

            noteCard.appendChild(noteTitle);
            noteCard.appendChild(noteBody);
            notesContainer.appendChild(noteCard);
        });
    }
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

const updateFilters = (filters) =>{
    searchBar.addEventListener('input', (e) =>{
        filters.searchText = e.target.value.toLowerCase();
        renderNotes(notes, filters);
    });
}
