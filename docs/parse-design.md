# Parse design

A text description of the Parse prototype, which is a 1440 x 900 desktop screen. It opens in dark mode.

This describes the Claude prototype. If you've changed the Figma file since, the Figma file may differ.

The prototype simulates compiling, the preview and the agents. Build real versions and don't copy its code.

## Layout

```text
+------------------------------------------------------------------------+
| Top bar: logo, Parse | project and title          status, buttons      |
+------------------------------------------------------------------------+
| Formatting toolbar                                                     |
+-----------+---------------------------+--------------------------------+
| Sidebar   | Source editor             | Preview                        |
| Files     | Tabs                      | Controls                       |
| Outline   | Line numbers and code     | White PDF page                 |
|           +---------------------------+--------------------------------+
|           | Terminal and agents panel                                  |
+-----------+------------------------------------------------------------+
| Status bar                                                             |
+------------------------------------------------------------------------+
```

- The sidebar is about 250 px wide.
- The editor takes about 47% of the remaining width and the preview about 53%.
- The terminal panel is 260 px tall and sits under the editor and preview only.
- At phone width, the panels stack in one column and the toolbars wrap.

## Top bar

From left to right:

- Green pterodactyl logo, 54 x 36 px
- "Parse", 20 px SemiBold
- Thin vertical divider
- "Projects / Leaf growth model", 12 px, above the document title, 20 px Regular. The title comes from `\title{}`.
- Status tag, a 24 px pill: "Compiled", "Compiling…", "Not compiled" or the error count
- Download PDF: outlined button
- Share: tonal button
- Recompile: filled button, the only filled button, with shortcut Ctrl+Enter
- Dark mode: icon toggle, moon or sun
- Settings: icon button

## Formatting toolbar

32 px controls, grouped with thin dividers:

1. Undo, Redo
2. Paragraph style menu: Normal text, Section, Subsection
3. Bold, Italic, Underline, Monospace
4. Inline math, Display equation, Fraction, Superscript, Subscript
5. Bulleted list, Numbered list
6. Insert figure, Insert table, Insert citation, Insert cross-reference

Pushed to the right: Terminal toggle, Find and replace, Comments.

Buttons wrap the selected text in the LaTeX command or insert a starter block.

## Sidebar

- Files heading, with New file and Upload icon buttons
- File rows: main.tex (selected), references.bib, sections, figures, and leaf-growth.pdf indented under figures
- The selected row has a secondary-container fill and a 3 px primary bar on its left edge
- Outline heading with a "Live" label
- Outline rows: section number and title, built from the source. Subsections are indented. Selecting a row jumps to that line.

## Source editor

- Tabs: main.tex (selected, with a 3 px primary line on top) and references.bib
- Also Word wrap and More icon buttons
- Sticky line numbers on the left
- IBM Plex Mono, 13 px, with a 22 px line height
- The current line has a faint primary tint
- Error lines have a red tint, a wavy underline and a red line number
- Syntax colours:
  - Commands: primary
  - Environment names: tertiary
  - Math: on-tertiary-container on a faint tertiary-container fill
  - Comments: on-surface-variant, italic
  - Brackets and braces: outline

## Preview

- Heading "Preview" and "Page 1 of 1"
- Auto-compile switch
- Zoom out, zoom percentage, Zoom in, Fit to width, Jump to source
- An error banner appears when there are errors, with the message and a "Go to line" button
- A "not compiled" banner appears when Auto-compile is off and the source has changed, with a Recompile button
- A white page stays white in both themes, 560 x 792 px at 100%, with a small shadow, on a surface-container-high background
- The page uses STIX Two Text and shows the title block, abstract, numbered sections, equations with stacked fractions and numbers, lists and figure placeholders

## Terminal and agents panel

- Tabs: Terminal, then one tab per agent. Agent tabs have a close button and show a spinner while running.
- Add agent button, which opens a menu with Proofreader, Reference checker, Build fixer and Custom agent
- Clear and Hide buttons on the right
- Scrolling output in IBM Plex Mono, 13 px, with a prompt line at the bottom
- Findings with a line number are clickable and jump to that line in the editor
- The Build fixer offers an Apply fix button for an environment that's never closed
- The terminal background is near-black in dark mode and dark grey in light mode

## Status bar

From left to right: error status with an icon, "Ln, Col" position, word count, agent count. Pushed to the right: pdfLaTeX, UTF-8, Saved.

Text is 12 px.

## Design system: Leafy

The full system is at https://github.com/S3nc0/leafy-design-system

- Type: IBM Plex Sans for the interface and IBM Plex Mono for code
- Icons: Material Symbols Sharp, weight 300
- Corners: 2 px on buttons and fields, 4 px on menus, 0 on rows and panels, full rounding only on status pills and switches
- Depth: flat layers, with shadows only on floating items like menus
- Focus: a 2 px line inside the control
- Motion: 110 ms with `cubic-bezier(0.2, 0, 0.38, 0.9)`

### Colours

| Role | Dark | Light |
| --- | --- | --- |
| primary | #a1d39a | #3b6939 |
| on-primary | #0a390f | #ffffff |
| primary-container | #235024 | #bcf0b4 |
| on-primary-container | #bcf0b4 | #235024 |
| secondary | #baccb3 | #52634f |
| secondary-container | #3b4b38 | #d5e8cf |
| on-secondary-container | #d5e8cf | #3b4b38 |
| tertiary | #a0cfd4 | #38656a |
| tertiary-container | #1f4d52 | #bcebf0 |
| on-tertiary-container | #bcebf0 | #1f4d52 |
| error | #ffb4ab | #ba1a1a |
| error-container | #93000a | #ffdad6 |
| on-error-container | #ffdad6 | #93000a |
| surface | #10140f | #f7fbf1 |
| on-surface | #e0e4db | #191d17 |
| on-surface-variant | #c2c9bd | #424940 |
| surface-container-lowest | #0b0f0a | #ffffff |
| surface-container-low | #191d17 | #f1f5ec |
| surface-container | #1d211b | #ecefe6 |
| surface-container-high | #272b25 | #e6e9e0 |
| surface-container-highest | #323630 | #e0e4db |
| outline | #8c9388 | #72796f |
| outline-variant | #424940 | #c2c9bd |
| success | #70dba3 | #006d45 |
| success-container | #005233 | #8cf8be |
| on-success-container | #8cf8be | #005233 |
| focus | #a0cfd4 | #38656a |

Terminal colours:

| Role | Dark | Light |
| --- | --- | --- |
| background | #0b0f0a | #2d322c |
| text | #e0e4db | #eff2e9 |
| accent | #a1d39a | #a1d39a |
| success | #70dba3 | #70dba3 |
| warning | #f0c119 | #f0c119 |
| info | #b4c4ff | #b4c4ff |
| error | #ffb4ab | #ffb3aa |
