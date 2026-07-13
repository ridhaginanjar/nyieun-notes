# React Rendering Pipeline

> React bukan mengubah DOM secara langsung. React menghitung UI baru terlebih dahulu, lalu hanya memperbarui bagian DOM yang benar-benar berubah.

---

# 1. Mental Model

```
State
    ↓
Render
    ↓
Virtual DOM
    ↓
Diff (Reconciliation)
    ↓
Update Real DOM
```

---

# 2. Rendering

Render adalah proses menjalankan kembali function component.

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

Setiap render berarti:

- Function dipanggil lagi.
- JSX dibuat lagi.
- Virtual DOM baru dibuat.

**Render ≠ Update DOM**

---

# 3. Kapan Render Terjadi?

Render biasanya terjadi ketika:

- State berubah
- Props berubah
- Parent melakukan render ulang
- Context berubah

---

# 4. Virtual DOM

Virtual DOM adalah representasi UI dalam bentuk JavaScript Object.

Bukan HTML.

Contoh konsep:

```
<App>
    ├── Header
    ├── NotesForm
    └── NotesList
```

Setiap render menghasilkan Virtual DOM baru.

---

# 5. Reconciliation

React membandingkan:

```
Virtual DOM Lama

vs

Virtual DOM Baru
```

Tujuannya:

> Menemukan perubahan sekecil mungkin.

---

# 6. Diffing

React tidak membandingkan seluruh halaman.

React membandingkan node yang berubah.

Misalnya.

Sebelum:

```
Header
Notes (2)
Footer
```

Sesudah:

```
Header
Notes (3)
Footer
```

React mengetahui:

- Header sama
- Footer sama
- Notes berubah

Maka hanya Notes yang perlu diperbarui.

---

# 7. Real DOM Update

Setelah proses diff selesai.

Baru React mengubah Real DOM.

```
State berubah
        ↓
Render
        ↓
Virtual DOM Baru
        ↓
Diff
        ↓
Update DOM yang berubah saja
```

---

# 8. Yang Perlu Diingat

Render bukan berarti browser menggambar ulang seluruh halaman.

Render hanya menghasilkan Virtual DOM baru.

Yang benar-benar diubah hanyalah hasil akhir proses Diff.

---

# 9. Analogi

Bayangkan editor dokumen.

```
Dokumen Lama
        ↓
Dokumen Baru
        ↓
Bandingkan Perubahan
        ↓
Edit bagian yang berbeda saja
```

React melakukan hal yang sama terhadap UI.

---

# 10. Mental Model Browser

Browser berpikir seperti ini.

```
State berubah?

↓

Ya

↓

Jalankan Component lagi

↓

Buat Virtual DOM baru

↓

Bandingkan

↓

Apakah berbeda?

↓

Ya

↓

Update DOM yang berubah
```

---

# 11. Rule of Thumb

❌ Render ≠ Repaint Browser

❌ Render ≠ Update DOM

❌ Render ≠ Seluruh UI berubah

✅ Render = Function Component dijalankan kembali

✅ React membuat Virtual DOM baru

✅ React membandingkan perubahan

✅ React hanya mengubah DOM yang berubah

---

# Kata Kunci

- Render
- Re-render
- State
- Props
- Virtual DOM
- Real DOM
- Reconciliation
- Diffing
- Component Tree
- Root

---

# Yang Harus Diingat

React bekerja dengan pipeline:

```
State

↓

Render

↓

Virtual DOM

↓

Reconciliation

↓

Real DOM
```

Selama memahami pipeline ini, hampir semua perilaku React akan lebih mudah dipahami.