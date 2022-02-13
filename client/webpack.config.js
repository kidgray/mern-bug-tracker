const path = require('path');

module.exports = [
    {
        name: 'client',
        entry: './src/app.js',
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
            static: {
                directory: path.join(__dirname, "public")
            },
            historyApiFallback: true
        },
        devtool: 'eval-source-map'
    }
];