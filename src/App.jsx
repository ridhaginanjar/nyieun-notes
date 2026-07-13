import './styles.css';

function Header() {
    return <h1>Nyieun Notes</h1>
}

function Footer() {
    return <h1>&copy; 2026 Nyeiun Notes</h1>
}

function NotesForm() {
    return (
        <section className="notes-form">
            <div className="notes-form__content">
                <h2>What's on your mind?</h2>
                <p>Remaining Title Characters: 50</p>
            </div>
            <form action="">
                <input type="text" name="title" placeholder="Tell me the topics" id="form-title" />
                <textarea name="body" id="form-body" placeholder="What are you thinking about?"></textarea>

                <button type="submit">Create</button>
            </form>
        </section>
    );
}

function NotesList() {
    return <h1>NotesList</h1>
}

export default function App ({name}) {
    return (
        <>
            <Header />
            <NotesForm />
            <NotesList />
            <Footer />
        </>
    );
}