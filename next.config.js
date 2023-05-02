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
};
module.exports = nextConfig;
