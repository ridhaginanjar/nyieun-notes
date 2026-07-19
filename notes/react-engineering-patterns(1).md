# React Engineering Patterns

## 1. State Ownership

Pertanyaan utama:

> Siapa yang bertanggung jawab terhadap perubahan data?

Bukan:

> Siapa yang menampilkan data?

Component yang memiliki tanggung jawab perubahan biasanya menjadi state
owner.

------------------------------------------------------------------------

# 2. Derived State

Derived state adalah nilai hasil perhitungan dari state lain.

Contoh:

``` javascript
const remaining = 50 - title.length;
```

Tidak perlu:

``` javascript
const [remaining, setRemaining] = useState(50);
```

Karena dapat menyebabkan data tidak sinkron.

------------------------------------------------------------------------

# 3. Immutability

React bekerja lebih baik ketika state tidak dimutasi langsung.

Hindari:

``` javascript
note.isArchived = true;
```

Karena mengubah object lama.

Gunakan:

``` javascript
{
 ...note,
 isArchived: true
}
```

Membuat object baru.

------------------------------------------------------------------------

# 4. Array Update Pattern

Gunakan method sesuai tujuan.

## map()

Mengubah setiap item:

``` javascript
notes.map(note => updatedNote)
```

## filter()

Memilih atau menghapus item:

``` javascript
notes.filter(note => note.id !== id)
```

## find()

Mencari satu item:

``` javascript
notes.find(note => note.id === id)
```

------------------------------------------------------------------------

# 5. Separation of Concern

Component sebaiknya memiliki tanggung jawab jelas.

Contoh:

NotesCard:

    Menampilkan note
    Melaporkan event

NotesMain:

    Memiliki notes state
    Mengubah notes

------------------------------------------------------------------------

# 6. Coupling

High coupling:

    Child tahu:
    - struktur state parent
    - storage
    - API
    - parsing DOM

Low coupling:

    Child tahu:
    - data yang diterima
    - callback yang tersedia

------------------------------------------------------------------------

# 7. Component API

Component memiliki kontrak.

Contoh:

``` jsx
<NotesCard
 note={note}
 onDelete={handleDelete}
/>
```

Kontrak menjelaskan:

-   data apa yang dibutuhkan;
-   aksi apa yang bisa dilakukan.

------------------------------------------------------------------------

# Inti Lesson

React architecture yang baik:

    Single source of truth
     ↓
    Clear ownership
     ↓
    Explicit props
     ↓
    Predictable state update
     ↓
    Maintainable component
