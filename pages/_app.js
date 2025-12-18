import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

const SITE = {
  name: 'Batu Eren',
  title: 'Batu Eren | Computer Science @ TU Delft',
  description:
    'Computer Science student at TU Delft focused on performance-oriented C++, systems programming, and graphics.',
  url: 'https://batueren.vercel.app', 
  ogImage: '/og.png'
}

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
        <link rel="canonical" href={SITE.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:image" content={`${SITE.url}${SITE.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE.title} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={`${SITE.url}${SITE.ogImage}`} />

        {/* RSS + font preload (keep yours) */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
