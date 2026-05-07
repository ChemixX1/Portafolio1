import profileImg from '~/assets/profile-yo.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import { useLanguage } from '~/components/language-provider';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId, lang }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text={lang === 'en' ? 'Hi, I am Jose' : 'Hola, soy Jose'} start={visible} delay={500} />
    </Heading>
    {lang === 'en' ? (
      <>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          I'm Jose Manuel Mejia Medina, 22 years old, living in Lima, Peru. I'm a web
          developer passionate about UI/UX design, animations, and creating memorable
          digital experiences. Check out the tools I use on my{' '}
          <Link href="/uses">tools page</Link>.
        </Text>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          In my free time I enjoy exploring new technologies, building personal projects,
          and{' '}
          <Link href="/projects/volkihar-knight">experimenting with mods</Link>. I'm always
          open to hearing about new projects, so feel free to reach out.
        </Text>
      </>
    ) : (
      <>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          Soy Jose Manuel Mejia Medina, tengo 22 años y vivo en Lima, Perú. Soy desarrollador
          web apasionado por el diseño UI/UX, las animaciones y la creación de experiencias
          digitales memorables. Si quieres conocer las herramientas que uso, visita mi{' '}
          <Link href="/uses">página de herramientas</Link>.
        </Text>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          En mi tiempo libre me gusta explorar nuevas tecnologías, crear proyectos personales
          y{' '}
          <Link href="/projects/volkihar-knight">experimentar con mods</Link>. Siempre estoy
          abierto a escuchar sobre nuevos proyectos, así que no dudes en escribirme.
        </Text>
      </>
    )}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const { lang } = useLanguage();

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} lang={lang} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                {lang === 'en' ? 'Send me a message' : 'Envíame un mensaje'}
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {lang === 'en' ? 'About me' : 'Sobre mí'}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImg}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Foto de perfil de Jose Manuel Mejia Medina en Lima, Perú"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
