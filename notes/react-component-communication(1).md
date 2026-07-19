# React Component Communication

## 1. One Way Data Flow

React menggunakan aliran data satu arah.

Data turun:

    Parent
     ↓
    Props
     ↓
    Child

Event naik:

    Child
     ↓
    Callback
     ↓
    Parent

------------------------------------------------------------------------

# 2. Callback Props

Child tidak mengubah state parent secara langsung.

Parent memberikan function:

``` jsx
<NotesForm
  onCreateNote={handleCreateNote}
/>
```

Child memanggil:

``` javascript
onCreateNote(note)
```

Parent yang menentukan bagaimana data diproses.

------------------------------------------------------------------------

# 3. Kenapa Tidak Menggunakan DOM Attribute?

Pendekatan seperti:

``` jsx
<button
 value="delete"
 notes-id={id}
/>
```

lalu membaca:

``` javascript
event.currentTarget.getAttribute()
```

memiliki masalah:

-   bergantung pada struktur DOM;
-   menggunakan string sebagai kontrak;
-   logic tersembunyi dalam parsing attribute.

------------------------------------------------------------------------

# 4. Explicit Component API

Lebih baik:

``` jsx
<NotesCard
 note={note}
 onDelete={handleDelete}
/>
```

Component API menjadi jelas.

Input:

    note

Kemampuan:

    onDelete

Component tidak perlu tahu:

-   state disimpan dimana;
-   data berasal dari API;
-   bagaimana persistence dilakukan.

------------------------------------------------------------------------

# 5. Function sebagai Value

JavaScript dapat menyimpan function:

``` javascript
const action = () => {};
```

Function dapat dikirim sebagai argument.

React memanfaatkan ini:

``` jsx
<button onClick={action}/>
```

------------------------------------------------------------------------

# 6. Inline Callback

Contoh:

``` jsx
<button
 onClick={() => onDelete(note.id)}
>
```

Bukan berarti langsung menjalankan delete.

React menerima function:

``` javascript
function(){
  onDelete(note.id)
}
```

Function tersebut dijalankan ketika klik terjadi.

------------------------------------------------------------------------

# Inti Lesson

Component yang baik memiliki kontrak jelas:

    Data masuk melalui props

    Event keluar melalui callback

Component tidak perlu mengetahui detail implementasi parent.
