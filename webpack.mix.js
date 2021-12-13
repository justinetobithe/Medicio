const mix = require('laravel-mix');
mix.webpackConfig({
    resolve: {
        extensions: [".js", "*"],
        alias: {
            "@": __dirname + "/resources/js",
            "@src": __dirname + "/resources/"
        }
    }
})

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');
