# React Form and Validation

## 1. Controlled Component

Controlled component berarti React menjadi pemilik nilai input.

Contoh:

``` jsx
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(event) =>
    setTitle(event.target.value)
  }
/>
```

Flow:

    User mengetik
     ↓
    onChange
     ↓
    setState
     ↓
    React render ulang
     ↓
    Input mengikuti state

React adalah source of truth.

------------------------------------------------------------------------

# 2. Kenapa value tanpa onChange menjadi read-only?

Ketika menulis:

``` jsx
<input value={title}/>
```

Anda berkata:

> Nilai input harus mengikuti title.

Namun tidak ada jalur untuk mengubah title.

Akibatnya:

    User mengetik
     ↓
    DOM mencoba berubah
     ↓
    React render ulang
     ↓
    value kembali ke state lama

Input terasa terkunci.

------------------------------------------------------------------------

# 3. Uncontrolled Component

Uncontrolled component membiarkan DOM menjadi pemilik nilai.

Contoh:

``` jsx
const inputRef = useRef();

<input ref={inputRef}/>
```

React membaca nilai ketika diperlukan:

``` javascript
inputRef.current.value
```

Flow:

    User mengetik
     ↓
    DOM menyimpan value
     ↓
    Submit
     ↓
    React membaca

------------------------------------------------------------------------

# 4. Kapan Menggunakan Controlled?

Gunakan controlled ketika React perlu mengetahui nilai setiap saat.

Contoh:

-   character counter;
-   validation realtime;
-   preview;
-   disable button;
-   formatting.

Notes App cocok menggunakan controlled karena:

    title state
     ↓
    remaining character
     ↓
    validation
     ↓
    submit

------------------------------------------------------------------------

# 5. Validation

Validation memastikan data memenuhi aturan aplikasi.

Jenis umum:

## Required

``` javascript
title.trim() !== ""
```

## Length

``` javascript
body.length >= 10
```

## Format

Contoh:

-   email;
-   URL;
-   tanggal.

## Business Rule

Aturan spesifik aplikasi.

Contoh:

    Note yang sudah dihapus tidak dapat diarsipkan.

------------------------------------------------------------------------

# 6. Validation State vs Derived Data

Jangan menyimpan sesuatu yang dapat dihitung.

Hindari:

``` javascript
const [isValid, setIsValid] = useState(false);
```

Jika bisa:

``` javascript
const isValid = body.length >= 10;
```

Namun beberapa informasi memang harus menjadi state.

Contoh:

``` javascript
const [hasSubmitted, setHasSubmitted] = useState(false);
```

Karena status "user sudah mencoba submit" tidak dapat dihitung dari
body.

------------------------------------------------------------------------

# 7. Conditional Rendering

React menggunakan JavaScript expression untuk menentukan UI.

## AND

``` jsx
{error && <p>{error}</p>}
```

Artinya:

    Jika error ada
     ↓
    Render pesan

## OR

``` jsx
{username || "Guest"}
```

Artinya:

    Gunakan username,
    jika kosong gunakan Guest

## Ternary

``` jsx
{
 isLogin
 ? <Dashboard/>
 : <Login/>
}
```

Digunakan ketika ada dua kemungkinan tampilan.

------------------------------------------------------------------------

# Inti Lesson

Form React mengikuti konsep ownership:

Controlled:

    React State
     ↓
    Input

Uncontrolled:

    DOM
     ↓
    React membaca

Validation biasanya adalah kombinasi:

    Input State
     ↓
    Derived Validation
     ↓
    User Feedback
