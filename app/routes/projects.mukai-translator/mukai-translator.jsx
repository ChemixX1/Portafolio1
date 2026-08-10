import mukaiBackgroundLarge from '~/assets/projects/mukai-translator/hero-large.jpg';
import mukaiBackgroundPlaceholder from '~/assets/projects/mukai-translator/hero-placeholder.jpg';
import mukaiBackground from '~/assets/projects/mukai-translator/hero.jpg';
import imageMukaiMainDarkLarge from '~/assets/projects/mukai-translator/main-dark-large.png';
import imageMukaiMainDarkPlaceholder from '~/assets/projects/mukai-translator/main-dark-placeholder.png';
import imageMukaiMainDark from '~/assets/projects/mukai-translator/main-dark.png';
import imageMukaiMainLightLarge from '~/assets/projects/mukai-translator/main-light-large.png';
import imageMukaiMainLightPlaceholder from '~/assets/projects/mukai-translator/main-light-placeholder.png';
import imageMukaiMainLight from '~/assets/projects/mukai-translator/main-light.png';
import imageMukaiCompositionDarkLarge from '~/assets/projects/mukai-translator/composition-dark-large.png';
import imageMukaiCompositionDarkPlaceholder from '~/assets/projects/mukai-translator/composition-dark-placeholder.png';
import imageMukaiCompositionDark from '~/assets/projects/mukai-translator/composition-dark.png';
import imageMukaiCompositionLightLarge from '~/assets/projects/mukai-translator/composition-light-large.png';
import imageMukaiCompositionLightPlaceholder from '~/assets/projects/mukai-translator/composition-light-placeholder.png';
import imageMukaiCompositionLight from '~/assets/projects/mukai-translator/composition-light.png';
import imageMukaiConfigDarkPlaceholder from '~/assets/projects/mukai-translator/configuration-dark-placeholder.png';
import imageMukaiConfigDark from '~/assets/projects/mukai-translator/configuration-dark.png';
import imageMukaiConfigLightPlaceholder from '~/assets/projects/mukai-translator/configuration-light-placeholder.png';
import imageMukaiConfigLight from '~/assets/projects/mukai-translator/configuration-light.png';
import imageMukaiFormatsDarkPlaceholder from '~/assets/projects/mukai-translator/formats-dark-placeholder.png';
import imageMukaiFormatsDark from '~/assets/projects/mukai-translator/formats-dark.png';
import imageMukaiFormatsLightPlaceholder from '~/assets/projects/mukai-translator/formats-light-placeholder.png';
import imageMukaiFormatsLight from '~/assets/projects/mukai-translator/formats-light.png';
import imageMukaiLanguagesDarkPlaceholder from '~/assets/projects/mukai-translator/languages-dark-placeholder.png';
import imageMukaiLanguagesDark from '~/assets/projects/mukai-translator/languages-dark.png';
import imageMukaiLanguagesLightPlaceholder from '~/assets/projects/mukai-translator/languages-light-placeholder.png';
import imageMukaiLanguagesLight from '~/assets/projects/mukai-translator/languages-light.png';
import imageMukaiWorkspaceDarkLarge from '~/assets/projects/mukai-translator/workspace-dark-large.png';
import imageMukaiWorkspaceDarkPlaceholder from '~/assets/projects/mukai-translator/workspace-dark-placeholder.png';
import imageMukaiWorkspaceDark from '~/assets/projects/mukai-translator/workspace-dark.png';
import imageMukaiWorkspaceLightLarge from '~/assets/projects/mukai-translator/workspace-light-large.png';
import imageMukaiWorkspaceLightPlaceholder from '~/assets/projects/mukai-translator/workspace-light-placeholder.png';
import imageMukaiWorkspaceLight from '~/assets/projects/mukai-translator/workspace-light.png';
import starsLarge from '~/assets/projects/mukai-translator/result-background-large.jpg';
import starsPlaceholder from '~/assets/projects/mukai-translator/result-background-placeholder.jpg';
import videoMukaiLight from '~/assets/projects/mukai-translator/workflow-light.mp4';
import videoMukaiDark from '~/assets/projects/mukai-translator/workflow-dark.mp4';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import { useEffect, useState } from 'react';
import styles from './mukai-translator.module.css';

const title = 'Mukai Translator';
const description =
  'Aplicacion de escritorio para Windows que traduce, limpia, edita y exporta manga. Integra RT-DETR-v2, OCR multilingue, inpainting y motores de IA en un flujo completo de produccion.';
const roles = ['Python','Inteligencia Articial ' ,'OCR + RT-DETR-v2' ,'Inpainting avanzado'];
const themeMediaSwapDelay = 900;

export const meta = ({ matches }) => {
  return baseMeta({ title, description, prefix: 'Projects', matches });
};

const ThemeProjectImage = ({ theme, ...props }) => (
  <ProjectImage reveal={false} transitionKey={theme} {...props} />
);

