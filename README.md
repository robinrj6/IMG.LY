# IMG.LY Website Components

A collection of components that are used across all IMG.LY websites.

[Storybook](https://imgly-labs.github.io/imgly-website-components/)

- [Development](#development)
  - [Install dependencies](#install-dependencies)
  - [Start the project](#start-the-project)
  - [Build](#build)
  - [Release](#release)
  - [Testing](#testing)
  - [Notes](#notes)
- [Installation](#installation)
  - [As a package](#as-a-package)
  - [From CDN](#from-cdn)
- [How to update across all IMG.LY websites](#how-to-update-across-all-imgly-websites)
  - [IMG.LY](#imgly)
  - [Blog](#blog)
  - [Backend](#backend)
  - [Showcases](#showcases)
  - [Guides](#guides)

## Development

### Install dependencies

```bash
yarn
```

### Start the project

```bash
yarn storybook
```

### Build

#### Package

The package can be built with `yarn build:esm` and will use the `vite.config.ts` config and `src/index.ts` entry point.

Everything inside the `public` folder will be included in the bundle and you can also find the final `package.json` there.

#### UMD

The UMD files can be built with `yarn build:umd` and will use the `vite.config.umd.ts` config and `src/index.umd.ts` entry point.

### Release

The IMG.LY website components can be released by running the `Release` [action](https://github.com/imgly-labs/imgly-website-components/actions/workflows/release.yml). There are two options for the package and CDN build that can be set to `true` to release them.

#### Package

The package will be pushed to the `build` branch.

#### UMD

The UMD build will be uploaded to this CDN [bucket](https://console.cloud.google.com/storage/browser/imgly-static-assets/static/imgly-website-components/).

### Testing

Install Playwright with the following command:

```
npx playwright install
```

The tests can either be run in the React environment `examples/react-js` for the ESM build or the UMD environment `examples/umd` for the UMD build.

You will need to run `yarn build:esm` in the root folder and `yarn` in the `examples/react-js` folder or `yarn build:umd` before you start any test.

These two commands will start the test runner:

```
yarn test:e2e:esm
```

or

```
test:e2e:umd
```

### Notes

#### Stylelint

Any change in `.stylelintrc.json` needs to be copied to `.vscode/settings.json` for VSCode formatting to work in `.scss` files. See this [issue](https://github.com/stylelint/vscode-stylelint/issues/328).

## Installation

### As a package

```bash
yarn add https://github.com/imgly-labs/imgly-website-components.git#build
```

<br/>

#### Install peer dependencies

```bash
yarn add react react-dom ariakit
```

#### Import styling

Add the following import to your `index.ts`:

```jsx
import "@imgly-labs/imgly-website-components/imgly-website-components.css";
```

#### Import a component

```jsx
import { Footer } from "@imgly-labs/imgly-website-components";

function App() {
  return (
    <footer>
      <Footer />
    </footer>
  );
}
```

### From CDN

#### Add peer dependencies

Add the following imports to the `head` of the HTML file:

```html
<script
  crossorigin
  src="https://unpkg.com/react@17/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
></script>
```

#### Import styling

Add the following imports to the `head` of the HTML file:

```html
<link
  rel="preload"
  href="https://img.ly/static/imgly-website-components/imgly-website-components.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://img.ly/static/imgly-website-components/imgly-website-components.css"
  />
</noscript>
```

#### Import the package

Add the following import before the closing `body` tag:

```html
<script src="https://img.ly/static/imgly-website-components/imgly-website-components.umd.cjs"></script>
```

The file needs to be loaded after the elements are created since it will check for specific ids.

#### Add a component

```html
<footer id="imgly-website-components-footer"></footer>
```

## How to update across all IMG.LY websites

### IMG.LY

The UMD build from the CDN will be used.

The CookieBanner is part of the top-level custom code in Webflow.
The Header and Footer have their own components that will contain an element with the relevant id.

### Blog

The UMD build from the CDN will be used.

### Backend

The UMD build from the CDN will be used.

### Showcases

Run `yarn add https://github.com/imgly-labs/imgly-website-components.git#build` in `ubq/apps/cesdk_web_examples/showcases-app` and follow the Showcase release instructions.

### Guides

The website components in the guides are updated through the Gatsby theme.

Run `yarn add https://github.com/imgly-labs/imgly-website-components.git#build` in `gatsby-theme-imgly/packages
/gatsby-theme-imgly-docs/` and create a release by merging this change into `main`.

#### PVE.SDK

Run `yarn update:package` in `pesdk/docs` and follow the release process by merging this change into `main` and running the `Deploy Documentation` [action](https://github.com/imgly-labs/pesdk/actions/workflows/deploy-docs.yml).

#### CE.SDK

Run `yarn update:package` in `apps/cesdk_guides` and follow the release process.
