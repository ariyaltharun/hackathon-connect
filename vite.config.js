/** @type {import('vite').UserConfig} */
// vite.config.js
import react from "@vitejs/plugin-react";

export default {
    // config options
    build: {
        rollupOptions: {
            input: './frontend/index.jsx',
            output: {
                dir: './static/',
                entryFileNames: 'js/[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name == "index.css") return 'css/styles.css';
                    return assetInfo.name;
                },
            }
        }
    },
    plugins: [react({
        // include: /\.(mdx|js|jsx|ts|tsx)$/, // not working
        // exclude: /node_modules/,
    })],
}
