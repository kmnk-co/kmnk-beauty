import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book",
        destination: "https://cal.com/kmnk-beauty",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
