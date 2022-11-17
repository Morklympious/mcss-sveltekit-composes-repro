<link href="./layout.mcss" rel="stylesheet" />

<div class="{css.body}">
    <h1> This is a layout </h1>

    <div class="{css.text}"> 
        This text ("css.text") is composing a class called "greenish"
        from "shared/mcss/color.mcss". 

        based on local overrides.This should be black
    </div>
    
    <slot />
</div>
