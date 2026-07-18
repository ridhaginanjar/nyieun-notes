import NotesCardContent from "./NotesCardContent";
import NotesCardDates from "./NotesCardDates";


function NotesCard({ notesId, title, text, date, isArchived, isDeleted, actionsHandler}) {
    return (
        <article className="note-item">
            <NotesCardContent title={title} text={text}/>
            <div className="note-item__meta">
                <NotesCardDates date={date}/>
                <div className="note-item__actions">
                    <button className='note-item__actions-delete' onClick={actionsHandler} value={'delete'} notes-id={notesId}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="#e64e35" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                    </button>
                    <button className='note-item__actions-archive' onClick={actionsHandler} value={'archive'} notes-id={notesId}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="#6b6b6b" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default NotesCard;