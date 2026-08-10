import mangamukaiHero from '~/assets/projects/mangamukai/hero.png';
import mangamukaiHeroLarge from '~/assets/projects/mangamukai/hero-large.png';
import mangamukaiHeroPlaceholder from '~/assets/projects/mangamukai/hero-placeholder.png';
import mangamukaiSidebar1 from '~/assets/projects/mangamukai/sidebar-1.png';
import mangamukaiSidebar1Large from '~/assets/projects/mangamukai/sidebar-1-large.png';
import mangamukaiSidebar1Placeholder from '~/assets/projects/mangamukai/sidebar-1-placeholder.png';
import mangamukaiSidebar2 from '~/assets/projects/mangamukai/sidebar-2.png';
import mangamukaiSidebar2Large from '~/assets/projects/mangamukai/sidebar-2-large.png';
import mangamukaiSidebar2Placeholder from '~/assets/projects/mangamukai/sidebar-2-placeholder.png';
import mangamukaiReader from '~/assets/projects/mangamukai/reader.png';
import mangamukaiReaderLarge from '~/assets/projects/mangamukai/reader-large.png';
import mangamukaiReaderPlaceholder from '~/assets/projects/mangamukai/reader-placeholder.png';
import mangamukaiMoney1 from '~/assets/projects/mangamukai/payments-1.png';
import mangamukaiMoney1Large from '~/assets/projects/mangamukai/payments-1-large.png';
import mangamukaiMoney1Placeholder from '~/assets/projects/mangamukai/payments-1-placeholder.png';
import mangamukaiMoney2 from '~/assets/projects/mangamukai/payments-2.png';
import mangamukaiMoney2Large from '~/assets/projects/mangamukai/payments-2-large.png';
import mangamukaiMoney2Placeholder from '~/assets/projects/mangamukai/payments-2-placeholder.png';
import mangamukaiResultLarge from '~/assets/projects/mangamukai/result-large.jpg';
import mangamukaiResultPlaceholder from '~/assets/projects/mangamukai/result-placeholder.jpg';
import sliceBackgroundLarge from '~/assets/projects/mangamukai/result-background-large.webp';
import sliceBackgroundPlaceholder from '~/assets/projects/mangamukai/result-background-placeholder.webp';
import sliceBackground from '~/assets/projects/mangamukai/result-background.webp';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTestimonial,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, useEffect, useState } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useLanguage } from '~/components/language-provider';
import styles from './mangamukai.module.css';

const title = {
  es: 'MangaMukai — Plataforma de lectura',
  en: 'MangaMukai — Manga reading platform',
};
const description = {
  es: 'Plataforma web responsive para lectura y gestión de mangas en español, con catálogo, lector optimizado, comentarios, likes, monedas virtuales, recargas y suscripciones premium.',
  en: 'Responsive web platform for reading and managing Spanish manga, with catalog browsing, an optimized reader, comments, likes, virtual coins, top-ups, and premium subscriptions.',
};
const roles = {
  es: ['React + TypeScript', 'WordPress + PHP', 'REST API propia', 'PayPal + myCred'],
  en: ['React + TypeScript', 'WordPress + PHP', 'Custom REST API', 'PayPal + myCred'],
};

export const meta = ({ matches }) => {
  return baseMeta({
    title: title.es,
    description: description.es,
    prefix: 'Projects',
    matches,
  });
};

const Slideshow = ({ slides, theme, interval = 14000 }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(current => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={styles.slideshow}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.slideshowItem}
          data-active={index === active}
          aria-hidden={index !== active}
        >
          <Image
            transitionKey={theme}
            srcSet={slide.srcSet}
            placeholder={slide.placeholder}
            width={slide.width}
            height={slide.height}
            alt={slide.alt}
            sizes={`(max-width: ${media.mobile}px) 80vw, 420px`}
          />
        </div>
      ))}
    </div>
  );
};

