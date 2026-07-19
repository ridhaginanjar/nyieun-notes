# React Rendering and List Rendering

## 1. Data-Driven UI

React menggunakan pendekatan **declarative UI**. Artinya kita tidak
memberi instruksi manual tentang bagaimana DOM harus berubah, tetapi
mendeskripsikan UI berdasarkan data saat ini.

Mental model:

    Data
     ↓
    Transformasi data
     ↓
    React Element
     ↓
    Virtual DOM
     ↓
    Real DOM

Contoh:

``` jsx
const notes = [
  { id: 1, title: "React" },
  { id: 2, title: "CSS" }
];
```

Data tersebut dapat diubah menjadi:

``` jsx
notes.map(note => (
  <NotesCard note={note}/>
))
```

Jadi perubahan UI biasanya berasal dari perubahan data, bukan manipulasi
DOM langsung.

------------------------------------------------------------------------

# 2. Kenapa React Banyak Menggunakan map()

`map()` bukan fitur React. Ini adalah JavaScript array method.

Fungsinya:

> Mengubah setiap item dalam array menjadi bentuk baru.

Contoh biasa:

``` javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);
```

Hasil:

``` javascript
[2, 4, 6]
```

Dalam React:

``` javascript
notes.map(note => <NotesCard note={note}/>)
```

Array data:

    note
    note
    note

diubah menjadi:

    React Element
    React Element
    React Element

Karena itu `map()` sangat cocok untuk rendering list.

------------------------------------------------------------------------

# 3. for vs map

`for` bukan berarti tidak boleh digunakan di React.

Gunakan `for` ketika melakukan proses algoritma.

Contoh:

``` javascript
let total = 0;

for (const item of cart) {
  total += item.price;
}
```

Tujuannya:

    melakukan proses

Sedangkan `map()`:

``` javascript
notes.map(note => transform(note))
```

Tujuannya:

    mengubah setiap data menjadi bentuk baru

Dalam React, bentuk baru tersebut sering berupa UI.

------------------------------------------------------------------------

# 4. forEach vs map

`forEach()` hanya menjalankan fungsi.

``` javascript
notes.forEach(note => {
  console.log(note);
});
```

Tidak menghasilkan array baru.

Sedangkan:

``` javascript
notes.map(note => {
  return <NotesCard note={note}/>;
});
```

menghasilkan array baru.

React membutuhkan hasil transformasi tersebut untuk membangun UI.

------------------------------------------------------------------------

# 5. key pada React List

Ketika React melakukan render ulang, React perlu mengetahui:

> Item lama ini sama dengan item baru yang mana?

Contoh:

Data awal:

    1 React
    2 CSS
    3 SQL

Kemudian:

    1 React
    3 SQL

React perlu tahu bahwa SQL tetap SQL, bukan item baru.

Karena itu digunakan:

``` jsx
<NotesCard key={note.id}/>
```

`key` adalah identitas internal React.

------------------------------------------------------------------------

# 6. key bukan props

Contoh:

``` jsx
<NotesCard
  key={note.id}
  title={note.title}
/>
```

`key` tidak masuk ke:

``` jsx
function NotesCard(props)
```

Karena React menggunakan key sebelum component menerima props.

Jika component membutuhkan id:

``` jsx
<NotesCard
  key={note.id}
  noteId={note.id}
/>
```

`key` dan `noteId` memiliki tujuan berbeda.

------------------------------------------------------------------------

# 7. Kenapa Hindari Index sebagai key?

Contoh:

``` jsx
notes.map((note, index) => (
  <Card key={index}/>
))
```

Ini bermasalah jika list berubah.

Misalnya:

Awal:

    0 React
    1 CSS
    2 SQL

Hapus React:

    0 CSS
    1 SQL

React dapat salah menganggap:

    index 0 = component lama React

Padahal sekarang CSS.

Gunakan identifier stabil:

``` jsx
key={note.id}
```

------------------------------------------------------------------------

# Inti Lesson

React berpikir:

    Data berubah
     ↓
    UI representation berubah
     ↓
    React melakukan reconciliation

`map()` membantu membuat UI dari data.

`key` membantu React memahami identitas item ketika UI berubah.
