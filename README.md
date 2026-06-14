# DiVolca.net

Dieng Mountains GeoSpatial Information Page

## Tentang Projek

Projek ini didedikasikan untuk keluaran dari penelitian yang dilakukan di pegunungan Dieng. Data penelitian yang diambil diantaranya adalah data magnetik dan gravity di bawah permukaan. Fitur utama dalam projek ini adalah menampilkan model 3d gunung yakni file .glb disertai dengan model gravity dan model magnetik yang juga dalam file .glb.

## Feature Requirement

1. Data Spasial Gunung
   - Model Gravity
   - Model Magnetik
2. Research Stats
   - Lokasi Penelitian
   - Lama Penelitian Langsung
   - Lama Penelitian Total
   - Jenis data (primer/sekunder)
3. Glosarium

## UI Requirement

1. Navigation Bar (Bagian menu navigasi)
2. Bridging/Hero Section (Bagian penjelasan singkat tentang penelitian yang dilakukan)
3. Model 3D Gunung disertai data spasial (Fitur 1)
4. Model data spasial untuk tiap-tiap kedalaman (2D/gambar flat), terdapat vertical scroller untuk menentukan gambar yang ditampilkan.
5. (Fitur 2)
6. Research
   - Sub section berisi hasil riset, artikel penelitian
   - Sub section berisi infografis Dieng
   - Sub section berisi informasi tentang mitigasi dan langkah-langkah mitigasi bencana vulkanik
7. (Fitur 3)
8. About Dieng Mountains
9. About Team

Note:

- poin 2-4 berada dalam satu halaman yakni landing page langsung, sedangkan selebihnya berada di dedicated page masing-masing.
- Terdapat toggle button untuk tiap-tiap data spasial apakah ingin ditampilkan atau tidak.

## Technical Detail

Backend: FastAPI (belum diketahui kebutuhannya untuk apa)

Frontend: Vite React JS

Model 3D: .glb

Library 3D Viewer: Three.js

## Current State

- Empty backend folder
- Initialize vite in frontend folder using `npm create vite@latest`
