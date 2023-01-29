import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import UnoCSS from "unocss/vite"
import presetWind from "@unocss/preset-wind"
import { presetAttributify } from "unocss"
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
	plugins: [
		vue(),
		UnoCSS({
			presets: [presetAttributify({}), presetWind()],
			rules: [["border", { border: "1px solid " }]],
		}),
		AutoImport({}),
		Components({
			/* options */
			dirs: ["src/components"],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
