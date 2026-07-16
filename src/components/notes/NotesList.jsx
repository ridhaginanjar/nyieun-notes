import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';


function NotesList({data, query}) {
    const currentQuery = query == '' ? '' : query[0].toLowerCase()
    const currentData = data.filter((item) => item.title.toLowerCase().includes(currentQuery))

    const activeData = currentData.filter((item) => item.isArchived == false)
    const archiveData = currentData.filter((item) => item.isArchived == true)

    return (
        <>
            <ActiveNotes activeData={activeData}/>
            <ArchiveNotes archiveData={archiveData}/>
        </>
        
    )
}

export default NotesList;