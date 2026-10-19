# Responsive grid rebuilt with Sass

This is a Sass refactor of the source exercise: https://github.com/codegym-vn/responsive-grid

The original embedded CSS and repeated inline styles have been moved into partials under `scss/base` and `scss/layout`. Shared grid dimensions and colors live in `scss/abstracts/_variables.scss`; reusable column and guide-border rules live in `_mixins.scss`. `scss/main.scss` is the entry point.

Compile from the repository root:

```sh
sass responsive-grid-sass/scss/main.scss responsive-grid-sass/css/main.css
```

Open `responsive-grid-sass/index.html` to view the result.
