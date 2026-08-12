import { json } from '@remix-run/node';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loadExperienceData(request) {
  const slug = request.url.split('/').at(-1);
  const module = await import(`../experience.${slug}.mdx`);
  const text = await import(`../experience.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const requestOrigin = new URL(request.url).origin;
  const siteUrl = (process.env.SITE_URL || requestOrigin).replace(/\/$/, '');
  const ogImage = `${siteUrl}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}
