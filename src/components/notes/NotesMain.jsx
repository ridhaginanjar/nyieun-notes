import NotesForm from './NotesForm';
import SearchBar from './SearchBar';
import NotesList from './NotesList';

function NotesMain() {
    return (
        <main className='body-notes'>  
            <NotesForm/>
            <SearchBar/>
            <NotesList/>
        </main>
    )
}

export default NotesMain;