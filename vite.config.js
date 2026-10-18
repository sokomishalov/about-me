import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    // served from https://sokomishalov.github.io/about-me/
    base: "/about-me/",
    plugins: [react()],
    build: {
        outDir: "build",
        // asciidoctor is big, but it's a lazy chunk loaded only for .adoc READMEs
        chunkSizeWarningLimit: 800,
        rolldownOptions: {
            onLog(level, log, defaultHandler) {
                // mdast-util-to-hast ships no-op '' directives
                if (log.code === "MODULE_LEVEL_DIRECTIVE") return
                defaultHandler(level, log)
            },
        },
    },
})
