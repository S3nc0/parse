# Parse: learning log

## Where I am

- Stage: stage 1 done (Milestone 1). Next is stage 2: build the app shell.
- Warm-up done: HTML, CSS, JavaScript and Rust basics
- Last session: 2026-11-07
- Project: `~/Documents/latex editor/parse`, on GitHub at https://github.com/S3nc0/parse (public)
- Practice code: `~/Documents/latex editor/warmup/` (`index.html` and the Rust project `hello_parse`)

## Resume here

1. Write a `## Stage 1` section below in my own words (what I built, what I learned, what confused me). The last commit's message mentions stage 1 notes, but only the Tailwind note was in it.
2. Commit and push it: `git add docs/LEARNING.md`, `git commit -m "..."`, `git push`. This also commits this "Resume here" update.
3. Quick recap of stage 1, then start stage 2.

## Stage 1 

- Built: built the project folder for Parse.
- Learned: html css javascript rust git 
- Confused me: owner in rust

## Warm-up: Rust

- Cargo creates, builds and runs Rust projects (`cargo new`, `cargo run`, `cargo fmt`). It only recompiles what changed.
- `let` variables can't change unless marked `let mut`
- Functions need types: `fn count_words(text: &str) -> usize`. The last line without `;` is the return value.
- Rust refuses to compile `count_words(42)`, unlike JavaScript's `2 + "2"`
- `Result` is `Ok(value)` or `Err(error)`, handled with `match`. It's like `try`/`except`, but the compiler makes me handle the error.
- `&` borrows a value: the function can use it, and the owner keeps it. Every value has one owner, and Rust has no garbage collector.
- Read compiler errors from the top, and look for the `help:` line
- Save the file before running (`cargo run` reads what's on disk)

## What I've done so far

- Moved around in the terminal and made the `warmup` folder and `index.html`
- Sketched the Parse window in HTML: header, formatting toolbar, main (sidebar, editor, preview) and status bar
- Laid it out with flexbox: bars stay thin, main fills the window, sidebar is 250px, editor and preview share the rest 47 to 53
- Used Leafy colours through CSS variables, with dividing lines between areas
- Wrote a `countWords` function and showed the editor's word count in the status bar
- Added a button that switches between light and dark themes

## What I've learned

Terminal

- `cd`, `pwd`, `ls`, `mkdir`, `touch`, `open`
- The terminal splits commands at spaces, so a folder name with a space needs quotes

HTML

- Tags, elements, nesting, siblings, attributes, `class`
- Browsers don't report broken HTML. A missing `</h1>` pulled the paragraph into the heading.
- Elements appear in the order they're written. The name `<footer>` doesn't put it at the bottom.

CSS

- Rules: selector, property, value. `.name` selects a class.
- Padding is inside the edge and takes the background colour. Margin is outside and transparent.
- Browsers add default styles, like an 8px margin on `body`
- Block elements take the full width. An element with no background is transparent.
- Flexbox: `display: flex`, `flex-direction`, `flex: 1` to fill leftover space, `flex` numbers as ratios, fixed `width`
- `100vh` is the full window height
- Borders don't merge, so use one border per divider
- CSS variables: define in `:root`, read with `var(--name)`, override with a class like `body.dark` to switch themes

JavaScript

- `let`, `console.log`, functions, `return`, arrays, `.split()`, `.filter()`, `.length`, chaining
- Arrow functions: `word => word !== ""` and `() => { ... }`, like a Python `lambda` but they can have many lines
- Type coercion: `2 + "2"` is `"22"`. Use `===` and `!==`, not `==` and `!=`.
- The DOM: `document.querySelector`, `.textContent`, `classList.toggle`
- `classList.toggle("dark")` adds the class if it's missing and removes it if it's there, like `if "dark" in classes: remove, else: add`
- Light mode is the default because `:root` holds the light colours. Dark mode only applies while `body` has the `dark` class.
- A refresh resets the theme to light, because nothing saves it yet (that comes at stage 2)
- Events: `addEventListener("click", function)` stores the function and runs it on each click
- Put scripts just before `</body>` so the elements exist when the script runs
- Naming: camelCase for JavaScript variables, kebab-case for CSS classes

Debugging

- Read errors in parts: type, message, location (file:line:column)
- `null` is like Python's `None`. Ask what I expected to find, and why it wasn't there: a typo, a missing dot, or the element not existing yet.
- If nothing changes, check that I saved and refreshed

## What confused me

- Flexbox at first: which element is the container and which one grows
- Where to put `:root`
- What `() => { ... }` means
- Forgot to refresh the browser after saving
- Why the page starts in light mode, and why a second click removes dark mode

## About me

- About 1 year of Python, still a beginner
- Not yet used: type hints, `try`/`except`, `async`/`await`, reading and writing files, `subprocess`
- A little experience with pip and virtual environments
- Not very comfortable in the terminal
- I use VS Code and Chrome
- About 2 hours a day
- Pace: feels right so far

## Still to do

- Decided on 2026-11-07 not to use Tailwind. Style Parse with plain CSS and CSS variables instead (this overrides the Tailwind lines in parse-build-process.md and the diagram).
