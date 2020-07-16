const path = require('path');

module.exports = [
    {
        name: 'client',
        entry: './src/client/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test:  /(\.js|\.jsx)$/,
                    exclude: /node_modules/
                },
                {
                    use: [ 
                        'style-loader',
                        'css-loader',
                        'sass-loader'  
                    ],
                    test: /\.s?css$/
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        devtool: 'cheap-module-eval-source-map'
    }/*,
    {
        name: 'server',
        target: 'node',
        entry: './src/server/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public/server')
        }
    }*/
];