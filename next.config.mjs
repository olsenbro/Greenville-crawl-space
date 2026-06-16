/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/crawl-space-encapsulation",
        destination: "/services/crawl-space-encapsulation",
        permanent: true,
      },
      {
        source: "/vapor-barrier",
        destination: "/services/vapor-barrier",
        permanent: true,
      },
      {
        source: "/crawl-space-repair",
        destination: "/services/crawl-space-repair",
        permanent: true,
      },
      {
        source: "/dehumidifier-installation",
        destination: "/services/dehumidifier-installation",
        permanent: true,
      },
      {
        source: "/mold-in-crawl-space",
        destination: "/services/mold-in-crawl-space",
        permanent: true,
      },
      {
        source: "/floor-joist-repair",
        destination: "/services/floor-joist-repair",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
