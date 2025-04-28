/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  swcMinify: true,

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
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@radix-ui/react-dialog",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@radix-ui/react-tooltip",
    ],
    scrollRestoration: true,
  },

  optimizeFonts: true,

  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      if (true) {
        config.optimization.splitChunks = {
          chunks: "all",
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: "all",
              name: "framework",
              test: /[\\/]node_modules[\\/](@next|next|react|react-dom)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: "commons",
              chunks: "all",
              minChunks: 2,
              priority: 20,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              priority: 30,
              minChunks: 2,
              name(module) {
                try {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  return `npm.${packageName.replace("@", "")}`;
                } catch (e) {
                  return "npm.vendors";
                }
              },
            },
          },
        };
      }
    }

    if (isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        if (entries["main.js"] && !entries["main.js"].includes("./sw")) {
          return entries;
        }

        return entries;
      };
    }

    return config;
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
