import { baseMeta } from '~/utils/meta';

export function meta({ matches }) {
  return baseMeta({
    matches,
    title: 'Experiencia',
    description:
      'Trayectoria profesional de Jose Manuel Mejia Medina en instituciones públicas de Apurímac.',
  });
}

export { Experience as default } from './articles';
