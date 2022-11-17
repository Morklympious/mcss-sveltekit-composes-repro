module.exports = {
	root    : true,
	extends : [ "plugin:svelte/recommended" ],
	plugins : [ "svelte" ],
	env     : {
		browser : true,
		es2017  : true,
		node    : true,
	},
	globals : {
		css     : "readonly",
	},
	parserOptions : {
		sourceType  : "module",
		ecmaVersion : 2020,
	},
	overrides : [
		{
			files     : [ "*.svelte" ],
			processor : "svelte/svelte",
			rules     : {
				/**
				 * Why? Because we, by team convention, declare script under html in svelte files,
				 * and by that logic, everything we define comes after we use it
				 */
				"no-use-before-define" : "off",

				/**
				 * Why? Because we want svelte properties to be indented without
				 * also affecting indent rules for non-svelte files
				 */
				indent          : "off",
				"svelte/indent" : [
					"error",
					{
						indent                    : 4,
						ignoredNodes              : [],
						switchCase                : 1,
						alignAttributesVertically : true,
					},
				],


				/** Make sure stores get an initial value when you use them */
				"svelte/require-stores-init" : [ "error" ],

				/** Make sure all tags that have no content that can self close do so */
				"svelte/html-self-closing" : [
					"error",
					"all",
				],

				/** Self-closing tags should have a space before they /> */
				"svelte/html-closing-bracket-spacing" : [
					"error",
					{
						startTag       : "never",
						endTag         : "never",
						selfClosingTag : "always",
					},
				],

				/** A single line should max 3 attributes, multi should max 1 */
				"svelte/max-attributes-per-line" : [
					"error",
					{
						multiline  : 1,
						singleline : 2,
					},
				],
		
				/** Always prefer something like <div {disabled} /> to <div disabled={disabled} /> */
				"svelte/shorthand-attribute"       : [ "error", { prefer : "always" }],
				"svelte/first-attribute-linebreak" : [ "error" ],

				/** Sort svelte attributes */
				"svelte/sort-attributes" : [
					"error",
					{
						order : [
							// `this` property.
							"this",
							// `bind:this` directive.
							"bind:this",
							// `id` attribute.
							"id",
							// `name` attribute.
							"name",
							// `slot` attribute.
							"slot",
							// `--style-props` (Alphabetical order within the same group.)
							{ match : "/^--/u", sort : "alphabetical" },
							// `style` attribute, and `style:` directives.
							[ "style", "/^style:/u" ],
							// `class` attribute.
							"class",
							// `class:` directives. (Alphabetical order within the same group.)
							{ match : "/^class:/u", sort : "alphabetical" },
							// other attributes. (Alphabetical order within the same group.)
							{
							match : [ "!/:/u", "!/^(?:this|id|name|style|class)$/u", "!/^--/u" ],
							sort  : "alphabetical",
							},
							// `bind:` directives (other then `bind:this`), and `on:` directives.
							[ "/^bind:/u", "!bind:this", "/^on:/u" ],
							// `use:` directives. (Alphabetical order within the same group.)
							{ match : "/^use:/u", sort : "alphabetical" },
							// `transition:` directive.
							{ match : "/^transition:/u", sort : "alphabetical" },
							// `in:` directive.
							{ match : "/^in:/u", sort : "alphabetical" },
							// `out:` directive.
							{ match : "/^out:/u", sort : "alphabetical" },
							// `animate:` directive.
							{ match : "/^animate:/u", sort : "alphabetical" },
							// `let:` directives. (Alphabetical order within the same group.)
							{ match : "/^let:/u", sort : "alphabetical" },
						],
					},
				],

				/** HTML Comments should have <!-- Spaced content --> */
				"svelte/spaced-html-comment" : [
					"error",
					"always",
				],
			},
		},
	],
};
