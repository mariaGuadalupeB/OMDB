module.exports = {
    entry: "./api/server.js", 
    output: {
      path: __dirname + './api', 
      filename: 'bundle.js' 
    }
  }

  module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: dirname + "./public",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    context: dirname,
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/env"],
          },
        },
        {
          test: /.(css|sass|scss)$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
  
          ],
        },
      ],
    },
    devtool: "source-map",
  };