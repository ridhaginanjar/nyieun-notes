function SearchBar({ handlingQuery }) {
    return (
        <search className='searchBar'>
            <label htmlFor="searchNotes">Find your notes</label>
            <input onChange={ handlingQuery } type="search" name="searchNotes" id="searchNotes" placeholder="What are you looking for?"/>
        </search>
    )
}

export default SearchBar;