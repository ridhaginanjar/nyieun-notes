import './styles/styles.css';
import { saveNotes, readNotes } from './utils/utils';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import NotesMain from './components/notes/NotesMain';

export default function App ({name}) {
    return (
        <>
            <Header />
            <NotesMain/>
            <Footer />
        </>
    );
}