---
title: Vim Surround Plugin
date: "2020-01-21T23:46:37.121Z"
---

## Vim Surround
* Is a useful plugin for easily surrounding tags or text with what you want

### Plugin Description
Surround.vim is all about "surroundings": parentheses, brackets, quotes, XML tags, and more.  The plugin provides mappings to easily delete, change and add such surroundings in pairs.  While it works under Vim 6, much of the functionality requires Vim 7.

This plugin is very powerful for HTML and XML editing, a niche which currently seems underfilled in Vim land.  (As opposed to HTML/XML *inserting*, for which many plugins are available).  Adding, changing, and removing pairs of tags simultaneously is a breeze.

### Install Vim Surround
* [repo](http://github.com/tpope/vim-surround)
* Add this plugin to `.vimrc`

`Plugin 'tpope/vim-surround'`

### Let's play around with vim surround
* Let's says I want to surround a word with `<strong>` tags

`csw<strong>` will turn `word` into `<strong>word</strong>`

* How to surround word with `{}`
  - `ysiw}` makes hello become `{hello}`
  - `ds"` makes `"hello"` be `hello`


Press `cs"'` (that's c, s, double quote, single quote) inside

```
"Hello world!"
```

* Now change it to `'Hello world!'`

* Press `cs'<q>` to change it to `<q>Hello world!</q>`

* To go full circle, press `cst"` to get `"Hello world!"`

* To remove the delimiters entirely, press `ds"` 

`Hello world!`

* Now with the cursor on "Hello", press `ysiw]` (**note** `iw` is a text object)

`[Hello] world!`

* Let's make sure that braces and add some space (use `"}"` instead of `"{"` for no space): `cs]{`

`{ Hello } world!`

* Now wrap the entire line in parentheses with `yssb` or `yss)`

`({ Hello } world!)`

* Revert to the original text: `ds{ds)`

`Hello world!`

* Emphasize hello: `ysiw<em>`

`<em>Hello</em> world!`

* Finally, let's try out visual mode
* Press a capital `V` (for linewise visual mode)
followed by `S<p>`

```
<p>
  Hello world!
</p>
```

**note** The "." command will work with ds, cs, and yss if you install repeat.vim
