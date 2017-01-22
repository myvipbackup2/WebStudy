/**
 * Created by lzxvi on 2017/1/22 0022.
 */
module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]

    }
};