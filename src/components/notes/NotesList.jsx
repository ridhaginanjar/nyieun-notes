import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';
import { useState } from 'react';


function NotesList({data, query}) {
    const currentQuery = query == '' ? '' : query[0].toLowerCase()
    const currentData = data.filter((item) => item.title.toLowerCase().includes(currentQuery))

    const activeData = currentData.filter((item) => item.isArchived == false)
    const archiveData = currentData.filter((item) => item.isArchived == true)

    const [delete_, setDelete_] = useState('');
    const [archive, setArchive] = useState('');

    const handlingDelete = (e) => {
        console.log(e)
    }

    const handlingArchive = (e) => {
        console.log(e)
    }

    return (
        <>
            <ActiveNotes activeData={activeData} deleteHandler = {handlingDelete} archiveHandler = {handlingArchive}/>
            <ArchiveNotes archiveData={archiveData} deleteHandler = {handlingDelete} archiveHandler = {handlingArchive}/>
        </>
        
    )
}

export default NotesList;