import usesBackground from '~/assets/uses/tools-background.mp4';
import azureLogo from '~/assets/logos/azure-original.svg';
import excelLogo from '~/assets/logos/excel-original.svg';
import googleCloudLogo from '~/assets/logos/google-cloud-original.svg';
import powerBiLogo from '~/assets/logos/power-bi-original.svg';
import pythonLogo from '~/assets/logos/python-original.svg';
import supabaseLogo from '~/assets/logos/supabase-original.svg';
import viteLogo from '~/assets/logos/vite-original.svg';
import '@fontsource/space-grotesk/600.css';
import { Footer } from '~/components/footer';
import { useLanguage } from '~/components/language-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import {
  SiClaude,
  SiDeepseek,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHostinger,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiPaddlepaddle,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import { TbBrandOpenai } from 'react-icons/tb';
import styles from './uses.module.css';

export const meta = ({ matches }) => {
  return baseMeta({
    matches,
    title: 'Herramientas y tecnologías',
    description:
      'Herramientas de desarrollo, automatización, datos, inteligencia artificial y diseño utilizadas por Jose Manuel Mejia Medina.',
  });
};

const TOOL_GROUPS = [
  {
    id: 'development',
    title: { es: 'Desarrollo web', en: 'Web development' },
    tools: [
      { name: 'JavaScript', icon: SiJavascript, color: '#f0c800' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'React', icon: SiReact, color: '#149eca' },
      { name: 'Vite', image: viteLogo, color: '#8b5cf6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Framer Motion', icon: SiFramer, color: '#e83e8c' },
      { name: 'WordPress', icon: SiWordpress, color: '#21759b' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
    ],
  },
  {
    id: 'automation',
    title: {
      es: 'Automatización e inteligencia artificial',
      en: 'Automation and artificial intelligence',
    },
    tools: [
      { name: 'Python', image: pythonLogo, color: '#3776ab' },
      { name: 'OpenAI', icon: TbBrandOpenai, color: '#10a37f' },
      { name: 'Claude', icon: SiClaude, color: '#d97757' },
      {
        name: 'Gemini',
        image:
          'https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png',
        color: '#4e75f2',
      },
      { name: 'DeepSeek', icon: SiDeepseek, color: '#4d6bfe' },
      { name: 'PaddleOCR', icon: SiPaddlepaddle, color: '#2932e1' },
      { name: 'Azure AI', image: azureLogo, color: '#0078d4' },
      { name: 'Google Vision', image: googleCloudLogo, color: '#4285f4' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
    ],
  },
  {
    id: 'data',
    title: { es: 'Datos y productividad', en: 'Data and productivity' },
    tools: [
      { name: 'Excel', image: excelLogo, color: '#217346' },
      { name: 'Power BI', image: powerBiLogo, color: '#d9a900' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'Supabase', image: supabaseLogo, color: '#3ecf8e' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'MariaDB', icon: SiMariadb, color: '#8a6d3b' },
    ],
  },
  {
    id: 'design',
    title: { es: 'Diseño y publicación', en: 'Design and delivery' },
    tools: [
      { name: 'Figma', icon: SiFigma, color: '#a259ff' },
      { name: 'GitHub', icon: SiGithub, color: '#68707d' },
      { name: 'Hostinger', icon: SiHostinger, color: '#673de6' },
    ],
  },
];

export const Uses = () => {
  const { lang } = useLanguage();
  const isEnglish = lang === 'en';

  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground src={usesBackground} opacity={0.68} sound />
        <ProjectHeader
          className={styles.usesHeader}
          detailsClassName={styles.headerDetails}
          visualClassName={styles.ninjaVisual}
          visual={<GiNinjaHeroicStance aria-hidden focusable="false" />}
          title={
            <span className={styles.headerTitle}>
              <span>{isEnglish ? 'Tools and' : 'Herramientas y'}</span>
              <span>{isEnglish ? 'technologies' : 'tecnologías'}</span>
            </span>
          }
          description={
            isEnglish
              ? 'A visual map of the technologies that connect my work: interfaces, automation, artificial intelligence, data and digital delivery.'
              : 'Un mapa visual de las tecnologías que conectan mi trabajo: interfaces, automatización, inteligencia artificial, datos y publicación digital.'
          }
        />

        <ProjectSection padding="none" className={styles.showcaseSection}>
          <ProjectSectionContent>
            <article
              className={styles.skillsBoard}
              aria-label={
                isEnglish
                  ? 'Technology skills grouped by discipline'
                  : 'Tecnologías agrupadas por disciplina'
              }
            >
              {TOOL_GROUPS.map((group, groupIndex) => (
                <section
                  className={styles.skillGroup}
                  key={group.id}
                  style={{ '--groupIndex': groupIndex }}
                >
                  <header className={styles.skillGroupHeader}>
                    <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                    <h2>{group.title[lang]}</h2>
                  </header>

                  <div className={styles.skillGrid}>
                    {group.tools.map((tool, toolIndex) => {
                      const ToolIcon = tool.icon;

                      return (
                        <div
                          className={styles.skillItem}
                          key={tool.name}
                          style={{
                            '--toolColor': tool.color,
                            '--toolIndex': toolIndex,
                          }}
                          title={tool.name}
                        >
                          <span className={styles.skillIcon}>
                            {tool.image ? (
                              <img src={tool.image} alt="" aria-hidden />
                            ) : (
                              <ToolIcon aria-hidden focusable="false" />
                            )}
                          </span>
                          <span className={styles.skillName}>{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </article>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
