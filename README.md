# Al-Muhajirin Travel

Aplikasi web travel umroh dan haji yang dibangun dengan React, Express, dan TypeScript.

## 🚀 Deployment ke Netlify

### Prasyarat
- Akun Netlify
- Repository GitHub sudah terhubung dengan Netlify

### Langkah-langkah Deployment

1. **Push kode ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Setup di Netlify**
   - Login ke dashboard Netlify
   - Klik "New site from Git"
   - Pilih repository GitHub
   - Konfigurasi build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist/public`
     - **Functions directory**: `netlify/functions`

3. **Environment Variables**
   Tambahkan environment variables berikut di Netlify:
   - `NODE_VERSION`: `18`
   - `NETLIFY`: `true`

4. **Deploy**
   - Klik "Deploy site"
   - Netlify akan otomatis membuild dan mendeploy aplikasi Anda

### 📁 Struktur Proyek

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Komponen UI
│   │   ├── pages/         # Halaman aplikasi
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite configuration
├── shared/                # Shared types and utilities
├── netlify/               # Netlify configuration
│   └── functions/         # Serverless functions
├── netlify.toml          # Netlify build configuration
└── package.json          # Dependencies and scripts
```

### 🔧 Konfigurasi Netlify

File `netlify.toml` sudah dikonfigurasi untuk:
- Build frontend dan backend
- Redirect API requests ke serverless functions
- Serve frontend untuk semua route lainnya

### 🌐 API Endpoints

Semua API endpoints akan di-redirect ke serverless functions:
- `/api/*` → `/.netlify/functions/server`

### 📝 Catatan Penting

- Database connection string harus diset sebagai environment variable di Netlify
- Static assets (gambar, CSS, JS) akan di-serve dari `dist/public`
- Serverless functions akan berjalan di Node.js 18

## 🛠️ Development Lokal

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Start production server
npm start