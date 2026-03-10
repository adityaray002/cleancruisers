const fs = require("fs");
const https = require("https");
const { SitemapStream, streamToPromise } = require("sitemap");

const hostname = "https://cleancruisers.in";

const pages = [
  "/",
  "/car-wash-in-dwarka",
  "/blog"
];

const blogPosts = [
  "why-doorstep-car-wash-is-future",
  "top-5-car-wash-service-providers-in-dwarka",
  "complete-guide-to-car-wax-protection",
  "interior-car-cleaning-tips",
  "monsoon-car-care-guide",
  "benefits-of-regular-car-washing",
  "choosing-right-car-wash-service"
];

blogPosts.forEach(slug => {
  pages.push(`/blog/${slug}`);
});

const sitemap = new SitemapStream({ hostname });

pages.forEach(url => {
  sitemap.write({
    url,
    changefreq: "weekly",
    priority: 0.8
  });
});

sitemap.end();

streamToPromise(sitemap).then(sm => {
  fs.writeFileSync("./public/sitemap.xml", sm.toString());
  console.log("✅ Sitemap generated!");

  // Ping Google
  const sitemapUrl = "https://cleancruisers.in/sitemap.xml";
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  https.get(pingUrl, res => {
    console.log("🚀 Google notified about sitemap update");
  }).on("error", err => {
    console.error("Error pinging Google:", err.message);
  });
});