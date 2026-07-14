# ✦ DevVault — Developer Portfolio UI Components

DevVault is a polished, dependency-free collection of developer portfolio UI components. Copy a component folder into your project, update the sample content, and ship.

Built with plain HTML, CSS, and JavaScript — no build step, framework, or dependencies required.

## Why DevVault?

- **Copy-paste ready:** each component lives in its own folder with the files it needs.
- **Easy to customise:** replace the sample content, colours, and labels with your own.
- **Responsive by default:** the dashboard and components adapt to smaller screens.
- **Interactive where it counts:** filter a tech stack or let visitors explore a terminal-style bio.

## Components

| Component | What it does | Files |
| --- | --- | --- |
| Tech stack grid | Filters skill cards by category with a soft transition. | `tech.html`, `tech.css`, `tech.js` |
| Code terminal | A friendly simulated terminal with `help`, `skills`, `about`, `contact`, and `clear`. | `terminal.html`, `terminal.css`, `terminal.js` |
| Project timeline | A responsive vertical milestone history. | `timeline.html`, `timeline.css` |

## Quick start

Open `index.html` in a browser to view the complete dashboard. No build step, package manager, or framework is required.

To run it from a local server, open the project folder in your editor and use its built-in preview tool, or run a simple static server of your choice.

```text
DevVault/
├── index.html
├── style.css
├── components/
│   ├── tech-grid/
│   ├── code-terminal/
│   └── project-timeline/
└── README.md
```

## Use a component in your portfolio

1. Copy the component HTML into the spot where you want it to appear.
2. Link the component stylesheet after your main stylesheet.
3. For interactive components, include the JavaScript just before `</body>`.

### Terminal example

```html
<link rel="stylesheet" href="components/code-terminal/terminal.css" />
<!-- paste the contents of terminal.html here -->
<script src="components/code-terminal/terminal.js"></script>
```

Edit `terminalReplies` in `terminal.js` to make the commands yours. For the tech grid, change each card's `data-category`, name, and icon text in `tech.html`.

## Customisation

The dashboard colours live at the top of `style.css` as CSS variables. Component styles use compatible standalone values, so they can be copied without requiring the dashboard stylesheet. Replace the sample text, colours, and links with your own portfolio details.

## License

MIT — use it, adapt it, and make something good.
