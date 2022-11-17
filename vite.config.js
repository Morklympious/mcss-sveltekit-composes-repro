import mcss from "@modular-css/vite";
import { sveltekit } from "@sveltejs/kit/vite";

import { aliases } from "./aliases.config.js";
import { processor } from "./mcss.config.js";




/** @type {import('vite').UserConfig} */
const viteConfig = {
    plugins : [
        sveltekit(),
        mcss({ processor }),
    ],

    server : {
        host       : "0.0.0.0",
        port       : 8080,
        strictPort : true,

    },

    // Resolve shared aliases
    resolve : {
        alias : aliases,
    },
};

export default viteConfig;
