import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable ESLint during build
    eslint: {
        ignoreDuringBuilds: true,
    },
    
    // Enable image optimization - remove unoptimized setting
    images: {
        domains: [], // Add any external image domains you use
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },

    // Enable compression for better performance
    compress: true,

    // Enable production source maps
    productionBrowserSourceMaps: true,

    // Add poweredByHeader option (optional)
    poweredByHeader: false,

    // output standalone removed to allow using `next start` in production
};

const analyzeBundleConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig);

export default withSentryConfig(analyzeBundleConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "samuel-eke",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Option 1: Delete source maps after upload to keep them from being served in production
    sourcemaps: {
        deleteSourcemapsAfterUpload: true,
    },
});
