import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@ptkdev/sveltekit-electron-adapter';

export const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            strict: false,
        })
    }
}