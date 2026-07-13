# HTML Wrapper Principle

> Sebuah wrapper (`div`, `section`, `article`, dll.) boleh dibuat selama ia memiliki tanggung jawab (*responsibility*) yang jelas.

Jangan menilai wrapper dari jumlah *child* yang dimilikinya. Nilailah dari alasan keberadaannya.

---

## Wrapper yang Baik

Wrapper yang baik memiliki minimal satu dari tanggung jawab berikut:

### 1. Layout
Digunakan untuk mengatur tata letak dan posisi elemen.
* `width` / `max-width`
* `display: flex` / `display: grid`
* `gap`
* `alignment`

```html
<section class="notes-form">
    <!-- Konten form di sini -->
</section>
```

### 2. Visual
Digunakan untuk memberikan estetika dan gaya visual pada area tertentu.
* `background`
* `border` / `border-radius`
* `padding`
* `shadow`

```html
<div class="card">
    <!-- Konten kartu di sini -->
</div>
```

### 3. Semantic
Membantu browser, mesin pencari, dan developer memahami struktur halaman.
* `<main>` / `<nav>`
* `<header>` / `<footer>`
* `<section>` / `<article>`

### 4. Behavior
Menjadi batas atau pemicu untuk sebuah perilaku interaksi UI.
* `animation` / `transition`
* `collapse` / `expand`
* `drag & drop`

---

## Wrapper yang Kurang Baik

Wrapper dikategorikan kurang baik jika dibuat hanya karena alasan berikut:
* Supaya CSS terasa lebih mudah secara instan.
* Hanya untuk memberikan `margin`.
* "Supaya nanti mungkin dipakai" (antisipasi berlebihan).

**Contoh Buruk:**
```html
<div>
    <div>
        <div>
            <h2>Hello</h2>
        </div>
    </div>
</div>
```
*Masalah: Tidak jelas komponen mana yang bertanggung jawab terhadap apa.*

---

## Golden Rule: Penamaan Berdasarkan Konsep UI

> **Beri nama wrapper berdasarkan konsep UI, bukan berdasarkan tag HTML atau tampilannya.**

**❌ Kurang Baik:**
```html
<div class="wrapper">
    <div class="container">
        <div class="box">
            <!-- Developer baru tidak akan paham fungsi masing-masing wrapper -->
        </div>
    </div>
</div>
```

**✅ Jauh Lebih Baik:**
```html
<section class="notes-form">
    <div class="notes-form__content">
        ...
    </div>
</section>
```
atau
```html
<article class="note-card">
    <header class="note-card__header">
        ...
    </header>
    <footer class="note-card__actions">
        ...
    </footer>
</article>
```
*Keuntungan: Begitu membaca nama class, developer lain langsung memahami konsep UI yang sedang dibangun.*

---

## Rule of Thumb untuk Pembuatan Wrapper

Sebelum membuat wrapper baru, tanyakan pada diri Anda:
> *"Kalau saya menghapus wrapper ini, apa yang hilang?"*

* **Jika jawabannya "Tidak ada":** ↓  
  Wrapper kemungkinan besar tidak diperlukan. Jangan dibuat.
* **Jika jawabannya Layout rusak / Background hilang / Semantic hilang / Animasi mati:** ↓  
  Wrapper memang memiliki tanggung jawab. Silakan dibuat.

---

## Mental Model dalam Code Review

Saat melakukan *code review* (terutama ketika proyek komponen seperti React mulai membesar), gunakan satu pertanyaan kunci ini:

> **"Apakah elemen ini ada karena aplikasi membutuhkannya, atau karena CSS membutuhkannya?"**

* **Aplikasi membutuhkannya:** (Contoh: panel, *card*, *toolbar*, *header*, *sidebar*)  
  ➔ Struktur HTML berada di jalur yang benar.
* **Karena CSS membutuhkannya (akibat bingung mengatur layout):**  
  ➔ Desain ulang struktur layout-nya terlebih dahulu sebelum menulis HTML.

### Kesimpulan Ringkas:
* ❌ **Jangan** menghitung jumlah *child*.
* ✅ **Hitung** jumlah tanggung jawab (*responsibility*).

Wrapper dengan 1 *child* bisa sangat baik jika fungsinya jelas. Sebaliknya, wrapper dengan 10 *child* bisa sangat buruk jika tanpa arah.
