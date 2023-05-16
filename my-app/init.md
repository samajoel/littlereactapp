# Create React App without Create React App

## 1. Started with creating the project folder and package.json:

    mkdir my-app

    npm init

## 2. Installed webpack dependencies:

    npm i --save-dev webpack webpack-cli webpack-dev-server

## 3. Installed the Babel dependencies:

    npm i --save-dev babel-loader @babel/preset-env @babel/core
    @babel/plugin-transform-runtime
    @babel/preset-react
    @babel/eslint-parser
    @babel/runtime
    @babel/cli

## 4. Installed required Linters and path:

    npm i --save-dev eslint eslint-config-airbnb-base
    eslint-plugin-jest
    eslint-config-prettier
    path

## 5. Installed react and react-dom:

    npm i react react-dom

## 6. Created folder called “public” in the root of the project. Inside that, created index.html:

    mkdir public
    cd public
    touch index.html

## 7. Created src folder and inside created a file called App.js:

    cd ..
    mkdir src
    cd src
    touch App.js

## 8. Created index.js file(entry point for our webpack):

    import React from "react";
    import reactDom from "react-dom";
    import App from "./src/App"

    reactDom.render(<App />, document.getElementById("root"));

## 9. Created webpack.config.js file:

    At the root project:

    touch webpack.config.js

## Code:

    const path = require("path");

    /*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve.
    After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

    module.exports={
        /** "mode"
        * the environment - development, production, none. tells webpack
        * to use its built-in optimizations accordingly. default is production
        */
        mode: "development",
        /** "entry"
        * the entry point
        */
        entry: "./index.js",
        output: {
        /** "path"
         * the folder path of the output file
         */
        path: path.resolve(__dirname, "public"),
        /** "filename"
         * the name of the output file
         */
        filename: "main.js"
        },
        /** "target"
        * setting "node" as target app (server side), and setting it as "web" is
        * for browser (client side). Default is "web"
        */
        target: "web",
        devServer: {
        /** "port"
         * port of dev server
        */
        port: "9500",
        /** "static"
         * This property tells Webpack what static file it should serve
        */
        static: ["./public"],
        /** "open"
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only".
         * "only" is used if enable Hot Module Replacement without page
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
        },
        resolve: {
            /** "extensions"
            * If multiple files share the same name but have different extensions, webpack will
            * resolve the one with the extension listed first in the array and skip the rest.
            * This is what enables users to leave off the extension when importing
            */
            extensions: ['.js','.jsx','.json']
        },
        module:{
            /** "rules"
            * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
            * file inside of a require()/import statement, use the babel-loader to transform it before you
            * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
            * being searched"
            */
            rules: [
                {
                    test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                    exclude: /node_modules/, //folder to be excluded
                    use:  'babel-loader' //loader which we are going to use
                }
            ]
        }
    }

## 10. Created .babelrc file:

    touch .babelrc

## Code:

    {
    /*
        a preset is a set of plugins used to support particular language features.
        The two presets Babel uses by default: es2015, react
    */
    "presets": [
        "@babel/preset-env", //compiling ES2015+ syntax
        "@babel/preset-react" //for react
    ],
    /*
        Babel's code transformations are enabled by applying plugins (or presets) to your configuration file.
    */
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]

    }

## 11. Updated package.json file

    {
    /*
        a preset is a set of plugins used to support particular language features.
        The two presets Babel uses by default: es2015, react
    */
    "presets": [
        "@babel/preset-env", //compiling ES2015+ syntax
        "@babel/preset-react" //for react
    ],
    /*
        Babel's code transformations are enabled by applying plugins (or presets) to your configuration file.
    */
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]

}

## 12. Run "npm build":

    It generates main.js

    npm run build

## 13. Run "npm start":

    npm start

## 14. Update package.json:

      "scripts": {
        "start": "webpack serve --mode development",
        "build": "webpack --mode production",
        "test": "test"
        },

## 15. Update the webpack.config.js:

    entry: path.resolve(__dirname, "index.js"),
    output: {
        /** "path"
        * the folder path of the output file
        */
        path: path.resolve(__dirname, "public"),
        /** "filename"
        * the name of the output file
        */
        filename: "main.js",
        },

## 16. Updated index.html( the script gave me error )

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        </head>
        <body>
            <div id="root"></div>
            <!-- Container element for the React app -->
            <script src="main.js"></script>
        </body>
    </html>

## 17. Updated webpack.config.js(to load css):

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
