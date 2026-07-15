# ⚡ React Event Handler: React Event vs Browser Global Event

---

## 🎯 Key Lesson

React secara otomatis mengirimkan sebuah **event object** ke dalam fungsi *event handler* Anda.

### 🔄 Aliran Pemanggilan Fungsi
Ketika Anda menulis kode JSX seperti ini:
```jsx
<input onChange={handleChange} />
```

Di latar belakang, React akan otomatis mengeksekusi fungsi tersebut dengan menyisipkan data aksi:
```js
handleChange(event);
```

### 🛠️ Rekomendasi Penulisan
Oleh karena itu, pastikan fungsi *handler* Anda selalu siap menerima parameter objek tersebut (biasanya disingkat `e` atau `event`):
```js
const handleChange = (e) => {
  console.log(e.target.value);
};
```

---

## ⚠️ Jangan Bergantung pada Global `event`

### 🔍 Kasus yang Harus Dihindari
Potongan kode di bawah ini memang **bisa berjalan** di beberapa kondisi:
```js
const handleChange = () => {
  // ❌ Mengakses variabel 'event' tanpa mendeklarasikannya di parameter
  console.log(event.target.value); 
};
```

### 🛑 Mengapa Ini Berbahaya?
Variabel `event` pada kode di atas berasal dari `window.event` milik browser global, **bukan** objek *SyntheticEvent* resmi dari React. 

Mengandalkan cara ini akan memicu beberapa masalah serius:
* **Bergantung pada Browser Behavior:** Setiap browser memiliki cara berbeda dalam menangani objek global.
* **Sulit Dites (Unstable Testing):** Proses pengujian otomatis (*unit testing*) akan sering eror karena lingkungan tes tidak memiliki objek jendela browser global yang sama.
* **Coupling dengan Environment:** Kode Anda menjadi tidak mandiri karena terikat langsung dengan ekosistem luar (*browser window*).
* **Kurang Jelas Sumber Datanya:** Membingungkan bagi pengembang lain yang membaca kode Anda karena asal-usul variabel tidak diketahui secara eksplisit.

---

## 🏆 Best Practice

Selalu gunakan dan tangkap objek *event* yang secara resmi disediakan oleh sistem internal React:

```js
const handleChange = (e) => {
  const value = e.target.value;
  // Lakukan sesuatu dengan nilai di atas...
};
```

### 📊 Aliran Data (Event Flow)

```text
       🌐 Browser Event
               │
               ▼
    ⚛️ React Event System (SyntheticEvent)
               │
               ▼
     🧩 Component Handler (e)
               │
               ▼
       💾 Update State
```

---

## 🧠 Prinsip Umum Pengembangan

> 💡 **Ingat:** Kode yang sekadar "berjalan (*works*)" belum tentu memiliki desain arsitektur yang benar.

Selalu gunakan lapisan abstraksi (*abstraction layer*) yang sesuai dengan konteks komponen Anda:
1. **React Component Context:** Gunakan API resmi bawaan React (seperti menangkap parameter `e`).
2. **Browser Capability:** Jika terpaksa berinteraksi dengan browser, gunakan browser API secara eksplisit (seperti menuliskan `window.someMethod()` dengan jelas).

**Kesimpulan:** Hindari menulis kode yang bergantung pada perilaku global yang terjadi secara kebetulan atau tidak sengaja.
