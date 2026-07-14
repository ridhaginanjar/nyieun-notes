export function saveNotes(notes) {
    /*
    Notes Structure:
    {
        'id': uuid,
        'title': string,
        'teks': string,
        'deadline': datetime,
        'isArchived': boolean,
        'createdAt': datetime,
        'updatedAt': datetime
    }
    */
    return localStorage.setItem('notes', JSON.stringify(notes));
}

export function readNotes() {
    return JSON.stringify(localStorage.getItem('notes') || []);
}