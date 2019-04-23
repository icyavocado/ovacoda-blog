const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": __dirname + "/resources/js",
      Layouts: __dirname + "/resources/js/components/layouts/"
    }
  },
  watchOptions: {
    poll: 400
  }
});

mix
  .react("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");

mix.browserSync({
  proxy: "ovacoda.dev",
  open: false
});
