import adapter from "@sveltejs/adapter-node";
import { preprocess } from "./mcss.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit : {
		adapter : adapter(),
	},

	/**
	 * Give the `preprocess` hook the preprocessing function we've
	 * created with Modular CSS so it can do its magic scoping CSS
	 * thing!
	*/
	preprocess,
};

export default config;
