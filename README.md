# Improper output order reproduction test case

There's a weird issue with the way that `composes` behaves in a sveltekit project. 
This is a small test case that demonstrates the incorrect output of dependencies, 
either by mcss or by sveltekit, but based on output, I'm wagering it's sveltekit somehow. 

## The way its laid out

- There is a top level `+layout.svelte` file with a `<slot>` so it can handle nested routes.
  it references an mcss file, `layout.mcss`, which has a class that `composes` from `shared/mcss/color.mcss`
- There is a `+page.js` file that immediately runs a `302` redirect to go to `/test`, which 
  populates the `routes/+layout.svelte` `<slot>` with the content from `routes/test/+page.svelte`
- `routes/test/+page.svelte` references an mcss file `./test.mcss` that `composes` from `shared/mcss/color.mcss`
- If you run `npm run dev`, you see that both pages that have css that reference `share/mcss/color.mcss` via 
  `composes` are able to successfully compose **AND OVERRIDE** the properties of that composition (changing color)
- Running `npm run build` and `npm run preview` will reveal that `routes/test/+page.svelte` successfully overrides the 
  composed `shared/mcss/color.mcss` with `color: purple`, but `+layout.svelte` at the root tries to do the same thing
  but doesn't succeed with `color: black` on its main element. 

This tells me that the ORDER in which the composed `mcss` file is being applied when building is wrong, since it seems like the 
classes for `./layout.mcss` are being overridden by the thing they're composing. If this is happening, it likely means the composed
class is appearing AFTER the processed classes for `./layout.mcss`. As for `routes/test/+page.svelte`, it is successfully able to
override its composed class because I believe the composed class is inserted before the classes processed for `test/+page.js`.

lmao what is even HAPPENING. 