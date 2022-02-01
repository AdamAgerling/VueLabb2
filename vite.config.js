import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'grey',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'AgentSelect: Valorant Agents:',
        short_name: 'AgentSelect',
        start_url: '.',
        theme_color: 'red'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest']
      },
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          // Cache GET requests to `https://valorant-api.com/v1/agents/
          urlPattern: '`https://valorant-api.com/v1/agents/'
        },
        {
          handler: 'NetworkFirst',
          // Regular expression to cache GET requests to
          // “`https://valorant-api.com/v1/agents/ID” (with or without a trailing
          // slash)
          urlPattern: /https:\/\/valorant-api\.com\/v1\/agents\/[0-9a-f-]+\/?/
        }
      ]
    }),
    vue()
  ]
})
