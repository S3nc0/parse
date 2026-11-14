# Parse: learning log

## Where I am

- Stage: stage 2 in progress (build the app shell), on the branch `stage2-app-shell`
- Warm-up done: HTML, CSS, JavaScript and Rust basics
- Last session: 2026-11-15
- Project: `~/Documents/latex editor/parse`, on GitHub at https://github.com/S3nc0/parse (public)
- Practice code: `~/Documents/latex editor/warmup/` (`index.html` and the Rust project `hello_parse`)

## Resume here

1. Check I'm on my branch: `git branch` should show `* stage2-app-shell`
2. Start `npm run tauri dev` from the `parse` folder
3. Step 21, layout part 5: inside `<main>` in `App.tsx`, add `<div className="panes">` holding `<section className="editor">Editor</section>` and `<section className="preview">Preview</section>`, then `<div className="terminal">Terminal</div>` after `.panes`
4. In `App.css`: `main` gets `display: flex` and `flex-direction: column` (keep `flex: 1`). `.panes`: flex and `flex: 1`. `.editor`: `flex: 47`. `.preview`: `flex: 53`, `border-left`, `background-color: var(--surface-container-high)`. `.terminal`: `height: 260px` and `border-top`.
5. Answer the check: with `flex: 47` and `flex: 53`, the editor gets ____% of the width

Stage 2 checklist: Leafy tokens ✅, fonts ✅, icons ✅, layout (rows, sidebar and main done; editor, preview and terminal next), resizable panes, saved theme

## Stage 2 so far

- Made the branch `stage2-app-shell` (`git switch -c`), committed "Replace the welcome screen with Parse heading" and pushed it (`git push -u origin stage2-app-shell`)
- How the page starts: `index.html` has an empty `<div id="root">`, `main.tsx` finds it with `getElementById` and draws `<App />` inside it
- `.ts` is JavaScript plus types (like type hints, but checked before running). `.tsx` can also hold JSX tags like `<h1>`.
- A component is a function that returns JSX. Its name starts with a capital. To use one: import it if it's in another file, then write it as a tag (`<Sidebar />`), never `Sidebar()`.
- React swaps each component tag for what it returns, until only HTML is left
- Hot reload: saving a frontend file updates the window without restarting
- Staging picks what goes in a commit. Unstaged changes stay out.
- `git restore file` throws away unstaged changes (can lose work)
- Leafy colours are in `src/theme.css`: light ones in `:root`, dark ones in `body.dark`. A name like `--surface` says the job (background), and `--on-surface` is for text and icons on top of it.
- Order inside `:root` doesn't matter to the browser, but if a variable appears twice, the last one wins
- `body.dark` replaces the `:root` values because it's more specific
- Import a CSS file in a `.tsx` file: `import "./theme.css";` (`./` means my own file, no `./` means a package in `node_modules`)
- `npm install` is like `pip install`, but each project gets its own `node_modules/`. `package.json` is like `requirements.txt`, and `package-lock.json` is like `pip freeze` (exact versions). Never commit `node_modules`.
- Installing a package does nothing until I import it
- Fonts: IBM Plex Sans for the interface, IBM Plex Mono for code, as `--font-sans` and `--font-mono`. Weight 400 is regular and 600 is semibold.
- `git diff` shows unstaged changes, `git diff --cached` shows staged ones. In `git status --short`, `M` in the first column means staged.
- One idea per commit. Name the group, not every item ("Add Leafy colors for the app shell").
- Icons: Material Symbols Sharp is an icon font. A word like `dark_mode` becomes a picture (a ligature), but only with the `.icon` class in `theme.css` (family `"Material Symbols Sharp Variable"`, weight 300). `light_mode` is the sun.
- In JSX, write `className`, not `class` (`class` already means something in JavaScript)
- A component returns one element. Wrap several in a `<div>`, like returning a list in Python. Put `( )` around JSX that spans several lines.
- An imported CSS file applies to the whole page, whichever file imports it. I import `App.css` in `App.tsx` so it's easy to find.
- `main` (no dot) selects the `<main>` tag. `.main` selects `className="main"`.
- `flex-direction: row` is the default, so `display: flex` alone puts children side by side
- Layout so far: `.app` (column, `100vh`) holds `header`, `.toolbar`, `.workspace` (flex row, `flex: 1`) and `footer`. `.workspace` holds `.sidebar` (250px) and `main` (`flex: 1`). Each area has a Leafy background and one divider line.

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
- Pace: 2026-11-08, a little too fast when many new things (like `.tsx`) arrive at once. Go one new word at a time, with more Python comparisons and simpler checks.

## Still to do

- Decided on 2026-11-07 not to use Tailwind. Style Parse with plain CSS and CSS variables instead (this overrides the Tailwind lines in parse-build-process.md and the diagram).
