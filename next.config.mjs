/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https', // or http if necessary
            hostname: 'akm-img-a-in.tosshub.com/businesstoday/images/story/202309/f5blbclxwaaz9vf-sixteen_nine.jpg?size=948:533',
        },
        ],
    }

};

export default nextConfig;
