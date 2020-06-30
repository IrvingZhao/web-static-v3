const host = "localhost";
const port = 3000;
const baseUrl = "/";
const outputDir = "dist";
const assertDir = "";
const proxy = {
    "/defalut": {
        target: "http://47.92.89.147",
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
    },
    "/api": {
        target: "http://gh.yixiuhuo.com",
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,// proxy websockets
        logLevel: 'debug',
    },
    "/develop": {
        target: "http://gh.yixiuhuo.com",
        changeOrigin: true,
        ws: true,
        logLevel: "debug",
    }
};

module.exports = {
    publicPath: baseUrl,
    outputDir: outputDir,
    assetsDir: assertDir,
    devServer: {
        clientLogLevel: 'info',
        quiet: true,
        host: host,
        port: port,
        proxy,
    },
    transpileDependencies: [
        /element-ui[\\/]src/,
        /element-ui[\\/]packages/,
        /swiper/,
        /dom7/
    ],
    configureWebpack: {
        entry: "./src/main.ts",
        optimization: {
            splitChunks: {
                cacheGroups: {
                    swiper: {
                        name: 'chunk-swiper',
                        test: /[\\/]node_modules[\\/]swiper/,
                        priority: 0,
                        chunks: 'initial'
                    },
                    element: {
                        name: "chunk-element-ui",
                        test: /[\\/]node_modules[\\/]element-ui/,
                        priority: 0,
                        chunks: 'initial',
                    },
                    highchart: {
                        name: "chunk-highchart",
                        test: /[\\/]node_modules[\\/]highcharts/,
                        priority: 0,
                        chunks: 'initial'
                    },
                    vendors: {
                        name: 'chunk-vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        chunks: 'initial'
                    },
                    common: {
                        name: 'chunk-common',
                        minChunks: 2,
                        priority: -20,
                        chunks: 'initial',
                        reuseExistingChunk: true
                    }
                }
            }
        }
    },
    chainWebpack(config) {
    }
};
