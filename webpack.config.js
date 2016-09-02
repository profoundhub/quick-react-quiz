module.export = {
  entry: [
    "./src/index.js"
  ],
  output :{
      path: __dirname,
      filename: "app/js/main.js"
  },
  module :{
    loaders : [{
      test : /\.jsx?$/,
      loader : "bable",
      exclude : /node_modules/
    }]
  }
}
