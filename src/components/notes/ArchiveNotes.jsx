import NotesCard from './NotesCard/NotesCard'

function ArchiveNotes() {
    return (
        <section className='notes-group'>
            <header className='notes-group__header'>
                <h3>Archive Notes (2)</h3>
                <p>Stored notes that are out of sight but safe.</p>
            </header>
            <div className='notes-group__item'>
                        <NotesCard/>
                        <NotesCard/>
            </div>
        </section>
    )
}

export default ArchiveNotes;