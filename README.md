# React Wordpress Plugin Boilerplate

A straightforward boilerplate to develop a react app wordpress plugin.

## Instructions

Copy folder structure to your wordpress plugins folder (/wp-content/plugins/<YOUR_PLUGIN_FOLDER>), then run

```
npm install
```

Develop locally as you would a normal react app e.g. when in /wp-content/plugins/<YOUR_PLUGIN_FOLDER>/derrmru-react-app, run

```
npm start
```

When you are ready to use within wordpress use:

```
npm run build
```

Webpack will export to single js and css files in build folder. The Plugin PHP file will enqueue the javascript from there.

The default is to embed the app in your wordpress site via a shortcode: [react-wordpress].

## Notes

If you are using this more than once in the same project, you must change shortcodes and function names in react.php file, or wordpress will throw a tantrum.