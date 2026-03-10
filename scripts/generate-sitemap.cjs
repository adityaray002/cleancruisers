const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const hostname = "https://cleancruisers.in";

const pages = [
  "/",
  "/car-wash-in-dwarka",
  "/blog"
];

// add blog pages manually or from your blogPosts array
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
  sitemap.write({ url, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(sm => {
  fs.writeFileSync("./public/sitemap.xml", sm.toString());
  console.log("Sitemap generated");
});