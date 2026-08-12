import { json } from '@remix-run/node';

export function loadContactData() {
  return json({ accessKey: process.env.WEB3FORMS_ACCESS_KEY });
}
