import NotesForm from './NotesForm';
import SearchBar from './SearchBar';
import NotesList from './NotesList';
import { useState } from 'react';

function NotesMain() {
    const [query, setQuery] = useState('');

    const handlingQuery = (event) => {
        // setQuery((query) => [
        //     e.target.value
        // ])
        console.log(event)
    };

    return (
        <main className='body-notes'>  
            <NotesForm/>
            <SearchBar handlingQuery={handlingQuery}/>
            <NotesList/>
        </main>
    )
}

export default NotesMain;