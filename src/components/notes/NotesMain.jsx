import NotesForm from './NotesForm';
import SearchBar from './SearchBar';
import NotesList from './NotesList';
import { useState } from 'react';
import { data } from '../../utils/data';

function NotesMain() {
    // Search
    const [query, setQuery] = useState('');
    const handlingQuery = (e) => {
        setQuery((query) => [
            e.target.value
        ])
    };

    return (
        <main className='body-notes'>  
            <NotesForm/>
            <SearchBar handlingQuery={handlingQuery}/>
            <NotesList data={data} query={query}/>
        </main>
    )
}

export default NotesMain;