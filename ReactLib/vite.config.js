import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'wwwroot',
        lib: { entry: 'main.js', formats: ['es'] }
    },
    define: { 'process.env': {} }
})
