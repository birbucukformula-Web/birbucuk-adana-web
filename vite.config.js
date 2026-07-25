// Vite yapılandırma dosyası — projenin build ve geliştirme ayarları burada
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // React JSX desteği için gerekli Vite eklentisi

  // base -> Custom domain kökten yayın yaptığı için '/' olmalı
  // (repo adı artık path'e girmiyor, çünkü birbucukadanaformula.com kullanılacak)
  base: '/',
})