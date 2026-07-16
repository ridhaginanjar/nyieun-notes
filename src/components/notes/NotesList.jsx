import ActiveNotes from './ActiveNotes';
import ArchiveNotes from './ArchiveNotes';


function NotesList({data}) {
    const activeData = data.filter((d) => d.isArchived == false)
    const archiveData = data.filter((d) => d.isArchived == true)

    return (
        <>
            <ActiveNotes activeData={activeData}/>
            <ArchiveNotes archiveData={archiveData}/>
        </>
        
    )
}

export default NotesList;