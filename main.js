const deleteAllButton = document.querySelector('#delete-all');
const newNoteForm = document.querySelector('#new-note-form');
const notesContainer = document.querySelector('#note-card-container');
const searchBar = document.querySelector('#search-bar');
const newNoteButton = document.querySelector('#add-btn');
const notes = JSON.parse(localStorage.getItem('notes')) || [];
const filters = {
    searchText: ''
};

renderNotes(notes, filters);
createNote();
updateFilters(filters);
deleteAllNotes(notes);
// createTestNotes(notes, filters, 5);