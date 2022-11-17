/// <reference types="@sveltejs/kit" />

/**
 * We need this here because our Modular CSS components 
 * make use of a build-time injected `css` object. 
 * 
 * Since we're also using jsconfig's `compilerOptions.checkJs`, 
 * It's looking at all these files with a type checking eye. 
 * Without this, it looks at svelte components that use `css.<key>` and
 * goes "Yo excuse me what the fuck?" unless we explicitly say
 * "It's fine! It's real! We know about it and you don't, Typescript."
 * */
 declare var css: Record<string, string>
 declare module "*.mcss";
 
 /** We need to declare globals we set in config/environment/flags.js */
 declare var ISTEST: boolean;
 
 declare module '*.svelte' {
     export { SvelteComponentDev as default } from 'svelte/internal';
     export const version: string;
     export const icons: any;
     // ... other stuff
 }
 
 // Stop type errors when assinging to event.locals.user
 declare namespace App {
     interface Locals {
         user: any;
     }
 }
 