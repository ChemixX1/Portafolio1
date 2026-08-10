import { useLanguage } from '~/components/language-provider';
import { Link } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './buen-dia.module.css';

export const meta = ({ matches }) => {
  return baseMeta({
    matches,
    title: 'Hecho con dedicación',
    description: 'Una breve nota sobre la intención detrás de mi trabajo.',
  });
};

export const BuenDia = () => {
  const { lang } = useLanguage();
  const isEnglish = lang === 'en';

  return (
    <main className={styles.page} data-theme="dark" data-invert>
      <Link className={styles.back} to="/">
        {isEnglish ? 'Return home' : 'Volver al inicio'}
      </Link>

      <article className={styles.note}>
        <header>
          <h1>
            {isEnglish
              ? 'Every challenge overcome takes me a little further'
              : 'Cada desafío superado me lleva un poco más lejos'}
          </h1>
          <p>{config.name}</p>
        </header>

        <p>
          {isEnglish
            ? 'I am motivated by the idea of turning what I know, what I learn and the ideas I imagine into something that can bring real value to the world.'
            : 'Me motiva la idea de convertir lo que sé, lo que aprendo y las ideas que imagino en algo que pueda aportar un valor real al mundo.'}
        </p>

        <p>
          {isEnglish
            ? 'I want to keep growing, take on increasingly ambitious challenges and build projects that leave a meaningful mark. I want to go far, achieve great things and enjoy every step it takes to get there.'
            : 'Quiero seguir creciendo, asumir retos cada vez más ambiciosos y construir proyectos que dejen una huella real. Quiero llegar lejos, lograr grandes cosas y disfrutar cada paso necesario para conseguirlo.'}
        </p>

        <p>
          {isEnglish
            ? 'This portfolio is a record of that process and of everything I continue learning along the way'
            : 'Este portafolio es un registro de ese proceso y de todo lo que continúo aprendiendo en el camino'}
        </p>
      </article>

      <p className={styles.date}>{new Date().getFullYear()}</p>
    </main>
  );
};
