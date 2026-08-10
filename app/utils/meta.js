import config from '~/config.json';

const { name, url: fallbackUrl, twitter } = config;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage,
  matches,
}) {
  const rootData = matches?.find(match => match.id === 'root')?.data;
  const siteUrl = (rootData?.siteUrl || fallbackUrl).replace(/\/$/, '');
  const canonicalUrl = rootData?.canonicalUrl || siteUrl;
  const resolvedOgImage = ogImage || `${siteUrl}/social-image.png`;
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    { property: 'og:image', content: resolvedOgImage },
    { property: 'og:image:alt', content: 'Banner for the site' },
    { property: 'og:image:width', content: '1280' },
    { property: 'og:image:height', content: '800' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: twitter },
    { property: 'twitter:creator', content: twitter },
    { property: 'twitter:image', content: resolvedOgImage },
  ];
}
