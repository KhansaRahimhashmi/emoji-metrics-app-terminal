// webpack.config.js
const path = require('path');
module.exports = {
    
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@features': path.resolve(__dirname, 'src/Features'),
    },
  },
  
};
