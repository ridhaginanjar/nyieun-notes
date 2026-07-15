function SearchBar() {
    return (
        <search className='searchBar'>
            <label htmlFor="searchNotes">Find your notes</label>
            <input type="search" name="searchNotes" id="searchNotes" placeholder="What are you looking for?"/>
        </search>
    )
}

export default SearchBar;