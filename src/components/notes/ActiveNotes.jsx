import NotesCard from './NotesCard/NotesCard'
import { convertToDate } from '../../utils/utils'

function ActiveNotes({activeData, actionsHandler}) {
    const lengthActiveData = activeData.length
    const isExists = lengthActiveData > 0;
    return (
        <section className='notes-group'>
            <header className='notes-group__header'>
                <h3>Active Notes ({lengthActiveData})</h3>
            </header>
            <div className='notes-group__item'>
                {
                    !isExists ? (
                        <p style={{marignLeft: "auto"}}>Tidak ada catatan</p>
                    ) : (
                        activeData.map(acd => {
                        let createdDate = convertToDate(acd.createdAt)
                        return (
                            <NotesCard 
                                key={acd.id}
                                notesId={acd.id} 
                                title={acd.title} 
                                text={acd.text}
                                date={createdDate}
                                isArchived={acd.isArchived}
                                isDeleted= {acd.isDeleted}
                                actionsHandler={actionsHandler}
                            />
                        )
                    })
                    )
                }
            </div>
        </section>
    )
}

export default ActiveNotes;