/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        permanent: false,
        destination: "/noticias",
      },
    ];
  },
  images: {
    domains: [
      "i.ibb.co",
      "cdn.pandascore.co",
      "eposts7.wordpress.com",
      "eposts7.files.wordpress.com",
    ],
  },
};

export default nextConfig;
