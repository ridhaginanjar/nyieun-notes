import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';
import { useState } from 'react';


function NotesList({notes, query, handlingActions}) {
    const currentQuery = query == '' ? '' : query[0].toLowerCase()
    const currentData = notes.filter((item) => item.title.toLowerCase().includes(currentQuery))

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