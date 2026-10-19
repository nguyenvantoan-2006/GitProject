# Landing page refactored with Sass

This exercise restructures the local `website_template.html` / `website_style.css` landing page into SCSS partials. It keeps the original navigation, image hero, service cards, footer, and responsive layout, while adding the requested statistics section.

SCSS is organized into `abstracts`, `base`, and `layout`. Shared colors, typography, dimensions, and shadows are variables; the content container and reusable card treatment are mixins. `scss/main.scss` is the entry point.

Compile from the repository root:

```sh
sass landing-page-sass/scss/main.scss landing-page-sass/css/main.css
```

Open `landing-page-sass/index.html` to view the compiled page.
