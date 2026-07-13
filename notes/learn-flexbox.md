# Flexbox Mental Model

> Jangan berpikir "mengatur posisi". Berpikirlah seperti browser yang sedang membagi ruang.

---

# 1. Flexbox = Space Distribution

Flexbox selalu bekerja dengan ruang (space) yang dimiliki parent.

```
Parent (Flex Container)
        │
        ▼
Hitung ukuran child
        │
        ▼
Masih ada ruang?
        │
        ├── Ya  → Grow
        └── Tidak → Shrink
```

---

# 2. Browser Algorithm

Urutan yang dilakukan browser:

```
1. Tentukan ukuran awal (flex-basis)
        ↓
2. Hitung total ukuran semua item
        ↓
3. Hitung sisa ruang
        ↓
4a. Ada ruang kosong → flex-grow
atau
4b. Ruang kurang → flex-shrink
```

---

# 3. flex-basis

> "Ukuran awal saya sebelum Flexbox menghitung."

```css
.item {
    flex-basis: 200px;
}
```

Bukan ukuran akhir.

---

# 4. flex-grow

> "Kalau masih ada ruang kosong, saya bersedia membesar."

```css
.item {
    flex-grow: 1;
}
```

Contoh:

Container = 600px

```
A basis = 200
B basis = 100

Total = 300

Free Space = 300
```

Jika:

```
A grow = 1
B grow = 1
```

Browser membagi:

```
A +150
B +150
```

Ukuran akhir:

```
A = 350
B = 250
```

---

# 5. flex-shrink

> "Kalau ruang kurang, saya bersedia mengecil."

Container = 250px

```
A basis = 200
B basis = 100

Total = 300
```

Kekurangan:

```
50px
```

Jika:

```
A shrink = 1
B shrink = 1
```

Browser akan mengurangi ukuran keduanya.

Jika:

```
A shrink = 0
B shrink = 1
```

Maka hanya B yang boleh mengecil.

---

# 6. Free Space

```
Free Space

=

Container Size

-

Total Basis
```

Jika hasil:

```
positif
```

↓

Grow

Jika hasil:

```
negatif
```

↓

Shrink

---

# 7. flex: 1

Shorthand:

```css
flex: 1;
```

Kurang lebih berarti:

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```

Cara berpikirnya:

> "Lupakan ukuran awal. Bagilah ruang secara proporsional."

---

# 8. Mental Model

```
flex-basis
↓
Ukuran awal

flex-grow
↓
Membagi ruang kosong

flex-shrink
↓
Membagi kekurangan ruang
```

---

# 9. Rule of Thumb

Parent bertanggung jawab terhadap:

- display:flex
- arah layout
- jumlah ruang yang tersedia

Child bertanggung jawab terhadap:

- apakah boleh membesar
- apakah boleh mengecil
- ukuran awal

---

# 10. Analogi

```
flex-basis
=
Gaji pokok

flex-grow
=
Bonus jika perusahaan untung

flex-shrink
=
Potongan jika perusahaan rugi
```

---

# Kata Kunci

- Flex Container
- Flex Item
- Free Space
- flex-basis
- flex-grow
- flex-shrink
- flex
- Main Axis
- Cross Axis

---

# Yang Harus Diingat

❌ Flexbox bukan tentang menggeser elemen.

✅ Flexbox adalah algoritma pembagian ruang.