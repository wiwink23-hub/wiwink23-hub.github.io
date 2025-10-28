# HealthMart - E-commerce Suplemen & Vitamin

Website e-commerce modern untuk produk kesehatan, suplemen, dan vitamin yang dibangun dengan React, TypeScript, dan Tailwind CSS.

🌐 **Live Demo**: https://wiwink23-hub.github.io/

## 🚀 Fitur

- ✨ Desain modern dan responsif
- 🛒 Sistem keranjang belanja
- 📱 Mobile-friendly
- 🎨 UI components menggunakan shadcn/ui
- ⚡ Build dengan Vite untuk performa maksimal
- 🌐 Deploy otomatis ke GitHub Pages

## 🛠️ Teknologi

- **React 18** - Library UI
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Komponen UI berkualitas tinggi
- **React Router** - Routing
- **TanStack Query** - Data fetching & state management
- **Lucide React** - Icon library

## 📦 Instalasi & Development

```bash
# Clone repository
git clone <YOUR_GIT_URL>

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5000`

## 🏗️ Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

## 🌐 Deploy ke GitHub Pages

### Otomatis dengan GitHub Actions (Direkomendasikan)

Project ini sudah dikonfigurasi dengan GitHub Actions untuk deployment otomatis:

1. **Setup GitHub Pages**:
   - Pergi ke repository Settings → Pages
   - Di bagian "Source", pilih **GitHub Actions**
   - Save

2. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. Website akan otomatis deploy dan tersedia di: **https://wiwink23-hub.github.io/**

### Manual Deploy (Alternatif)

```bash
npm run deploy
```

Kemudian aktifkan GitHub Pages:
- **Settings** → **Pages**
- Source: branch `gh-pages`
- Folder: `/` (root)

## 📝 Struktur Proyek

```
src/
├── components/        # Komponen React
│   ├── ui/           # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── pages/            # Halaman aplikasi
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── Cart.tsx
│   └── ...
├── data/             # Data produk
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── App.tsx           # Main app component
```

## 🎨 Customization

- Edit warna tema di `src/index.css`
- Modifikasi komponen di folder `src/components/`
- Update data produk di `src/data/products.ts`

## 📖 Dokumentasi Lengkap

Lihat [DEPLOYMENT.md](DEPLOYMENT.md) untuk panduan deployment lengkap.

## 📄 Lisensi

MIT License - Bebas digunakan untuk proyek pribadi maupun komersial.

---

Dibuat dengan ❤️ menggunakan React & TypeScript
