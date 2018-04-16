module.exports = {
    config: {
        entry: {
            main: [
                'babel-polyfill',
            ]
        },
        output: {
            path: OUTPUT_DIR,
            publicPath: '/public',
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].js.map',
        },
    }
}
