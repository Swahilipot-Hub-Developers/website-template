/*
* Gulp Builder (Config)
* @version: 1.0.0 (27 April, 2021)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2021 Htmlstream
*/


// You may find more detailed documentation at documentation/gulp.html

module.exports = {

  //
  // Start path when launching a Gulp
  //

  startPath: "/index.html",


  //
  // Variables that can be used in HTML pages and SVG files
  //

  vars: {
    themeFont: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
    version: "?v=1.0",
    style: {
      color: '#008060', // Primary Color
      font: 'Roboto' // Primary Font
    }
  },

  example :{
    lang: 'en',
    rtl: false
  },


  //
  // Skip CSS & JavaScript files from bundle files (e.g. vendor.min.css)
  //

  skipFilesFromBundle: {
    dist: [
    ],

    build: [
      "assets/css/docs.css",
      "assets/css/snippets.css"
    ]
  },


  //
  // Copy/Paste files and folders into different path
  //

  copyDependencies: {
    dist: {
      "*assets/js/theme-custom.js": ""
    },

    build: {
      "*assets/js/theme-custom.js": "",
      "node_modules/bootstrap-icons/font/*fonts/**": "assets/css"
    }
  },


  //
  // An option to set custom folder name for build process
  //

  buildFolder: "", // e.g. my-project


  //
  // Replace an asset paths in HTML to CDN
  //

  replacePathsToCDN: {},


  //
  // Change directory folder names
  //

  directoryNames: {
    src: "./src",
    dist: "./dist",
    build: "./build"
  },


  //
  // Change bundle file names
  //

  fileNames: {
    dist: {
      js: "theme.min.js",
      css: "theme.min.css"
    },

    build: {
      css: "theme.min.css",
      js: "theme.min.js",
      vendorCSS: "vendor.min.css",
      vendorJS: "vendor.min.js",
    }
  },


  //
  // Files types that will be copied to the ./build/* folder
  //

  fileTypes: "jpg|png|svg|mp4|webm|ogv|json",


  //
  // Same host as for browserSync
  //

  debugServer: 'http://localhost:3000',


  //
  // Language Direction
  //

  languageDirection: {
    isRTL: false, // true, false
    lang: 'en' // e.g. en, ar
  }
}
