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
        hostname: "ecrew7.wordpress.com",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "ecrew7.files.wordpress.com",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        pathname: "/**",
        protocol: "http",
        hostname: "15.228.88.214",
      },
      {
        pathname: "/**",
        protocol: "http",
        hostname: "0.gravatar.com",
      },
      {
        pathname: "/**",
        protocol: "http",
        hostname: "1.gravatar.com",
      },
      {
        pathname: "/**",
        protocol: "http",
        hostname: "2.gravatar.com",
      },
    ],
  },
};

export default nextConfig;
