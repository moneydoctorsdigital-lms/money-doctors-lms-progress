import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/money-doctors-lms-progress/',

    plugins: [
        react(),
        tailwindcss(),
    ],

    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});