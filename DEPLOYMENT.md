# Panduan Deploy ke GitHub Pages

Proyek ini dikonfigurasi untuk deploy ke GitHub Pages di https://wiwink23-hub.github.io/ dengan direktori root ("/").

## ✅ Perbaikan Masalah Blank Page

Website yang sebelumnya blank/putih sudah diperbaiki dengan:

1. **File 404.html** - Menangani client-side routing di GitHub Pages
2. **Script redirect** - Ditambahkan di index.html untuk routing
3. **Konfigurasi Vite** - Dioptimalkan untuk GitHub Pages
4. **Base path "/"** - Sudah benar untuk root directory

## Konfigurasi

Konfigurasi berikut telah diatur untuk deployment GitHub Pages:

### Vite Configuration
- **Base path**: Diatur ke `"/"` di `vite.config.ts` untuk deployment di root directory
- **Build output**: Folder `dist` dengan assets di `assets/`
- **Server**: Dikonfigurasi untuk berjalan di port 5000 dengan host `0.0.0.0`
- **404.html**: Otomatis ter-copy dari folder `public/` ke `dist/`

## Cara Deploy

### Metode 1: GitHub Actions (Otomatis) - **DIREKOMENDASIKAN**

File workflow GitHub Actions sudah dibuat di `.github/workflows/deploy.yml`. Deployment akan otomatis ketika Anda push ke branch `main`.

**Langkah-langkah**:

1. **Setup GitHub Pages di repository**:
   - Buka repository GitHub Anda
   - Pergi ke **Settings** → **Pages**
   - Di bagian "Source", pilih **GitHub Actions**
   - Save

2. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Website Anda akan tersedia di**: https://wiwink23-hub.github.io/

### Metode 2: Manual Deploy dengan gh-pages

Jika ingin deploy manual:

```bash
npm run deploy
```

Perintah ini akan:
- Build proyek Anda (`npm run build`)
- Deploy folder `dist` ke branch `gh-pages`
- Push ke GitHub

Kemudian di GitHub repository:
- **Settings** → **Pages**
- Di "Source", pilih branch `gh-pages`
- Folder: `/` (root)
- Save

## Development

Untuk menjalankan development server lokal:

```bash
npm run dev
```

Aplikasi akan tersedia di `http://localhost:5000`

## Build

Untuk build proyek tanpa deploy:

```bash
npm run build
```

File hasil build akan ada di folder `dist`.

## Preview

Untuk preview hasil build secara lokal:

```bash
npm run preview
```

## Catatan Penting

- Pastikan base path di `vite.config.ts` tetap `"/"` untuk deploy di root domain
- Semua asset (gambar, fonts, dll) akan otomatis ditangani oleh Vite dengan benar
- Jika ada masalah routing, pastikan repository di-deploy dengan benar dan GitHub Pages sudah aktif
