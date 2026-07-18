import NotesCard from './NotesCard/NotesCard'
import { convertToDate } from '../../utils/utils'

function ArchiveNotes({archiveData, actionsHandler}) {
    const lengthArchiveData = archiveData.length
    return (
        <section className='notes-group'>
            <header className='notes-group__header'>
                <h3>Archive Notes ({lengthArchiveData})</h3>
                <p>Stored notes that are out of sight but safe.</p>
            </header>
            <div className='notes-group__item'>
                {
                    archiveData.map(ard => {
                        let createdDate = convertToDate(ard.createdAt);
                        return (
                            <NotesCard 
                                key={ard.id}
                                notesId={ard.id} 
                                title={ard.title} 
                                text={ard.text}
                                date={createdDate}
                                isArchived={ard.isArchived}
                                isDeleted= {ard.isDeleted}
                                actionsHandler={actionsHandler}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ArchiveNotes;