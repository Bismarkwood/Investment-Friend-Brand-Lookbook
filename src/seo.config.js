/* ============================================================
   SEO CONFIG — single source of truth for site-wide metadata.

   ⚠️ SET SITE_URL to the real production domain (no trailing
   slash). Canonical tags, Open Graph URLs and the sitemap are
   all derived from it, so this one line matters.
   ============================================================ */

export const SITE_URL = 'https://www.investmentfriend.com';

export const SITE_NAME = 'Investment Friend';

export const SITE_TAGLINE = 'Financial Education in Ghana';

export const DEFAULT_TITLE = 'Investment Friend | Financial Education in Ghana';

export const DEFAULT_DESCRIPTION =
    'Investment Friend is a financial education platform in Ghana. Learn to budget, save and understand investing through practical classes, personal coaching, learning clubs and free tools.';

/* Social preview image. Replace with a 1200x630 branded image when one exists. */
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

export const LOCALE = 'en_GH';

export const SOCIAL_PROFILES = [
    'https://www.linkedin.com/company/investment-friend',
    'https://www.instagram.com/investment_friend/',
    'https://www.tiktok.com/@investment_friend'
];

/* Absolute URL for any site-relative path */
export function absoluteUrl(path = '/') {
    if (!path) return SITE_URL;
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/* 'Sep 10, 2026' -> '2026-09-10' for schema.org date fields */
export function toIsoDate(value) {
    if (!value) return undefined;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}

/* ---------- Reusable structured data ---------- */

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: 'Investment Friend Ghana',
    url: SITE_URL,
    logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.png')
    },
    description: DEFAULT_DESCRIPTION,
    areaServed: {
        '@type': 'Country',
        name: 'Ghana'
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Accra',
        addressRegion: 'Greater Accra',
        addressCountry: 'GH'
    },
    knowsAbout: [
        'Personal finance',
        'Budgeting',
        'Saving',
        'Investing',
        'Financial literacy',
        'Wealth building'
    ],
    sameAs: SOCIAL_PROFILES
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en',
    publisher: {
        '@id': `${SITE_URL}/#organization`
    }
};

/* Breadcrumbs: pass [{ name, path }] ordered from home downwards */
export function breadcrumbSchema(items = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path)
        }))
    };
}

/* Article / blog post */
export function articleSchema({
    title,
    description,
    path,
    image,
    date,
    author
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: image ? [absoluteUrl(image)] : undefined,
        datePublished: toIsoDate(date),
        dateModified: toIsoDate(date),
        author: {
            '@type': 'Person',
            name: author || SITE_NAME
        },
        publisher: {
            '@id': `${SITE_URL}/#organization`
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(path)
        },
        isAccessibleForFree: true,
        inLanguage: 'en'
    };
}

/* FAQ blocks help both search engines and AI answer engines */
export function faqSchema(items = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };
}

/* Course / class offering */
export function courseSchema({
    name,
    description,
    path
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name,
        description,
        url: absoluteUrl(path),
        provider: {
            '@id': `${SITE_URL}/#organization`
        },
        inLanguage: 'en'
    };
}

/* Service offering (coaching, clubs) */
export function serviceSchema({
    name,
    description,
    path,
    serviceType
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        serviceType,
        url: absoluteUrl(path),
        provider: {
            '@id': `${SITE_URL}/#organization`
        },
        areaServed: {
            '@type': 'Country',
            name: 'Ghana'
        }
    };
}

/* Blog index */
export function blogSchema({
    name,
    description,
    path,
    posts = []
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name,
        description,
        url: absoluteUrl(path),
        publisher: {
            '@id': `${SITE_URL}/#organization`
        },
        inLanguage: 'en',
        blogPost: posts.slice(0, 10).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: absoluteUrl(`/blog/${post.id}`),
            datePublished: toIsoDate(post.date),
            author: {
                '@type': 'Person',
                name: post.author
            }
        }))
    };
}