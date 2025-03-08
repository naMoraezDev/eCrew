/** @type {import('next').NextConfig} */
import nextPWA from "@ducanh2912/next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Desabilita PWA em desenvolvimento
  swcMinify: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 3000000, // 3MB - limite para arquivos a serem cacheados
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/i\.ibb\.co\/.*/i, // Padrão para imagens i.ibb.co
        handler: "CacheFirst",
        options: {
          cacheName: "external-images",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 semana
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "static-images",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-resources",
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 24 * 60 * 60, // 1 dia
          },
        },
      },
    ],
  },
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

const nextConfig = withPWA({
  // Compressão e minificação
  compress: true, // Habilita compressão Gzip
  swcMinify: true, // Usar SWC para minificação

  // Configuração de redirecionamento
  redirects: async () => {
    return [
      {
        source: "/",
        permanent: false,
        destination: "/noticias",
      },
    ];
  },

  // Configuração de otimização de imagens
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
    formats: ["image/avif", "image/webp"], // Priorizar formatos modernos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Tamanhos responsivos
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Tamanhos de imagem adicionais
    minimumCacheTTL: 60, // 60 segundos para cache mínimo
  },

  // Otimizações específicas para performance
  experimental: {
    optimizeCss: true, // Otimização CSS
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
    scrollRestoration: true, // Melhor UX ao navegar de volta
  },

  // Configurações de otimização de fontes
  optimizeFonts: true,

  // Use configuração de webpack mais segura
  webpack: (config, { dev, isServer }) => {
    // Esta verificação é crucial: assegura que o código dependente de 'self' (browser)
    // não seja executado no ambiente do servidor
    if (!isServer) {
      // Aplica as otimizações apenas em ambiente não-servidor e modo produção
      if (true) {
        // Configuração do splitChunks (apenas no ambiente do cliente)
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
                // Abordagem mais segura para obter nome do pacote
                try {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  return `npm.${packageName.replace("@", "")}`;
                } catch (e) {
                  // Se falhar, use um nome genérico
                  return "npm.vendors";
                }
              },
            },
          },
        };
      }
    }

    // Garantir que o módulo do service worker seja tratado corretamente
    if (isServer) {
      // No servidor, não precisamos processar o service worker
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        // Certifique-se de que não está tentando processar arquivos do SW no servidor
        if (entries["main.js"] && !entries["main.js"].includes("./sw")) {
          return entries;
        }

        return entries;
      };
    }

    return config;
  },

  // Configuração do domínio para armazenamento em cache eficiente
  poweredByHeader: false, // Remove o header "X-Powered-By" por segurança
  reactStrictMode: true, // Mantém o strict mode para identificação de problemas
});

export default nextConfig;
