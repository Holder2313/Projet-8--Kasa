import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      
      '/api': {
        
        target: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1',
        changeOrigin: true,
       
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
