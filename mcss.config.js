/**
 * This is the Modular CSS configuration file! It's used to help process
 * CSS files for use with svelte components. This config used to live alongside
 * svelte.config.js, but then some big changes happened with Vite and now it had
 * to split half of itself with vite, and the other with svelte.
 *
 * So here we are.
 *
 * This file exists because
 *
 * 1. SvelteKit now surfaces Vite, part of which uses mcss({ processor }), where "processor" is the
 *    modular-css exported processor
 * 2. svelte.config.js uses "preprocess" from this. It's weird, I know, but having this configuration here
 *    means we can change our css plugins and modify the build logic in this file instead of tacking it
 *    onto the rest of the config files.
 */

 import preprocessor from "@modular-css/svelte";
 import aliases from "@modular-css/path-aliases";
 import autoprefixer from "autoprefixer";
 import postcssNested from "postcss-nested";
 
 import { aliases as mappings } from "./aliases.config.js";

 const { preprocess, processor } = preprocessor({
     // Default is .css but we need .mcss because of vite
     include : /\.mcss$/i,
 
     exportGlobals : false,
 
     verbose : true,
 
     // Resolve shared aliases
     resolvers : [
         aliases({
             aliases : mappings,
         }),
     ],
 
     before : [
         postcssNested(),
         autoprefixer(),
     ],
 
     after : [],
 });
 
 export { processor, preprocess };
 