export function saveNotes(notes) {
    /*
    Notes Structure:
    {
        'id': uuid,
        'title': string,
        'teks': string,
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

export function convertToDate(timestamp) {
    const date = new Date(timestamp);

    const format = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }

    const convertedDate = date.toLocaleDateString('en-US', format)

    return convertedDate
}