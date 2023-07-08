const dotenv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
// const withPlugins = require('next-compose-plugins');

const nextConfig = {
    swcMinify: true,
    env: dotenv.config({
        path: {
            envPath: '.env',
        },
    }).parsed,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://46.249.102.65:8080/api/:path*',
            },
            {
                source: '/storage/:path*',
                destination: 'http://46.249.102.65:8080/storage/:path*',
            },
        ];
    },
};
module.exports = nextConfig;
