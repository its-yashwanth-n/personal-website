/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "react-icons/fi": {
            transform: "react-icons/fi/{{member}}",
        },
        "react-icons/ai": {
            transform: "react-icons/ai/{{member}}",
        },
        "react-icons/bs": {
            transform: "react-icons/bs/{{member}}",
        },
    },
    webpack: config => {
        config.module.rules.push({
            test: /(Light_Logo|Dark_Logo)\.svg$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                        publicPath: `/_next/static/images/`,
                        outputPath: 'static/images',
                    },
                },
            ],
        });

        return config;
    }
})

