# 🚀 Cara Deploy ke GitHub Pages

## Masalah yang Sudah Diperbaiki ✅

Website yang sebelumnya **blank/putih** di GitHub Pages sudah diperbaiki dengan:

1. ✅ Menambahkan `404.html` untuk handle client-side routing
2. ✅ Menambahkan script redirect di `index.html` 
3. ✅ Konfigurasi Vite yang tepat untuk GitHub Pages
4. ✅ Base path sudah diatur ke `"/"` untuk root directory

## 📝 Langkah-Langkah Deploy

### Metode 1: GitHub Actions (Otomatis) - **DIREKOMENDASIKAN**

#### 1. Push Kode ke GitHub
```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

#### 2. Setup GitHub Pages
- Buka https://github.com/wiwink23-hub/wiwink23-hub.github.io (atau repository Anda)
- Klik **Settings** (tab di atas)
- Klik **Pages** (menu kiri)
- Di bagian **"Build and deployment"**:
  - Source: Pilih **"GitHub Actions"**
  - Klik **Save**

#### 3. Tunggu Deploy Selesai
- GitHub Actions akan otomatis build dan deploy
- Cek tab **Actions** di repository untuk melihat progress
- Setelah selesai (✅ hijau), website akan tersedia di:
  
  **https://wiwink23-hub.github.io/**

---

### Metode 2: Manual Deploy (Alternatif)

#### 1. Build Project
```bash
npm run build
```

#### 2. Deploy ke GitHub Pages
```bash
npm run deploy
```

#### 3. Aktifkan GitHub Pages
- Pergi ke **Settings** → **Pages**
- Source: Pilih branch **"gh-pages"**
- Folder: **"/ (root)"**
- Klik **Save**

#### 4. Tunggu Beberapa Menit
Website akan tersedia di: **https://wiwink23-hub.github.io/**

---

## 🔍 Troubleshooting

### Website Masih Blank?

1. **Cek Console Browser**:
   - Tekan `F12` di browser
   - Buka tab **Console**
   - Lihat apakah ada error

2. **Pastikan GitHub Actions Berhasil**:
   - Pergi ke tab **Actions** di repository GitHub
   - Pastikan ada tanda ✅ hijau (bukan ❌ merah)
   - Jika merah, klik untuk lihat error

3. **Tunggu Cache Clear**:
   - GitHub Pages kadang butuh 5-10 menit untuk update
   - Coba refresh browser dengan **Ctrl + Shift + R** (hard refresh)

4. **Cek Settings GitHub Pages**:
   - Pastikan source sudah benar (GitHub Actions atau gh-pages branch)
   - Pastikan tidak ada custom domain yang salah

### Error 404 di Sub-halaman?

File `404.html` dan script redirect sudah ditambahkan untuk mengatasi ini. Jika masih terjadi:

1. **Hard refresh** browser: `Ctrl + Shift + R`
2. **Clear cache** browser
3. Tunggu beberapa menit untuk propagasi GitHub Pages

---

## ✅ Checklist Deploy

- [ ] Kode sudah di-push ke GitHub (branch `main`)
- [ ] GitHub Pages sudah diaktifkan di Settings
- [ ] Source dipilih "GitHub Actions" atau "gh-pages branch"
- [ ] Workflow GitHub Actions berhasil (✅ hijau)
- [ ] Website bisa diakses di https://wiwink23-hub.github.io/
- [ ] Routing berfungsi (bisa navigasi antar halaman)

---

## 📞 Bantuan Lebih Lanjut

Jika masih ada masalah:
1. Cek file `.github/workflows/deploy.yml` ada dan benar
2. Pastikan file `public/404.html` dan `dist/404.html` ada
3. Lihat console browser untuk error spesifik
4. Cek tab Actions di GitHub untuk log deploy

---

**Website Anda**: https://wiwink23-hub.github.io/

Selamat! Website Anda sudah siap online! 🎉
