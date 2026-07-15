# React State & Props Mental Model

## Props

Props adalah mekanisme parent memberikan data kepada child component.

``` jsx
<NotesCard title="Belajar React" />
```

Props bersifat read-only dari perspektif child.
Bukan berarti data tidak bisa berubah.

Parent tetap dapat memberikan nilai baru.

## State vs Variable biasa

Variable biasa:
```
let count = 0;

Jika berubah:

count berubah

↓

React tidak tahu
```

State:

```
const [count, setCount] = useState(0);
```

Jika berubah:
```
setCount()

↓

React diberitahu

↓

Render ulang
```

## Local Variable vs State

Local variable:
```
Milik function execution

↓

Hilang setelah render selesai

State:

Disimpan React

↓

Bertahan antar render
```

Contoh:
```
function Counter() {
    let count = 0;
}
```

Setiap render membuat variable baru.

## State

State adalah data yang dimiliki component, disimpan oleh React, dan
dapat berubah selama component hidup.

``` jsx
const [count, setCount] = useState(0);
```

## Setter Function

Setter menerima nilai langsung:

``` jsx
setCount(10);
```

atau function updater:

``` jsx
setCount(previous => previous + 1);
```

Function updater menerima state terbaru dari React sebagai parameter.

Setter menerima dua bentuk:
```
Direct value
setCount(10);
```

Artinya: Ganti state menjadi 10

Function updater
```
setCount(
    previous => previous + 1
);
```

Artinya:
```
React,
ambil state terbaru,
jalankan function ini,
gunakan hasilnya sebagai state baru.
```

## Function Updater

Function updater adalah function yang diberikan kepada setter.

Contoh:
```
setCount(
    previousCount => previousCount + 1
);
```
Equivalent:
```
setCount(function(previousCount){
    return previousCount + 1;
});
```
previousCount bukan keyword React.

Dia hanya parameter function.

Bisa ditulis:
```
x => x + 1
```
atau:
```
oldValue => oldValue + 1
```

## Render

Render React bukan refresh browser.

    State berubah
    ↓
    Setter dipanggil
    ↓
    React render ulang component
    ↓
    Virtual DOM dibandingkan
    ↓
    DOM diperbarui jika perlu

## Snapshot Render

Ketika:
```
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```
Ketiga update membaca snapshot yang sama.

Misalnya:
```
count = 0
```
Maka:
```
setCount(1)
setCount(1)
setCount(1)
```
Hasil:
```
1
```
Dengan updater:
```
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```
React memproses:
```
0 → 1
1 → 2
2 → 3
```
Hasil:
```
3
```
## Render dan Re-render

Render React bukan browser refresh.
```
Browser Refresh
Refresh halaman

↓

Download ulang aplikasi

↓

React dibuat ulang
React Re-render
State berubah

↓

Component function dijalankan kembali

↓

JSX baru dibuat

↓

Virtual DOM dibandingkan

↓

DOM diperbarui jika perlu
```

Render berarti:

```
Component function dipanggil kembali
```

Bukan:
```
Seluruh halaman reload
```

## Mental Model

    Props = data masuk
    State = data milik component
    Setter = cara meminta React mengubah state
    Render = component dijalankan kembali
    Function updater = menghitung state baru berdasarkan state lama
