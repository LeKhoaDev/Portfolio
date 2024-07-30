/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: '/Portfolio/',
    assetPrefix: '/Portfolio/',
    images: {
        loader: 'default',
        path: '/Portfolio/',
    },
};

export default nextConfig;
