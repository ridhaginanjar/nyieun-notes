import './styles.css';

function Header() {
    return (
        <section className='header'>
            <h1>Nyieun Notes</h1>
        </section>
    )
}

function Footer() {
    return (
        <div className="footer">
            <h2>&copy; 2026 Nyieun Notes</h2>
        </div>
    )
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

function ActiveNotes() {
    return (
        <section className='active-notes-group'>
                <h3>Active Notes (3)</h3>
                <section className='active-notes__item'>
                    <section className="note-item">
                        <section className="note-item__content">
                            <h4 className="note-item__title">Kapan Indonesia Maju?</h4>
                            <p className="note-item__text">Lorem</p>
                        </section>
                        <section className="note-item__meta">
                            <section className="note-item__date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none">
                                        <rect width="18" height="15" x="3" y="6" stroke="#a1a1a1" stroke-width="2" rx="2" />
                                        <path fill="#a1a1a1" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z" />
                                        <path stroke="#a1a1a1" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
                                    </g>
                                </svg>
                                <p>Friday, 31 July 2026</p>
                            </section>
                            <section className="note-item__actions">
                                <button className='note-item__actions-delete'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#e64e35" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                    </svg>
                                </button>
                                <button className='note-item__actions-archive'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#6b6b6b" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z" />
                                    </svg>

                                </button>
                            </section>
                        </section>
                    </section>
                    <section className="note-item">
                        <section className="note-item__content">
                            <h4 className="note-item__title">Kapan Indonesia Maju?</h4>
                            <p className="note-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                        <section className="note-item__meta">
                            <section className="note-item__date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none">
                                        <rect width="18" height="15" x="3" y="6" stroke="#a1a1a1" stroke-width="2" rx="2" />
                                        <path fill="#a1a1a1" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z" />
                                        <path stroke="#a1a1a1" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
                                    </g>
                                </svg>
                                <p>Friday, 31 July 2026</p>
                            </section>
                            <section className="note-item__actions">
                                <button className='note-item__actions-delete'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#e64e35" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                    </svg>
                                </button>
                                <button className='note-item__actions-archive'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#6b6b6b" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z" />
                                    </svg>

                                </button>
                            </section>
                        </section>
                    </section>
                    <section className="note-item">
                        <section className="note-item__content">
                            <h4 className="note-item__title">Kapan Indonesia Maju?</h4>
                            <p className="note-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                        <section className="note-item__meta">
                            <section className="note-item__date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none">
                                        <rect width="18" height="15" x="3" y="6" stroke="#a1a1a1" stroke-width="2" rx="2" />
                                        <path fill="#a1a1a1" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z" />
                                        <path stroke="#a1a1a1" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
                                    </g>
                                </svg>
                                <p>Friday, 31 July 2026</p>
                            </section>
                            <section className="note-item__actions">
                                <button className='note-item__actions-delete'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#e64e35" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                    </svg>
                                </button>
                                <button className='note-item__actions-archive'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#6b6b6b" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z" />
                                    </svg>

                                </button>
                            </section>
                        </section>
                    </section>
                    <section className="note-item">
                        <section className="note-item__content">
                            <h4 className="note-item__title">Kapan Indonesia Maju?</h4>
                            <p className="note-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>
                        </section>
                        <section className="note-item__meta">
                            <section className="note-item__date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none">
                                        <rect width="18" height="15" x="3" y="6" stroke="#a1a1a1" stroke-width="2" rx="2" />
                                        <path fill="#a1a1a1" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z" />
                                        <path stroke="#a1a1a1" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
                                    </g>
                                </svg>
                                <p>Friday, 31 July 2026</p>
                            </section>
                            <section className="note-item__actions">
                                <button className='note-item__actions-delete'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#e64e35" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                    </svg>
                                </button>
                                <button className='note-item__actions-archive'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="#6b6b6b" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z" />
                                    </svg>

                                </button>
                            </section>
                        </section>
                    </section>
                </section>
        </section>
    )
}

function ArchiveNotes() {
    return (
        <section>
            
        </section>
    )
}


function NotesList() {
    return (
        <>
            <ActiveNotes/>
            <ArchiveNotes/>
        </>
        
    )
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