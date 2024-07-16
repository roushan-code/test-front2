import image from '@rollup/plugin-image'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    image(),
    createHtmlPlugin({
      entry: 'src/main.jsx',
      template: '/index.html',
      inject: {
        data: {
          title: 'index',
          injectScript: `<script src="./inject.js"></script>`,
        },
      }
    })
  ]
})
