import { redirect } from '@remix-run/node';

export const loader = () => redirect('/projects/mukai-translator', 301);
