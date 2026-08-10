import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loader({ request, context }) {
  const slug = request.url.split('/').at(-1);
  const module = await import(`../experience.${slug}.mdx`);
  const text = await import(`../experience.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const requestOrigin = new URL(request.url).origin;
  const siteUrl = (context.cloudflare.env.SITE_URL || requestOrigin).replace(/\/$/, '');
  const ogImage = `${siteUrl}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}

export function meta({ data, matches }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({
    title,
    description: abstract,
    prefix: '',
    ogImage: data.ogImage,
    matches,
  });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
