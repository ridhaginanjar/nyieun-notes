import { useState } from "react";

function NotesForm({handlingForm}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const maxChar = 50;
    const remainingChar = maxChar - title.length

    return (
        <section className="notes-form">
            <div className="notes-form__content">
                <h2>What's on your mind?</h2>
                <p>Remaining Title Characters: {remainingChar}</p>
            </div>
            <form action="" className='notes-form__form' onSubmit={(e) => handlingForm(e, title, setTitle, body, setBody)}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Tell me the topics" id="form-title" />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} name="body" id="form-body" placeholder="What are you thinking about?"></textarea>

                <button type="submit">Create</button>
            </form>
        </section>
    );
}

export default NotesForm;