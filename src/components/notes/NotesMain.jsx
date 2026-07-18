import NotesForm from './NotesForm';
import SearchBar from './SearchBar';
import NotesList from './NotesList';
import { useState } from 'react';
import { data } from '../../utils/data';

function NotesMain() {
    // Search
    const [query, setQuery] = useState('');
    const handlingQuery = (e) => {
        setQuery((query) => [
            e.target.value
        ])
    };

    const [currentNotes, setCurrentNotes] = useState(data);

    // Notes Archive and Delete (Actions)
    const handlingActions = (e) => {
        let btn_element = e.currentTarget
        let btn_value = btn_element.getAttribute('value')
        let note_id = btn_element.getAttribute('notes-id') 
        
        if (btn_value == 'delete') {
            let updatedNotes = currentNotes.filter((note) => {
                if (note.id == note_id) {
                    note.isDeleted == false ? (
                            note.isDeleted = true
                        ) :
                        (
                            note.isDeleted = false
                        )
                }
                return note
            })
            setCurrentNotes(updatedNotes)
        } 
        
        if (btn_value == 'archive') {
            let updatedNotes = currentNotes.filter((note) => {
                if (note.id == note_id) {
                    note.isArchived == false ? (
                            note.isArchived = true
                        ) :
                        (
                            note.isArchived = false
                        )
                }
                return note
            })
            setCurrentNotes(updatedNotes)
        }
    }

    return (
        <main className='body-notes'>  
            <NotesForm/>
            <SearchBar handlingQuery={handlingQuery}/>
            <NotesList notes={currentNotes} query={query} handlingActions={handlingActions}/>
        </main>
    )
}

export default NotesMain;