import mukaiTranslatorTexture from '~/assets/mukai-translator.png';
import mukaiWeb1Texture from '~/assets/mukai-web-1.png';
import mukaiWeb2Texture from '~/assets/mukai-web-2.png';
import ritzyLandingTexture from '~/assets/ritzy-landing.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import { useLanguage } from '~/components/language-provider';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Desarrollador + Diseñador',
    description: `Portafolio de ${config.name} — desarrollador web enfocado en aplicaciones web y móviles con énfasis en animación, experiencia de usuario y accesibilidad.`,
  });
};

const CONTENT = {
  es: {
    p1title: 'Mukai Translate',
    p1desc: 'Aplicación de escritorio en Python que traduce automáticamente manga, manhwa, comics y webtoons. Detecta texto con OCR, limpia el fondo con inpainting y traduce con GPT-4.1, Claude 4.5 o Gemini 2.5.',
    p2title: 'MangaMukai — Plataforma de lectura',
    p2desc: 'Plataforma web de manga y manhwa en espanol. React + TypeScript, Supabase auth, monedas virtuales, suscripcion premium y lector de capitulos.',
    p3title: 'RitzyStoreX — Landing de streaming',
    p3desc: 'Landing page de servicios de streaming con diseno moderno, animaciones fluidas y llamadas a la accion optimizadas para conversion.',
    btn: 'Ver proyecto',
  },
  en: {
    p1title: 'Mukai Translate',
    p1desc: 'Desktop Python app that automatically translates manga, manhwa, comics and webtoons. Detects text with OCR, cleans the background with inpainting, and translates using GPT-4.1, Claude 4.5 or Gemini 2.5.',
    p2title: 'MangaMukai — Reading Platform',
    p2desc: 'Web platform for manga and manhwa in Spanish. React + TypeScript, Supabase auth, virtual coins, premium subscription and chapter reader.',
    p3title: 'RitzyStoreX — Streaming Landing',
    p3desc: 'Landing page for streaming services with modern design, smooth animations and conversion-optimized calls to action.',
    btn: 'View project',
  },
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title={t.p1title}
        description={t.p1desc}
        buttonText={t.btn}
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Mukai-Translator interfaz de traduccion de comics',
          textures: [
            {
              srcSet: `${mukaiTranslatorTexture} 1280w, ${mukaiTranslatorTexture} 2560w`,
              placeholder: mukaiTranslatorTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title={t.p2title}
        description={t.p2desc}
        buttonText={t.btn}
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: 'MangaMukai plataforma de lectura de manga',
          textures: [
            {
              srcSet: `${mukaiWeb1Texture} 375w, ${mukaiWeb1Texture} 750w`,
              placeholder: mukaiWeb1Texture,
            },
            {
              srcSet: `${mukaiWeb2Texture} 375w, ${mukaiWeb2Texture} 750w`,
              placeholder: mukaiWeb2Texture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title={t.p3title}
        description={t.p3desc}
        buttonText={t.btn}
        buttonLink="/projects/volkihar-knight"
        model={{
          type: 'laptop',
          alt: 'RitzyStoreX landing page de servicios de streaming',
          textures: [
            {
              srcSet: `${ritzyLandingTexture} 800w, ${ritzyLandingTexture} 1920w`,
              placeholder: ritzyLandingTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
