/** @type {import('next').NextConfig} */
import nextPWA from "@ducanh2912/next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: false,
  swcMinify: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

const nextConfig = withPWA({
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
      {
        pathname: "/**",
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        pathname: "/**",
        protocol: "https",
        hostname: "yt3.ggpht.com",
      },
    ],
  },
});

export default nextConfig;
