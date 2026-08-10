import { redirect } from '@remix-run/cloudflare';

export const loader = () => redirect('/projects/ritzystorex', 301);
