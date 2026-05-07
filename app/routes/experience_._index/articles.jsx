import logoGobiernoRegional from '~/assets/logo-gobierno-regional.png';
import logoChincheros from '~/assets/logo-chincheros.png';
import logoAndahuaylas from '~/assets/logo-andahuaylas.png';
import logoProcompite from '~/assets/logo-procompite.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '~/components/language-provider';
import styles from './articles.module.css';

const EXPERIENCES_ES = [
  {
    id: 1,
    company: 'Gobierno Regional de Apurímac',
    role: 'Asistente Técnico de Campo',
    period: 'Ene 2019 – Abr 2019',
    location: 'Chincheros, Apurímac',
    logo: logoGobiernoRegional,
    tasks: [
      'Registré ideas de negocio para asociaciones productivas en el Sistema en Línea (SEL) para el programa AGROIDEAS.',
      'Apoyé en tareas administrativas, planes de trabajo y manejo de SIGA.',
      'Programé un sistema para el alquiler y emisión de contratos de STANDs del CC "Blanquillo Durazno".',
      'Apoyé en trabajos de campo del Programa Bosques Manejados del Gobierno Regional de Apurímac.',
    ],
  },
  {
    id: 2,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Practicante Pre-Profesional',
    period: 'Ene 2022 – Jul 2022',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Capacité a productores agrícolas en Manejo de Plagas con énfasis en la aplicación del cebo tóxico JF-120 para el control de la mosca de la fruta.',
      'Ejecuté trabajos de campo en aspersión, fumigación y aplicación de insecticidas bajo protocolos fitosanitarios.',
      'Impulsé y gestioné un convenio interinstitucional con SENASA para el control fitosanitario en Chincheros.',
      'Elaboré informes técnicos, expedientes y documentación del área de sanidad vegetal.',
      'Coordiné campañas fitosanitarias con autoridades locales, comunidades y organizaciones de productores.',
    ],
  },
  {
    id: 3,
    company: 'Municipalidad Provincial de Andahuaylas',
    role: 'Asistente en Sanidad Animal',
    period: 'Feb 2024 – Abr 2024',
    location: 'Andahuaylas, Apurímac',
    logo: logoAndahuaylas,
    tasks: [
      'Apoyé el proyecto de mejoramiento de producción de leche de la asociación AGROGANE dentro del Programa PROCOMPITE Andahuaylas 2024.',
      'Realicé el control sanitario del ganado vacuno: revisión de salud, detección de enfermedades y parásitos.',
      'Apoyé en campañas de vacunación y desparasitación del ganado lechero.',
      'Participé en el control de calidad de la leche y en las buenas prácticas de ordeño.',
      'Trabajé con ganaderos enseñando manejo sanitario y cuidados básicos del ganado.',
    ],
  },
  {
    id: 4,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Asistente en ProCompite',
    period: 'Ene 2025 – Mar 2025',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    logo2: logoProcompite,
    tasks: [
      'Gestioné documentación para la implementación y aprobación del programa PROCOMPITE.',
      'Capacité a más de 20 asociaciones productivas sobre el proceso concursable.',
      'Diseñé y gestioné una base de datos para 25+ asociaciones con seguimiento completo del programa.',
      'Gestioné la suscripción de convenios financieros con AGROBANCO Apurímac y COOPAC Los Andes.',
      'Apoyé en la formulación, seguimiento y evaluación de proyectos de cadenas productivas agropecuarias.',
      'Participé en la elaboración de informes técnicos, oficios, memorandos y documentación administrativa.',
      'Colaboré en la organización de capacitaciones, ferias y eventos dirigidos a productores locales.',
    ],
  },
  {
    id: 5,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Practicante Pre-Profesional — Sanidad Vegetal',
    period: 'Ene 2026 – Feb 2026',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Capacité a productores agrícolas en Manejo de Plagas con énfasis en el control de la mosca de la fruta (JF-120).',
      'Ejecuté trabajos de campo en aspersión, fumigación y aplicación de insecticidas fitosanitarios.',
      'Impulsé y gestioné convenio interinstitucional con SENASA para vigilancia y control fitosanitario.',
      'Elaboré informes técnicos, expedientes y documentación del área de sanidad vegetal.',
      'Coordiné con autoridades locales y comunidades la planificación de campañas fitosanitarias.',
    ],
  },
  {
    id: 6,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Responsable de Sanidad Vegetal',
    period: 'Mar 2026 – May 2026',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Lideré las actividades de sanidad vegetal de la Gerencia de Desarrollo Económico.',
      'Capacité a productores en el correcto manejo de plagas y aplicación de fitosanitarios.',
      'Gestioné expedientes técnicos y documentación administrativa del área.',
      'Coordiné con SENASA y otras instituciones las campañas de control fitosanitario provincial.',
    ],
  },
];

