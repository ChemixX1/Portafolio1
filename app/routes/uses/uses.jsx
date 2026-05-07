import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { useLanguage } from '~/components/language-provider';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Herramientas',
    description: 'Lista de hardware y software que uso en mi día a día',
  });
};

export const Uses = () => {
  const { lang } = useLanguage();
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={lang === 'en' ? 'Tools' : 'Herramientas'}
          description={lang === 'en'
            ? "A pretty thorough list of tools, apps, hardware, and more that I use daily to design and code. Yes, that's a Johnny Mnemonic GIF in the background."
            : "Una lista bastante completa de herramientas, aplicaciones, hardware y más que uso a diario para diseñar y programar. Sí, ese es un GIF de Johnny Mnemonic en el fondo."}
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{lang === 'en' ? 'Design' : 'Diseño'}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {lang === 'en' ? (
                    <>
                      <ListItem>
                        <Link href="https://www.figma.com">Figma</Link> is my main UI design tool. I switched from Sketch in 2020 and never looked back. I've also built{' '}
                        <Link href="https://www.figma.com/@hamish">some plugins</Link> you can install.
                      </ListItem>
                      <ListItem>
                        For motion graphics I use Adobe After Effects. I haven't found a non-Adobe alternative that's just as good. If you have suggestions, <Link href="/contact">let me know</Link>.
                      </ListItem>
                      <ListItem>
                        For 3D models and video editing I use{' '}
                        <Link href="https://www.blender.org/">Blender</Link>. Since version 2.8 it's much simpler and in many ways better than paid tools like 3DS Max or Maya.
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem>
                        <Link href="https://www.figma.com">Figma</Link> es mi herramienta
                        principal para diseño UI actualmente. Cambié desde Sketch en 2020 y no
                        he mirado atrás. También he creado{' '}
                        <Link href="https://www.figma.com/@hamish">algunos plugins</Link> que
                        puedes instalar.
                      </ListItem>
                      <ListItem>
                        Para motion graphics uso Adobe After Effects. Hasta ahora no he
                        encontrado una alternativa no-Adobe que sea igual de buena. Si tienes
                        sugerencias, <Link href="/contact">escríbeme</Link>.
                      </ListItem>
                      <ListItem>
                        Para modelos 3D y edición de video uso{' '}
                        <Link href="https://www.blender.org/">Blender</Link>. Desde la versión
                        2.8 es mucho más simple y en muchos aspectos mejor que herramientas
                        de pago como 3DS Max o Maya.
                      </ListItem>
                    </>
                  )}
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>{lang === 'en' ? 'Development' : 'Desarrollo'}</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {lang === 'en' ? (
                    <>
                      <ListItem>
                        I use <Link href="https://vscodium.com/">VSCodium</Link> as my text editor, with the Tokyo Night theme and Operator Mono as the font.
                      </ListItem>
                      <ListItem>
                        Firefox is my main browser for both development and general use.
                      </ListItem>
                      <ListItem>
                        <Link href="https://reactjs.org/">React</Link> is my preferred frontend JavaScript library. The component-based mental model was the first thing that really made sense to me.
                      </ListItem>
                      <ListItem>
                        For 3D effects and image shaders I use{' '}
                        <Link href="https://threejs.org/">three.js</Link>. It has a learning curve, but you can do very powerful things with it.
                      </ListItem>
                      <ListItem>
                        For CSS I use vanilla CSS with{' '}
                        <Link href="https://postcss.org/">PostCSS</Link> to access future CSS features today.
                      </ListItem>
                      <ListItem>
                        For JavaScript animations I use{' '}
                        <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it's a great way to add spring-like animations to React and three.js.
                      </ListItem>
                      <ListItem>
                        For building and testing UI components in isolation I use{' '}
                        <Link href="https://storybook.js.org/">Storybook</Link>. You can see the{' '}
                        <Link href="https://github.com/ChemixX1/Portfolio1">storybook for this site</Link>.
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem>
                        Uso <Link href="https://vscodium.com/">VSCodium</Link> como editor de
                        texto, con el tema Tokyo Night y Operator Mono como tipografía.
                      </ListItem>
                      <ListItem>
                        Firefox es mi navegador principal tanto para desarrollo como para uso
                        general.
                      </ListItem>
                      <ListItem>
                        <Link href="https://reactjs.org/">React</Link> es mi librería
                        JavaScript de frontend preferida. El modelo mental basado en
                        componentes fue lo primero que realmente tuvo sentido para mí.
                      </ListItem>
                      <ListItem>
                        Para efectos 3D y shaders de imagen uso{' '}
                        <Link href="https://threejs.org/">three.js</Link>. Tiene una curva de
                        aprendizaje, pero puedes hacer cosas muy poderosas con él.
                      </ListItem>
                      <ListItem>
                        Para CSS uso CSS vanilla con{' '}
                        <Link href="https://postcss.org/">PostCSS</Link> para acceder a
                        características CSS futuras hoy mismo.
                      </ListItem>
                      <ListItem>
                        Para animaciones JavaScript uso{' '}
                        <Link href="https://www.framer.com/motion/">Framer Motion</Link>, es
                        una excelente forma de agregar animaciones tipo spring a React y
                        three.js.
                      </ListItem>
                      <ListItem>
                        Para construir y probar componentes UI en aislamiento uso{' '}
                        <Link href="https://storybook.js.org/">Storybook</Link>. Puedes ver
                        el{' '}
                        <Link href="https://github.com/ChemixX1/Portfolio1">
                          storybook de este sitio
                        </Link>
                        .
                      </ListItem>
                    </>
                  )}
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>{lang === 'en' ? 'System' : 'Sistema'}</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Desktop' : 'Escritorio'}</TableHeadCell>
                    <TableCell>{lang === 'en' ? 'Custom built' : 'Ensamblado a medida'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Operating system' : 'Sistema operativo'}</TableHeadCell>
                    <TableCell>Arch Linux {lang === 'en' ? '(btw)' : '(por cierto)'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Browser' : 'Navegador'}</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Monitor' : 'Monitor'}</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Keyboard' : 'Teclado'}</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Mouse' : 'Ratón'}</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>ASUS TUF A16</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Headphones' : 'Auriculares'}</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x / Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>{lang === 'en' ? 'Microphone' : 'Micrófono'}</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
