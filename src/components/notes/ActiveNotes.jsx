import NotesCard from './NotesCard/NotesCard'

function ActiveNotes() {
    return (
        <section className='notes-group'>
            <header className='notes-group__header'>
                <h3>Active Notes (2)</h3>
                <p>Your ongoing thoughts, ideas, and daily reminders.</p>
            </header>
            <div className='notes-group__item'>
                    <NotesCard/>
                    <NotesCard/>
                    <NotesCard/>
            </div>
        </section>
    )
}

export default ActiveNotes;