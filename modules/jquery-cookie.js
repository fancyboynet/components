'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/carhartl/jquery-cookie.git',
        version: 'v1.4.1',
        name: 'jquery-cookie',
        main: 'jquery.cookie.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\.cookie\.js$/i,
                release: 'jquery.cookie.js'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
