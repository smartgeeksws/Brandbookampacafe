import { copyFile } from 'node:fs/promises';
await copyFile(new URL('../node_modules/gsap/dist/gsap.min.js', import.meta.url), new URL('../dist/assets/gsap.min.js', import.meta.url));
