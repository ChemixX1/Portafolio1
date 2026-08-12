import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import { loadExperienceData } from './loader.server';

export async function loader({ request }) {
  return loadExperienceData(request);
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
