# React State & Props Mental Model

## Props

Props adalah mekanisme parent memberikan data kepada child component.

``` jsx
<NotesCard title="Belajar React" />
```

Props bersifat read-only dari perspektif child.

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

## Mental Model

    Props = data masuk
    State = data milik component
    Setter = cara meminta React mengubah state
    Render = component dijalankan kembali
    Function updater = menghitung state baru berdasarkan state lama
