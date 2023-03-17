import webpack from "webpack";

module.exports = {
    plugins: [],
    babel: {},
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    process: require.resolve("process/browser"),
                    stream: require.resolve("stream-browserify"),
                    https: require.resolve("https-browserify"),
                    crypto: require.resolve("crypto-browserify"),
                    http: require.resolve("stream-http"),
                    url: require.resolve("url/"),
                    buffer: require.resolve("buffer"),
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    Buffer: ["buffer", "Buffer"],
                    process: "process/browser",
                }),
            ],
        },
    },
};
