import { loadContactData } from './contact.server';

export { Contact as default, meta } from './contact';

export const loader = loadContactData;