export const MangaMukai = () => {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  return (
    <Fragment>
      <ProjectContainer className={styles.project}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title[lang]}
          description={description[lang]}
          linkLabel={lang === 'en' ? 'Visit website' : 'Visitar sitio web'}
          url="https://www.mangamukai.com/"
          roles={roles[lang]}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              transitionKey={theme}
              srcSet={`${mangamukaiHero} 800w, ${mangamukaiHeroLarge} 1586w`}
              width={1586}
              height={992}
              placeholder={mangamukaiHeroPlaceholder}
              alt={lang === 'en' ? 'Main interface of MangaMukai showing the manga catalog.' : 'Interfaz principal de MangaMukai mostrando el catálogo de manga.'}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Complete experience' : 'Experiencia completa'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'MangaMukai was designed as a Spanish manga platform that goes beyond simply displaying pages. Users can explore a complete catalog, filter by categories, open detail pages, follow the latest updates, comment, like chapters, and continue reading from a fast responsive interface.'
                  : 'MangaMukai fue diseñada como una plataforma de manga en español que va más allá de mostrar páginas. Los usuarios pueden explorar un catálogo completo, filtrar por categorías, abrir páginas de detalle, ver últimas actualizaciones, comentar, dar likes y leer desde una interfaz rápida y responsive.'}
              </ProjectSectionText>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'The frontend is built with React, TypeScript, Vite and Tailwind CSS, while WordPress works as the CMS through custom PHP logic, dedicated REST endpoints and a MySQL/MariaDB database for manga, chapters, users, comments, likes, coins and premium content.'
                  : 'El frontend está desarrollado con React, TypeScript, Vite y Tailwind CSS, mientras que WordPress funciona como CMS mediante lógica personalizada en PHP, endpoints REST propios y una base de datos MySQL/MariaDB para mangas, capítulos, usuarios, comentarios, likes, monedas y contenido premium.'}
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                transitionKey={theme}
                className={styles.sidebarImage}
                srcSet={`${mangamukaiSidebar2} 350w, ${mangamukaiSidebar2Large} 407w`}
                width={407}
                height={850}
                placeholder={mangamukaiSidebar2Placeholder}
                alt={lang === 'en' ? 'Chapter reader view with navigation controls.' : 'Vista del lector de capítulos con controles de navegación.'}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                transitionKey={theme}
                className={styles.sidebarImage}
                srcSet={`${mangamukaiSidebar1} 350w, ${mangamukaiSidebar1Large} 507w`}
                width={507}
                height={1026}
                placeholder={mangamukaiSidebar1Placeholder}
                alt={lang === 'en' ? 'User profile panel with virtual coin balance.' : 'Panel de perfil de usuario con saldo de monedas virtuales.'}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Optimized reader' : 'Lector optimizado'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'The chapter reader is optimized for mobile, tablet and desktop, with lazy loading, WebP/AVIF image delivery, cache-friendly assets and a clear interface that keeps the reading flow focused. Manga detail metadata updates dynamically so each title is easier to share and discover.'
                  : 'El lector de capítulos está optimizado para móvil, tablet y escritorio, con lazy loading, imágenes en WebP/AVIF, assets preparados para caché y una interfaz clara que mantiene el foco en la lectura. Los metadatos de cada detalle de manga se generan de forma dinámica para facilitar que cada título se comparta y se descubra.'}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              transitionKey={theme}
              srcSet={`${mangamukaiReader} 800w, ${mangamukaiReaderLarge} 1586w`}
              width={1586}
              height={992}
              placeholder={mangamukaiReaderPlaceholder}
              alt={lang === 'en' ? 'MangaMukai chapter reader with webtoon mode active.' : 'Lector de capítulos de MangaMukai con modo webtoon activo.'}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <Slideshow
                theme={theme}
                slides={[
                  {
                    srcSet: `${mangamukaiMoney1} 440w, ${mangamukaiMoney1Large} 452w`,
                    placeholder: mangamukaiMoney1Placeholder,
                    width: 452,
                    height: 950,
                    alt: lang === 'en' ? 'Virtual coin top-up modal.' : 'Modal de recarga de monedas virtuales.',
                  },
                  {
                    srcSet: `${mangamukaiMoney2} 440w, ${mangamukaiMoney2Large} 446w`,
                    placeholder: mangamukaiMoney2Placeholder,
                    width: 446,
                    height: 945,
                    alt: lang === 'en' ? 'Premium subscription modal.' : 'Modal de suscripción premium.',
                  },
                ]}
              />
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Integrated monetization' : 'Monetización integrada'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'Premium features are handled through myCred virtual coins, top-up flows and subscription options. PayPal payments are integrated into custom modals so users can recharge their balance, unlock premium content or manage access without leaving the reading experience.'
                  : 'Las funciones premium se gestionan con monedas virtuales de myCred, flujos de recarga y opciones de suscripción. Los pagos con PayPal están integrados en modales personalizados para que el usuario pueda recargar saldo, desbloquear contenido premium o gestionar su acceso sin abandonar la experiencia de lectura.'}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          className={styles.resultSection}
          backgroundElement={
            <Image
              srcSet={`${mangamukaiResultLarge} 2560w`}
              width={2560}
              height={1440}
              placeholder={mangamukaiResultPlaceholder}
              alt={lang === 'en' ? 'MangaMukai result section background.' : 'Fondo de la seccion de resultado de MangaMukai.'}
              sizes="100vw"
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Project outcome' : 'Resultado del proyecto'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'The result is a responsive manga platform built for fast discovery, comfortable reading and simple premium access. MangaMukai brings together catalog browsing, detail pages, latest updates, an optimized chapter reader, comments, likes, virtual coins, top-ups and subscriptions in a single experience designed to keep readers moving from search to chapter without unnecessary steps.'
                  : 'El resultado es una plataforma responsive de mangas pensada para descubrir títulos rápido, leer con comodidad y acceder a funciones premium de forma sencilla. MangaMukai reúne catálogo, páginas de detalle, últimas actualizaciones, lector optimizado, comentarios, likes, monedas virtuales, recargas y suscripciones en una experiencia fluida que lleva al lector de la búsqueda al capítulo sin pasos innecesarios.'}
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectTestimonial
        quote={lang === 'en'
          ? "The website turned out great, completely different from what we had before. I really liked the modern result achieved, highly recommended."
          : "La pagina quedó genial, totalmente distinto a lo que teniamos antes realmente me gustó mucho el resultado moderno que se logró, totalmente recomendado :)"}
        name={lang === 'en' ? "Erick Dan" : "Erick Dan"}
        occupation={lang === 'en' ? "Reader / manga platform" : "Dueño Mukai Translator - Manga Mukai.com"}
        phone="+51 926 615 198"
        location={lang === 'en' ? "Lima, Peru" : "Lima, Peru"}
      />
      <Footer />
    </Fragment>
  );
};
