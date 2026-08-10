import { redirect } from '@remix-run/node';

export const loader = () => redirect('/projects/ritzystorex', 301);
