/* ============================================================
   Generates public/sitemap.xml from the route list and the blog
   data, so the sitemap never drifts from the actual site.
   Runs automatically before `npm run build` (prebuild).
   ============================================================ */

import {
    writeFileSync
} from 'node:fs';
import {
    fileURLToPath
} from 'node:url';
import {
    dirname,
    resolve
} from 'node:path';
import {
    SITE_URL
} from '../src/seo.config.js';
import {
    BLOG_POSTS
} from '../src/data/blogData.js';

const here = dirname(fileURLToPath(
    import.meta.url));
const outFile = resolve(here, '../public/sitemap.xml');

/* Only canonical URLs belong here. Short aliases such as /club or
   /blog are intentionally left out; they canonicalise to these. */
const STATIC_ROUTES = [{
        path: '/',
        changefreq: 'weekly',
        priority: '1.0'
    },
    {
        path: '/about',
        changefreq: 'monthly',
        priority: '0.8'
    },
    {
        path: '/service/classes',
        changefreq: 'weekly',
        priority: '0.9'
    },
    {
        path: '/service/coaching',
        changefreq: 'weekly',
        priority: '0.9'
    },
    {
        path: '/service/club',
        changefreq: 'weekly',
        priority: '0.9'
    },
    {
        path: '/resources/blog',
        changefreq: 'weekly',
        priority: '0.8'
    },
    {
        path: '/resources/tools',
        changefreq: 'monthly',
        priority: '0.7'
    },
    {
        path: '/contact',
        changefreq: 'monthly',
        priority: '0.7'
    },
    {
        path: '/brand',
        changefreq: 'yearly',
        priority: '0.3'
    },
    {
        path: '/privacy',
        changefreq: 'yearly',
        priority: '0.2'
    },
    {
        path: '/terms',
        changefreq: 'yearly',
        priority: '0.2'
    },
    {
        path: '/cookies',
        changefreq: 'yearly',
        priority: '0.2'
    }
];

function isoDate(value) {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ?
        new Date().toISOString().slice(0, 10) :
        parsed.toISOString().slice(0, 10);
}

function escapeXml(value) {
    return String(value).replace(/[<>&'"]/g, (char) => ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;'
    } [char]));
}

const today = new Date().toISOString().slice(0, 10);

const entries = [
    ...STATIC_ROUTES.map((route) => ({
        loc: `${SITE_URL}${route.path}`,
        lastmod: today,
        changefreq: route.changefreq,
        priority: route.priority
    })),
    ...BLOG_POSTS.map((post) => ({
        loc: `${SITE_URL}/blog/${post.id}`,
        lastmod: isoDate(post.date),
        changefreq: 'monthly',
        priority: '0.6'
    }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(outFile, xml, 'utf8');
console.log(`sitemap.xml written with ${entries.length} URLs (${SITE_URL})`);