import { json } from '@remix-run/node';
import { commitSession, getSession } from '~/session.server';

export async function loadRootData(request) {
  const { url } = request;
  const { pathname } = new URL(url);
  const requestOrigin = new URL(url).origin;
  const siteUrl = (process.env.SITE_URL || requestOrigin).replace(/\/$/, '');
  const normalizedPathname =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const canonicalUrl = `${siteUrl}${normalizedPathname}`;

  const session = await getSession(request.headers.get('Cookie'));
  const theme = session.get('theme') || 'light';

  return json(
    { canonicalUrl, siteUrl, theme },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
