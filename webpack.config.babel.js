import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.s?ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                use: [
                    'file-loader',
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path]/[name].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: { interlaced: false, },
                            optipng: { optimizationLevel: 7 },
                            pngquant: { quality: '65-90', speed: 4 },
                            mozjpeg: { progressive: true, quality: 80 },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My first App',
            template: './index.html',
            // filename: './path/to/myindex.html',
            favicon: './static/images/favicon_cleaned.svg'
        })
    ],
    resolve: {
        alias: {
            comp: `${__dirname}/src/components`,
            stc: `${__dirname}/static`,
        },
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: `${__dirname}/`,
    },
    devtool: '#inline-sourcemap'
};