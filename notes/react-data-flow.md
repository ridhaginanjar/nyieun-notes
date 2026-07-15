# React Data Flow Mental Model

## One Way Data Flow

    Parent
     ↓
    Props
     ↓
    Child

Event bergerak melalui callback:

    Child
     ↓
    Callback
     ↓
    Parent

## State Ownership

Pertanyaan utama:

> Siapa yang memiliki tanggung jawab terhadap perubahan data?

Jika sibling membutuhkan data yang sama, naikkan state ke common parent.

## Parent Menyembunyikan Detail Implementasi

Jangan langsung memberikan setter:
```
<SearchBar setQuery={setQuery}/>
```
Lebih baik:
```
<SearchBar
    onSearchChange={handleSearchChange}
/>
```

Karena child tidak perlu tahu:
```
bagaimana state disimpan;
apakah ada validasi;
apakah ada analytics;
apakah ada API request.
```
Child mengetahui:
```
Saya bisa melaporkan perubahan.
```
Bukan:
```
Saya tahu bagaimana aplikasi bekerja.
```

## Callback Props

Parent memberikan function:

``` jsx
<NotesForm onCreateNote={handleCreateNote} />
```

Child memanggil callback ketika event terjadi.

Child:
```
function NotesForm({onCreateNote}) {

    onCreateNote(newNote);

}
```

Flow:
```
Child

↓

Callback function

↓

Parent update state
```

## Controlled Component

    State
     ↓
    Input
     ↓
    User event
     ↓
    State update

## Uncontrolled Component

    User mengetik
     ↓
    DOM menyimpan value
     ↓
    Submit
     ↓
    React membaca data

## Rule of Thumb

Gunakan controlled jika:
```
butuh validasi realtime;
butuh preview;
butuh derived data.
```
Gunakan uncontrolled jika:
```
hanya perlu membaca data saat submit.
```