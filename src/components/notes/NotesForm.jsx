import { useState } from "react";

function NotesForm() {
    const [title, setTitle] = useState('');

    const maxChar = 50;
    const remainingChar = maxChar - title.length

    return (
        <section className="notes-form">
            <div className="notes-form__content">
                <h2>What's on your mind?</h2>
                <p>Remaining Title Characters: {remainingChar}</p>
            </div>
            <form action="" className='notes-form__form'>
                <input onChange={(event) => setTitle(event.target.value)} type="text" name="title" placeholder="Tell me the topics" id="form-title" />
                <textarea name="body" id="form-body" placeholder="What are you thinking about?"></textarea>

                <button type="submit">Create</button>
            </form>
        </section>
    );
}

export default NotesForm;