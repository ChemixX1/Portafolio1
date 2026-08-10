import ritzyBackground from '~/assets/projects/ritzystorex/hero.jpg';
import ritzyBackgroundLarge from '~/assets/projects/ritzystorex/hero-large.jpg';
import ritzyBackgroundPlaceholder from '~/assets/projects/ritzystorex/hero-placeholder.jpg';
import ritzyLanding from '~/assets/projects/ritzystorex/landing.png';
import ritzyLandingLarge from '~/assets/projects/ritzystorex/landing-large.png';
import ritzyLandingPlaceholder from '~/assets/projects/ritzystorex/landing-placeholder.png';
import ritzyStoreCatalog from '~/assets/projects/ritzystorex/catalog.png';
import ritzyStoreCatalogLarge from '~/assets/projects/ritzystorex/catalog-large.png';
import ritzyStoreCatalogPlaceholder from '~/assets/projects/ritzystorex/catalog-placeholder.png';
import ritzyStoreVideo from '~/assets/projects/ritzystorex/showcase.mp4';
import ritzyGengar from '~/assets/projects/ritzystorex/result-background.jpg';
import ritzyGengarLarge from '~/assets/projects/ritzystorex/result-background-large.jpg';
import ritzyGengarPlaceholder from '~/assets/projects/ritzystorex/result-background-placeholder.jpg';
import { Button } from '~/components/button';
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
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './ritzystorex.module.css';

const title = 'RitzyStoreX';
const description =
  'Landing comercial responsive para explorar servicios de streaming, aplicaciones, inteligencia artificial, gaming y crecimiento social. Incluye buscador, filtros, fichas de producto y contacto directo.';
const roles = [
  'React + Css',
  'Responsive',
  'Catalogo filtrable',
  'Landing comercial',
];

export const meta = ({ matches }) => {
  return baseMeta({ title, description, prefix: 'Projects', matches });
};

export function RitzyStoreX() {
  const { theme } = useTheme();

  return (
    <Fragment>
      <ProjectContainer className={styles.project}>
        <ProjectBackground
          src={ritzyGengar}
          srcSet={`${ritzyGengarLarge} 1536w`}
          width={1265}
          height={712}
          placeholder={ritzyGengarPlaceholder}
          opacity={0.84}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Visitar RitzyStoreX"
          url="https://ritzystorex.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              transitionKey={theme}
              src={ritzyLanding}
              srcSet={`${ritzyLandingLarge} 1893w`}
              width={1893}
              height={1019}
              placeholder={ritzyLandingPlaceholder}
              alt="Portada de RitzyStoreX con su propuesta de servicios digitales y accesos principales."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1100px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionColumns centered>
            <div className={styles.textSection}>
              <ProjectSectionHeading>El objetivo</ProjectSectionHeading>
              <ProjectSectionText>
                RitzyStoreX necesitaba presentar una oferta diversa sin convertir la
                pagina en una lista dificil de recorrer. La experiencia organiza
                streaming, apps, herramientas de IA, gaming y servicios sociales dentro
                de un recorrido comercial claro.
              </ProjectSectionText>
              <ProjectSectionText>
                Desde la portada se comunica la propuesta de valor y se conduce al
                visitante hacia el catalogo. Cada ficha resume el servicio y abre una
                ventana con descripcion, modalidad, precio y canales de compra.
              </ProjectSectionText>
            </div>
            <Image
              raised
              transitionKey={theme}
              className={styles.objectiveMedia}
              srcSet={`${ritzyStoreVideo} 1920w`}
              width={1920}
              height={1080}
              alt="Demostración en video de la experiencia y el catálogo de RitzyStoreX."
              sizes={`(max-width: ${media.tablet}px) 100vw, 50vw`}
            />
          </ProjectSectionColumns>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Catalogo facil de explorar</ProjectSectionHeading>
              <ProjectSectionText>
                Un buscador y filtros por categoria reducen el tiempo necesario para
                encontrar cada servicio. Las tarjetas priorizan la marca, el nombre y la
                valoracion para que el usuario pueda comparar opciones de un vistazo.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              raised
              transitionKey={theme}
              src={ritzyStoreCatalog}
              srcSet={`${ritzyStoreCatalogLarge} 1893w`}
              width={1893}
              height={1052}
              placeholder={ritzyStoreCatalogPlaceholder}
              alt="Catalogo de RitzyStoreX con buscador, filtros y tarjetas de servicios digitales."
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection
          className={styles.resultSection}
          backgroundElement={
            <Image
              src={ritzyBackground}
              srcSet={`${ritzyBackgroundLarge} 1536w`}
              width={1265}
              height={712}
              placeholder={ritzyBackgroundPlaceholder}
              alt="Portada de RitzyStoreX utilizada como fondo del resultado del proyecto."
              sizes="100vw"
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Resultado del proyecto</ProjectSectionHeading>
              <ProjectSectionText>
                El resultado es una landing responsive que convierte una oferta amplia en
                un recorrido sencillo: entender la propuesta, filtrar el catalogo, revisar
                un producto y contactar para comprar. La identidad visual oscura, los
                acentos de color y las transiciones refuerzan el caracter digital de la
                marca sin competir con la informacion principal.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://ritzystorex.com/"
              >
                Visitar RitzyStoreX
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
