<p align="center">
  <a href="https://ifcjs.github.io/info/">ifc.js</a>
  |
  <a href="https://discord.gg/FXfyR4XrKT">discord</a>
</p>

<img src="banner.png">
<h1>IFC.js docs <img src="https://ifcjs.github.io/info/img/logo.svg" width="32"></h1>

![opencollective](https://opencollective.com/ifcjs/tiers/badge.svg)

This repository is the official documentation of [IFC.js](https://github.com/IFCjs). You can visit it live [here](https://ifcjs.github.io/info/). It contains all the information regarding the project, including:

- The motivation behind IFC.js.

- Introduction to all the modules of the library.

- API reference.

- Step by step tutorials.

- Informal articles of the authors.

- Collaboration system and patreon.

- Community highlight.

- Link to social networks.

## Status

This documentation has been made using [docusaurus](https://docusaurus.io/). It is hand-crafted, not automatically generated. At the same time, IFC.js is a fast-moving project, and that means that the documentation requires intensive maintenance until the project is consolidated.

We are aware of the extra effort this implies, but we want to avoid generic and robotic APIs and make something more human and easy to start with.

This maintenance includes mainly updating the API methods and classes, creating new tutorials as requested by the community. This is a work in progress, so if you see something missing or incorrect, don't hesitate to let us know.

## Quick setup

First, download this project or clone the repository and install the dependencies with `yarn install`. You can then start the project locally using `yarn start`.

To start the project in another lanaguage, you can use the `--locale` flag:

- japanese: `yarn start --locale ja`

- chinese: `yarn start --locale zh`

## Content

This project consists of the following folders:

- **docs**: the markdown documents of the documentation.

- **blog**: the markdown documents of the blog.

- **i18n**: the markdown documents of the docs in other languages.

- **src**: react components used in the docs to make cool stuff.

- **static**: images and icons.

## Contributing

Want to help out? Great!

These docs use a very simple markdown that makes it super easy to make edits and create new documentation, even if you are not familiar with React. Simply copy markdown documents and they will show up in the documentation with the correct style.

- Feel free to propose new tutorials to the [community](https://discord.gg/FXfyR4XrKT) and submit them here via pull request.

- If you miss any tutorial that is not here, you can make a request in the issues or in our [discord server](https://discord.gg/FXfyR4XrKT).

You can use the pre-made components importing them (check the existing `.jsx` files to find out how) or even create new components to make these docs even cooler.