export const MukaiTranslator = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mediaTheme, setMediaTheme] = useState(theme);
  const mediaIsDark = mediaTheme === 'dark';

  useEffect(() => {
    const timeout = setTimeout(() => setMediaTheme(theme), themeMediaSwapDelay);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <>
      <ProjectContainer className={styles.project}>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={mukaiBackground}
          srcSet={`${mukaiBackground} 1280w, ${mukaiBackgroundLarge} 2560w`}
          placeholder={mukaiBackgroundPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          detailsClassName={styles.headerDetails}
          url="https://github.com/ChemixX1/Mukai_Translator.git"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ThemeProjectImage
              raised
              theme={theme}
              srcSet={
                mediaIsDark
                  ? `${imageMukaiMainDark} 1280w, ${imageMukaiMainDarkLarge} 1917w`
                  : `${imageMukaiMainLight} 1280w, ${imageMukaiMainLightLarge} 1916w`
              }
              width={1280}
              height={800}
              placeholder={
                mediaIsDark ? imageMukaiMainDarkPlaceholder : imageMukaiMainLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Interfaz de Mukai Translator mostrando el panel de traduccion de comics."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider className={styles.workflowTheme} theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.7}
            backgroundElement={
              <div className={styles.starsBackgroundFrame}>
                <Image
                  cover
                  className={styles.starsBackground}
                  src={starsLarge}
                  width={2560}
                  height={1706}
                  placeholder={starsPlaceholder}
                  alt=""
                  role="presentation"
                  sizes="100vw"
                />
              </div>
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow className={styles.sectionCopy} width="s">
                  <ProjectSectionHeading>¿Que hace?</ProjectSectionHeading>
                  <ProjectSectionText className={styles.centeredJustifiedText}>
                    Mukai Translator cubre el flujo completo de un capitulo: importa
                    imagenes, comics comprimidos, PDF o EPUB; detecta globos y regiones
                    con RT-DETR-v2; reconoce el texto con OCR segun el idioma; traduce con
                    motores locales o servicios externos; limpia el original mediante
                    inpainting y crea cajas editables. Tambien procesa lotes, paginas
                    webtoon y proyectos .mtpr.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                transitionKey={theme}
                className={styles.video}
                srcSet={`${mediaIsDark ? videoMukaiDark : videoMukaiLight} 1280w`}
                width={1280}
                height={800}
                alt="Demostracion del flujo de traduccion automatica de comics."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow className={styles.sectionCopy}>
              <ProjectSectionHeading>Edicion manual e inpainting</ProjectSectionHeading>
              <ProjectSectionText className={styles.centeredJustifiedText}>
                El resultado automatico sigue siendo editable sobre un lienzo con zoom,
                vista continua, historial y guardado automatico. Cada caja permite corregir
                OCR y traduccion, ajustar tipografia, color, contorno, degradados y efectos,
                ademas de usar figuras vectoriales o Magic Eraser para retoques manuales.
              </ProjectSectionText>
            </ProjectTextRow>
            <ThemeProjectImage
              raised
              theme={theme}
              srcSet={
                mediaIsDark
                  ? `${imageMukaiWorkspaceDark} 1280w, ${imageMukaiWorkspaceDarkLarge} 1728w`
                  : `${imageMukaiWorkspaceLight} 1280w, ${imageMukaiWorkspaceLightLarge} 1728w`
              }
              width={1280}
              height={891}
              placeholder={
                mediaIsDark
                  ? imageMukaiWorkspaceDarkPlaceholder
                  : imageMukaiWorkspaceLightPlaceholder
              }
              alt="Editor de Mukai Translator con una pagina de manga traducida y controles de texto, color e inpainting."
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered>
            <div className={`${styles.toolsText} ${styles.sectionCopy}`}>
              <ProjectSectionHeading>Procesamiento configurable</ProjectSectionHeading>
              <ProjectSectionText className={styles.centeredJustifiedText}>
                Desde ajustes se combinan RT-DETR-v2 con Manga OCR, Pororo, PaddleOCR,
                Azure, Google Vision o modelos multimodales. Tambien se elige entre LaMa,
                AOT-GAN y MI-GAN para la limpieza, junto con la estrategia HD y el perfil
                de restauracion adecuado para cada proyecto.
              </ProjectSectionText>
            </div>
            <ThemeProjectImage
              raised
              theme={theme}
              className={styles.toolsImage}
              srcSet={`${mediaIsDark ? imageMukaiConfigDark : imageMukaiConfigLight} 577w`}
              width={577}
              height={880}
              placeholder={
                mediaIsDark
                  ? imageMukaiConfigDarkPlaceholder
                  : imageMukaiConfigLightPlaceholder
              }
              alt="Configuracion de Mukai Translator con proveedores de traduccion y estrategia de procesamiento."
              sizes={`(max-width: ${media.tablet}px) 100vw, 50vw`}
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow className={styles.sectionCopy}>
              <ProjectSectionHeading>Composicion y efectos tipograficos</ProjectSectionHeading>
              <ProjectSectionText className={styles.centeredJustifiedText}>
                El editor integra fuentes, contornos, degradados, sombras y resplandores
                con deformaciones, perspectiva 3D y extrusion. Tambien permite insertar
                figuras vectoriales y copiar estilos entre cajas, previsualizando cada
                cambio a alta resolucion antes de exportar.
              </ProjectSectionText>
            </ProjectTextRow>
            <ThemeProjectImage
              raised
              theme={theme}
              srcSet={
                mediaIsDark
                  ? `${imageMukaiCompositionDark} 1280w, ${imageMukaiCompositionDarkLarge} 1917w`
                  : `${imageMukaiCompositionLight} 1280w, ${imageMukaiCompositionLightLarge} 1917w`
              }
              width={1280}
              height={800}
              placeholder={
                mediaIsDark
                  ? imageMukaiCompositionDarkPlaceholder
                  : imageMukaiCompositionLightPlaceholder
              }
              alt="Editor de efectos de Mukai Translator con estilos, deformacion y controles 3D."
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns className={styles.capabilitiesColumns}>
            <ProjectSectionContent
              className={`${styles.capabilityItem} ${styles.formatsItem}`}
            >
              <ProjectTextRow className={styles.sectionCopy}>
                <ProjectSectionHeading>Formatos de trabajo</ProjectSectionHeading>
                <ProjectSectionText className={styles.centeredJustifiedText}>
                  Importa JPG, JPEG, PNG, BMP, WebP, PDF, EPUB, PSD, proyectos .mtpr y
                  comics ZIP, CBZ, CBR, CBT, CB7, RAR, 7Z o TAR. Exporta por capitulos
                  como PNG, JPG, PDF, ZIP, CBZ, CB7 o PSD con capas y mejora hasta 8K.
                </ProjectSectionText>
              </ProjectTextRow>
              <ThemeProjectImage
                raised
                theme={theme}
                className={styles.capabilityImage}
                srcSet={`${mediaIsDark ? imageMukaiFormatsDark : imageMukaiFormatsLight} 746w`}
                width={746}
                height={692}
                placeholder={
                  mediaIsDark
                    ? imageMukaiFormatsDarkPlaceholder
                    : imageMukaiFormatsLightPlaceholder
                }
                alt="Opciones de exportacion de Mukai Translator con resolucion, restauracion y formato de pagina."
                sizes={`(max-width: ${media.tablet}px) 100vw, 50vw`}
              />
            </ProjectSectionContent>
            <ProjectSectionContent className={styles.capabilityItem}>
              <ProjectTextRow className={styles.sectionCopy}>
                <ProjectSectionHeading>Idiomas y proveedores</ProjectSectionHeading>
                <ProjectSectionText className={styles.centeredJustifiedText}>
                  El OCR usa Manga OCR, Pororo, PaddleOCR, Azure y Google Vision. Para
                  traducir permite elegir GPT, Claude, Gemini, DeepSeek, Grok, DeepL,
                  Microsoft, Yandex o un proveedor propio, con informacion de apoyo.
                </ProjectSectionText>
              </ProjectTextRow>
              <ThemeProjectImage
                raised
                theme={theme}
                className={styles.capabilityImage}
                srcSet={`${mediaIsDark ? imageMukaiLanguagesDark : imageMukaiLanguagesLight} 746w`}
                width={746}
                height={692}
                placeholder={
                  mediaIsDark
                    ? imageMukaiLanguagesDarkPlaceholder
                    : imageMukaiLanguagesLightPlaceholder
                }
                alt="Idiomas, proveedores de traduccion y controles OCR de Mukai Translator."
                sizes={`(max-width: ${media.tablet}px) 100vw, 50vw`}
              />
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow
              center
              centerMobile
              noMargin
              className={styles.sectionCopy}
            >
              <ProjectSectionHeading>Resumen del proyecto</ProjectSectionHeading>
              <ProjectSectionText>
                Como resultado, Mukai Translator automatiza la traducción, limpieza y edición de páginas en un solo flujo de trabajo. Esto permite convertir horas de trabajo manual en procesos que pueden completarse en segundos, mejorando significativamente la productividad.{' '}
                <Link href="https://github.com/ChemixX1/Mukai_Translator.git">
                  Ver el repositorio en GitHub
                </Link>
                .
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectTestimonial
        quote="He probado el programa y la verdad funciona muy bien. Detecta los textos, los traduce, limpia las imágenes y coloca el contenido traducido de forma automática. El programa es muy completo me ayuda mucho el proceso de la creación de mangas y me ahorra muchisimo tiempo a comparación de como hacia antes manualmente en photoshop."
        name="Erick Dan"
        occupation="Dueño Mukai Translator - Manga Mukai.com"
        phone="+51 926 615 198"
        location="Lima, Peru"
      />
      <Footer />
    </>
  );
};
