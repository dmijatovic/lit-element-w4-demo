# Lit-element web component demo

This demo uses Litelement from Polymer to create custom web components. For packaging we use webpack v4 instead of polymer cli. I used webpack because I am more familiar with webpack at this point in time then with polymer cli.

## Development

We will have usual script `npm run dev` to run dev server and `npm run build` to create production build

### Dependencies

```bash

  # webpack basics
  npm i -D webpack webpack-cli webpack-dev-server copy-webpack-plugin html-webpack-plugin

  # lit-element and webcomponent polyfil
  npm i -s lit-element @webcomponents/webcomponentsjs

```

## Lit-element learnings

Very easy to set with just a few dependecies. The polyfills need to be tested and proven to work. I'll come to this later.

The official [documentation is good](https://lit-element.polymer-project.org/guide/templates)

### Shadow DOM

Lit-element lib by default creates shadow dom on each component in open type.
To avoid that add
