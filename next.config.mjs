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
    remotePatterns: [
      {
        pathname: "/**",
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "1.gravatar.com",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "cdn.pandascore.co",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "eposts7.wordpress.com",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "eposts7.files.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
