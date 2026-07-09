export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: [
      'https://mahrajtechnologies.com/sitemap.xml',
      'https://mahrajtechnologies.com/static-sitemap.xml',
      'https://mahrajtechnologies.com/blog-sitemap.xml',
    ],
  }
}
