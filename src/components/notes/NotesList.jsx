import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';
import { useState } from 'react';


function NotesList({data, query}) {
    const [currentNotes, setCurrentNotes] = useState(data);

    const currentQuery = query == '' ? '' : query[0].toLowerCase()
    const currentData = data.filter((item) => item.title.toLowerCase().includes(currentQuery))

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

    const activeData = currentData.filter((item) => item.isArchived == false && item.isDeleted == false)
    const archiveData = currentData.filter((item) => item.isArchived == true && item.isDeleted == false)

    return (
        <>
            <ActiveNotes activeData={activeData} actionsHandler = {handlingActions}/>
            <ArchiveNotes archiveData={archiveData} actionsHandler = {handlingActions}/>
        </>
        
    )
}

export default NotesList;