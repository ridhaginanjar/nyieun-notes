import NotesCard from './NotesCard/NotesCard'
import { convertToDate } from '../../utils/utils'

function ActiveNotes({activeData}) {
    const lengthActiveData = activeData.length
    return (
        <section className='notes-group'>
            <header className='notes-group__header'>
                <h3>Active Notes ({lengthActiveData})</h3>
                <p>Your ongoing thoughts, ideas, and daily reminders.</p>
            </header>
            <div className='notes-group__item'>
                {
                    activeData.map(acd => {
                        let createdDate = convertToDate(acd.createdAt)
                        return (
                            <NotesCard 
                            key={acd.id}
                            notesId={acd.id} 
                            title={acd.title} 
                            text={acd.text}
                            date={createdDate}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ActiveNotes;