const EXPERIENCES_EN = [
  {
    id: 1,
    company: 'Gobierno Regional de Apurímac',
    role: 'Technical Field Assistant',
    period: 'Jan 2019 – Apr 2019',
    location: 'Chincheros, Apurímac',
    logo: logoGobiernoRegional,
    tasks: [
      'Recorded business ideas for productive associations in the Online System (SEL) for the AGROIDEAS program.',
      'Supported administrative tasks, work plans, and SIGA management.',
      'Developed a system for renting and issuing contracts for STANDs at CC "Blanquillo Durazno".',
      'Supported field activities of the Managed Forests Program of the Regional Government of Apurímac.',
    ],
  },
  {
    id: 2,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Pre-Professional Intern',
    period: 'Jan 2022 – Jul 2022',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Trained agricultural producers in Pest Management with emphasis on JF-120 toxic bait for fruit fly control.',
      'Executed field work in spraying, fumigation, and insecticide application under phytosanitary protocols.',
      'Promoted and managed an inter-institutional agreement with SENASA for phytosanitary control in Chincheros.',
      'Prepared technical reports, files, and documentation for the plant health area.',
      'Coordinated phytosanitary campaigns with local authorities, communities, and producer organizations.',
    ],
  },
  {
    id: 3,
    company: 'Municipalidad Provincial de Andahuaylas',
    role: 'Animal Health Assistant',
    period: 'Feb 2024 – Apr 2024',
    location: 'Andahuaylas, Apurímac',
    logo: logoAndahuaylas,
    tasks: [
      'Supported the milk production improvement project of the AGROGANE association within PROCOMPITE Andahuaylas 2024.',
      'Conducted sanitary control of cattle: health review, disease and parasite detection.',
      'Supported vaccination and deworming campaigns for dairy cattle.',
      'Participated in milk quality control and good milking practices.',
      'Worked with ranchers teaching sanitary management and basic livestock care.',
    ],
  },
  {
    id: 4,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'ProCompite Assistant',
    period: 'Jan 2025 – Mar 2025',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    logo2: logoProcompite,
    tasks: [
      'Managed documentation for the implementation and approval of the PROCOMPITE program.',
      'Trained more than 20 productive associations on the competitive application process.',
      'Designed and managed a database for 25+ associations with comprehensive program tracking.',
      'Managed financial agreements with AGROBANCO Apurímac and COOPAC Los Andes.',
      'Supported the formulation, monitoring, and evaluation of agricultural productive chain projects.',
      'Participated in drafting technical reports, official letters, memos, and administrative documentation.',
      'Collaborated in organizing training sessions, fairs, and events for local producers.',
    ],
  },
  {
    id: 5,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Pre-Professional Intern — Plant Health',
    period: 'Jan 2026 – Feb 2026',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Trained agricultural producers in Pest Management with emphasis on fruit fly control (JF-120).',
      'Executed field work in spraying, fumigation, and phytosanitary insecticide application.',
      'Promoted and managed an inter-institutional agreement with SENASA for phytosanitary surveillance and control.',
      'Prepared technical reports, files, and documentation for the plant health area.',
      'Coordinated with local authorities and communities the planning of phytosanitary campaigns.',
    ],
  },
  {
    id: 6,
    company: 'Municipalidad Provincial de Chincheros',
    role: 'Plant Health Manager',
    period: 'Mar 2026 – May 2026',
    location: 'Chincheros, Apurímac',
    logo: logoChincheros,
    tasks: [
      'Led plant health activities of the Economic Development Management department.',
      'Trained producers in proper pest management and phytosanitary application.',
      'Managed technical files and administrative documentation for the area.',
      'Coordinated phytosanitary control campaigns with SENASA and other provincial institutions.',
    ],
  },
];

function Logo3D({ src, alt, reduceMotion, large = false }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 180,
    damping: 22,
  });
  function handleMouseMove(e) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className={styles.logoWrapper}>
      <motion.div
        ref={ref}
        className={large ? `${styles.logoCard} ${styles.logoCardLarge}` : styles.logoCard}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
        }}
        animate={reduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={src} alt={alt} className={large ? `${styles.logoImg} ${styles.logoImgLarge}` : styles.logoImg} />
      </motion.div>
    </div>
  );
}


function ExperienceItem({ company, role, period, location, logo, logo2, tasks, index }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className={styles.logosColumn}>
        <Logo3D src={logo} alt={company} reduceMotion={reduceMotion} />
        {logo2 && <Logo3D src={logo2} alt="ProCompite" reduceMotion={reduceMotion} large />}
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemMeta}>
          <div className={styles.periodRow}>
            <Divider notchWidth="40px" notchHeight="5px" />
            <Text size="s" className={styles.period}>{period}</Text>
            <Text size="s" className={styles.dot} aria-hidden>·</Text>
            <Text size="s" className={styles.location}>{location}</Text>
          </div>
          <Heading level={4} as="h2" className={styles.company}>{company}</Heading>
          <Text size="l" className={styles.role}>{role}</Text>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task, i) => (
            <li key={i} className={styles.taskItem}>
              <span className={styles.taskBullet} aria-hidden />
              <Text size="s" as="span">{task}</Text>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { lang } = useLanguage();
  const experiences = lang === 'en' ? EXPERIENCES_EN : EXPERIENCES_ES;
  return (
    <article className={styles.experience}>
      <Section className={styles.header}>
        <div className={styles.headerContent}>
          <Heading className={styles.heading} level={5} as="h1">
            <DecoderText text={lang === 'en' ? 'Experience' : 'Experiencia'} />
          </Heading>
          <Text size="l" className={styles.subtitle} as="p">
            {lang === 'en'
              ? 'Professional career in public institutions of Apurímac, focused on agricultural management, health, and territorial development.'
              : 'Trayectoria profesional en instituciones públicas de Apurímac, con enfoque en gestión agrícola, sanidad y desarrollo territorial.'}
          </Text>
          <Button
            secondary
            iconHoverShift
            icon="chevron-right"
            href="/cv-jose-manuel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            {lang === 'en' ? 'Download CV' : 'Descargar CV'}
          </Button>
        </div>
        <Barcode className={styles.barcode} />
      </Section>

      <Section className={styles.timeline}>
        <div className={styles.timelineInner}>
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} {...exp} index={index} />
          ))}
        </div>
      </Section>

      <Footer />
    </article>
  );
}

function Barcode({ className }) {
  return (
    <svg
      className={className}
      width="153"
      height="20"
      fill="currentColor"
      viewBox="0 0 153 20"
    >
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}
