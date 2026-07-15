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

## Callback Props

Parent memberikan function:

``` jsx
<NotesForm onCreateNote={handleCreateNote} />
```

Child memanggil callback ketika event terjadi.

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
