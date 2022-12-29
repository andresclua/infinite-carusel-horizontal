const path = require('path');

module.exports = {
    mode:'production',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:'babel-loader'
            },
        ]
    }
}