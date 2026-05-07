import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
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
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const title = 'RitzyStoreX — Landing de streaming';
const description =
  'Landing page de servicios de streaming con diseño moderno, animaciones fluidas y llamadas a la acción optimizadas para conversión. Construida con enfoque en performance y UX.';
const roles = ['Desarrollo Web', 'Diseño Visual', 'Animaciones CSS', 'Optimización CRO'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Ver proyecto"
          url="https://github.com/ChemixX1"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="Vista principal de la landing page de RitzyStoreX con hero section y CTA."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.textSection}>
              <ProjectSectionHeading>El objetivo</ProjectSectionHeading>
              <ProjectSectionText>
                RitzyStoreX necesitaba una landing page que comunicara valor de forma
                inmediata y guiara al visitante hacia la conversión. El diseño prioriza
                la jerarquía visual clara, con una hero section de impacto y secciones
                de beneficios bien estructuradas.
              </ProjectSectionText>
              <ProjectSectionText>
                Las animaciones de entrada y transiciones suaves entre secciones refuerzan
                la sensación de producto premium sin sacrificar el rendimiento de carga.
                Cada elemento fue posicionado estratégicamente para maximizar el tiempo
                de atención del usuario.
              </ProjectSectionText>
            </div>
            <div className={styles.armor}>
              <Image
                srcSet={`${volkiharBook} 490w, ${volkiharBookLarge} 960w`}
                width={480}
                height={300}
                placeholder={volkiharBookPlaceholder}
                alt="Detalle del diseño visual de RitzyStoreX mostrando la paleta de colores y tipografía."
                sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Identidad visual</ProjectSectionHeading>
              <ProjectSectionText>
                La paleta de colores y la tipografía fueron seleccionadas para transmitir
                modernidad y confianza. El contraste entre fondos oscuros y elementos de
                acento brillantes crea la sensación premium que busca la marca, mientras
                que los gradientes suaves aportan profundidad sin distraer al usuario del
                mensaje principal.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: "Seccion hero de RitzyStoreX con headline principal y boton CTA.",
                  },
                  {
                    srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: "Seccion de planes y precios con tarjetas comparativas.",
                  },
                  {
                    srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: "Seccion de caracteristicas con iconos y animaciones de entrada.",
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="Fondo decorativo de la sección de resultados de RitzyStoreX."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Resultado del proyecto</ProjectSectionHeading>
              <ProjectSectionText>
                La landing page de RitzyStoreX combina un diseño visualmente atractivo
                con una estructura orientada a la conversión. Las animaciones fluidas
                mejoran la percepción de calidad del producto, mientras que la
                arquitectura de secciones guía naturalmente al usuario desde el interés
                inicial hasta la acción de compra.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/ChemixX1"
              >
                Ver en GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectTestimonial
        quote="La landing page comunica exactamente el valor del servicio desde el primer scroll. Las animaciones se sienten naturales y profesionales, y el diseno logra que el usuario quiera seguir explorando sin sentirse abrumado."
        name="Cliente — Proyecto RitzyStoreX"
        role="Emprendedor / servicios digitales"
        phone="+51 999 000 333"
        location="Lima, Peru"
      />
      <Footer />
    </Fragment>
  );
}
