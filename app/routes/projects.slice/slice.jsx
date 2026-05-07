import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useLanguage } from '~/components/language-provider';
import styles from './slice.module.css';

const title = {
  es: 'MangaMukai — Plataforma de lectura de manga',
  en: 'MangaMukai — Manga reading platform',
};
const description = {
  es: 'Plataforma web completa de manga y manhwa en español con autenticación, monedas virtuales, suscripción premium y lector de capítulos. Construida con React, TypeScript y Supabase.',
  en: 'Complete web platform for manga and manhwa in Spanish with authentication, virtual coins, premium subscription, and chapter reader. Built with React, TypeScript and Supabase.',
};
const roles = {
  es: ['Desarrollo Frontend', 'React + TypeScript', 'Supabase Auth', 'Diseño UI/UX'],
  en: ['Frontend Development', 'React + TypeScript', 'Supabase Auth', 'UI/UX Design'],
};

export const meta = () => {
  return baseMeta({ title: title.es, description: description.es, prefix: 'Projects' });
};

export const Slice = () => {
  const { lang } = useLanguage();

  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
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
          url="https://github.com/ChemixX1"
          roles={roles[lang]}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
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
                  ? 'Manga readers needed a Spanish platform that went beyond just showing images. MangaMukai integrates secure authentication with Supabase, user profiles, and a virtual coin system to access premium content.'
                  : 'Los lectores de manga necesitaban una plataforma en español que fuera más allá de simplemente mostrar imágenes. MangaMukai integra autenticación segura con Supabase, perfiles de usuario y un sistema de monedas virtuales para acceder a contenido premium.'}
              </ProjectSectionText>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'The premium subscription unlocks early chapters and exclusive content, while the coin system allows individual purchases for those who prefer flexibility over a fixed subscription.'
                  : 'La suscripción premium desbloquea capítulos anticipados y contenido exclusivo, mientras que el sistema de monedas permite compras individuales para quienes prefieren flexibilidad sobre una suscripción fija.'}
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt={lang === 'en' ? 'User profile panel with virtual coin balance.' : 'Panel de perfil de usuario con saldo de monedas virtuales.'}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt={lang === 'en' ? 'Chapter reader view with navigation controls.' : 'Vista del lector de capítulos con controles de navegación.'}
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
                  ? 'The chapter reader was designed with user comfort in mind: support for vertical (webtoon) and horizontal modes, automatic reading progress saving, and seamless navigation between chapters without reloading the page. The reading history allows resuming exactly where the user left off.'
                  : 'El lector de capítulos fue diseñado pensando en la comodidad del usuario: soporte para modo vertical (webtoon) y horizontal, guardado automático del progreso de lectura y navegación fluida entre capítulos sin recargar la página. El historial de lectura permite retomar exactamente donde el usuario lo dejó.'}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt={lang === 'en' ? 'MangaMukai chapter reader with webtoon mode active.' : 'Lector de capítulos de MangaMukai con modo webtoon activo.'}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt={lang === 'en' ? 'Virtual coins and premium subscription options panel.' : 'Panel de monedas virtuales y opciones de suscripción premium.'}
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Integrated monetization' : 'Monetización integrada'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'The virtual coin system and premium subscription coexist without friction. Users can buy coins for individual chapters or activate the premium plan for unlimited access. Supabase manages permissions in real-time without requiring a page reload.'
                  : 'El sistema de monedas virtuales y la suscripción premium conviven sin fricciones. Los usuarios pueden comprar monedas para capítulos individuales o activar el plan premium para acceso ilimitado. Supabase gestiona los permisos en tiempo real sin requerir recarga de página.'}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                {lang === 'en' ? 'Project outcome' : 'Resultado del proyecto'}
              </ProjectSectionHeading>
              <ProjectSectionText>
                {lang === 'en'
                  ? 'MangaMukai offers a smooth reading experience with secure authentication, a catalog organized by genres and popularity, and a flexible monetization system that respects the user. The platform is built on React + TypeScript with Supabase as the backend, ensuring scalability and fast loading times in every reading session.'
                  : 'MangaMukai ofrece una experiencia de lectura fluida con autenticación segura, catálogo organizado por géneros y popularidad, y un sistema de monetización flexible que respeta al usuario. La plataforma está construida sobre React + TypeScript con Supabase como backend, garantizando escalabilidad y tiempos de carga rápidos en cada sesión de lectura.'}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt={lang === 'en' ? 'General view of MangaMukai showing the catalog and chapter reader.' : 'Vista general de MangaMukai mostrando el catálogo y el lector de capítulos.'}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectTestimonial
        quote={lang === 'en'
          ? "The platform is exactly what I was looking for: a smooth and well-organized Spanish reading experience. The coin system allows me to pay only for what I read without monthly subscription commitments."
          : "La plataforma es exactamente lo que buscaba: una experiencia de lectura en español fluida y bien organizada. El sistema de monedas me permite pagar solo lo que leo sin compromisos de suscripcion mensual."}
        name={lang === 'en' ? "Client — MangaMukai Project" : "Cliente — Proyecto MangaMukai"}
        role={lang === 'en' ? "Reader / manga platform" : "Lector / plataforma manga"}
        phone="+51 999 000 222"
        location={lang === 'en' ? "Lima, Peru" : "Lima, Peru"}
      />
      <Footer />
    </Fragment>
  );
};
