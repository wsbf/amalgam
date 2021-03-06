const path = require('path');
const projectRootPath = __dirname;

module.exports = {
    context: projectRootPath,
    entry: './src/App.tsx',
    output: {
        path: path.resolve(projectRootPath, '../public'),
        publicPath: '../public/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    resolve: { extensions: ['*', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'] },
    module: {
        loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    }
}
