function NotesCardContent({title, text}) {
    return (
        <div className="note-item__content">
            <h4 className="note-item__title">{ title }</h4>
            <p className="note-item__text">{ text }</p>
        </div>
    )
}

export default NotesCardContent;