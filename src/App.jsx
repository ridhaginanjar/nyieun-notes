function Header() {
    return <h1>Header</h1>
}

function Footer() {
    return <h1>Footer</h1>
}

function NotesForm() {
    return <h1>NotesForm</h1>
}

function NotesList() {
    return <h1>NotesList</h1>
}

export default function App ({name}) {
    return (
        <>
            <Header />
            <h1>Hello {name}</h1>
            <NotesForm />
            <NotesList />
            <Footer />
        </>
    );
}