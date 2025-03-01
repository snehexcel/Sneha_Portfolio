import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/Sneha-Portfolio/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('/Sneha-Portfolio/')
  },
  server: {
    headers: { 'Content-Security-Policy': ["default-src 'self'", "script-src 'self' 'unsafe-inline' 'unsafe-eval' " , "style-src 'self' 'unsafe-inline' " , "img-src 'self' data:" , "font-src 'self'" , "connect-src 'self' https://api.emailjs.com",].join('; ')
    
},
  },
});
