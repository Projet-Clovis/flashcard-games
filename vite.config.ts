import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.build.json',
        }),
    ],
    test: {
        environment: "jsdom",
        globals: true,
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'FlashcardGames',
            fileName: 'flashcard-games',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // don't include in final bundle
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
