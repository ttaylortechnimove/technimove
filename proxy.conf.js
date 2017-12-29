const PROXY_CONFIG = {
    "/*": {
        "target": "http://localhost:8300/*",
        "secure": false,
        "bypass": ( req, res, proxyOptions ) => {
            if( req.headers.accept.indexOf( 'html' ) !== -1 ){
                console.log("Skipping proxy for browser request.");
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";
        },
        "pathRewrite": {
            "^/*": ""
        },
        "changeOrigin": true,
        "logLevel": "debug"

    }
}

module.exports = PROXY_CONFIG;