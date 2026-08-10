import { redirect } from '@remix-run/cloudflare';

export const loader = () => redirect('/projects/mukai-translator', 301);
