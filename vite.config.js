import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // මේක අලුතින් එකතු වෙන්නේ

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // මේකත් මෙතන තියෙන්න ඕනේ
  ],
})