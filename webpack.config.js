const path = require('path');

module.exports = [
    {
        name: 'client',
        entry: './src/client/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public/client')
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test:  /(\.js|\.jsx)$/,
                    exclude: /node_modules/
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'public/client'),
            historyApiFallback: true
        },
        devtool: 'cheap-module-eval-source-map'
    },
    {
        name: 'server',
        target: 'node',
        entry: './src/server/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public/server')
        }
    }
];