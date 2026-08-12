import logoGobiernoRegional from '~/assets/experience/logo-gobierno-regional.webp';
import logoChincheros from '~/assets/experience/logo-chincheros.webp';
import logoAndahuaylas from '~/assets/experience/logo-andahuaylas.webp';
import logoProcompite from '~/assets/experience/logo-procompite.webp';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '~/components/language-provider';
import '@fontsource/sarpanch/600.css';
import styles from './articles.module.css';

const EXPERIENCES_ES = [
  {
    id: 1,
    company: 'Gobierno Regional de Apurímac',
    role: 'Asistente Técnico de Campo',
    period: 'Enero 2019 — Abril 2019',
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
    period: 'Enero 2022 — Julio 2022',
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
    period: 'Febrero 2024 — Abril 2024',
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
    period: 'Enero 2025 — Marzo 2025',
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
    period: 'Enero 2026 — Febrero 2026',
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
    period: 'Marzo 2026 — Mayo 2026',
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
    period: 'January 2019 — April 2019',
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
    period: 'January 2022 — July 2022',
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
    period: 'February 2024 — April 2024',
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
    period: 'January 2025 — March 2025',
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
    period: 'January 2026 — February 2026',
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
    period: 'March 2026 — May 2026',
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

const PERIOD_META = {
  1: {
    year: '2019',
    es: 'Enero — Abril',
    en: 'January — April',
  },
  2: {
    year: '2022',
    es: 'Enero — Julio',
    en: 'January — July',
  },
  3: {
    year: '2024',
    es: 'Febrero — Abril',
    en: 'February — April',
  },
  4: {
    year: '2025',
    es: 'Enero — Marzo',
    en: 'January — March',
  },
  5: {
    year: '2026',
    es: 'Enero — Febrero',
    en: 'January — February',
  },
  6: {
    year: '2026',
    es: 'Marzo — Mayo',
    en: 'March — May',
  },
};

function ExperienceCard({ exp, index, onOpen, reduceMotion, lang }) {
  const period = PERIOD_META[exp.id];
  const isEnglish = lang === 'en';

  return (
    <motion.article
      className={styles.card}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.07, 0.28),
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className={styles.dateBlock} aria-label={exp.period}>
        <span className={styles.dateMonths}>{period?.[lang]}</span>
        <strong className={styles.dateYear}>{period?.year}</strong>
      </div>

      <span className={styles.timelineNode} aria-hidden>
        <i />
      </span>

      <div className={styles.cardBody}>
        <span className={styles.locationBadge}>{exp.location}</span>

        <div className={styles.cardIdentity}>
          <div className={styles.cardLogos}>
            <img src={exp.logo} alt="" className={styles.cardLogo} />
            {exp.logo2 && <img src={exp.logo2} alt="" className={styles.cardLogo} />}
          </div>
          <div>
            <Heading level={4} as="h2" className={styles.cardRole}>
              {exp.role}
            </Heading>
            <p className={styles.cardCompany}>{exp.company}</p>
          </div>
        </div>

        <button
          type="button"
          className={styles.cardAction}
          onClick={() => onOpen(exp)}
          aria-haspopup="dialog"
        >
          <span>{isEnglish ? 'View responsibilities' : 'Ver responsabilidades'}</span>
          <Icon icon="arrow-right" />
        </button>
      </div>
    </motion.article>
  );
}

function ExperienceModal({ exp, onClose, lang, reduceMotion }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        className={styles.modal}
        layoutId={reduceMotion ? undefined : `exp-card-${exp.id}`}
        initial={reduceMotion ? { opacity: 0 } : undefined}
        animate={reduceMotion ? { opacity: 1 } : undefined}
        exit={reduceMotion ? { opacity: 0 } : undefined}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={event => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label={lang === 'en' ? 'Close' : 'Cerrar'}
        >
          <Icon icon="close" />
        </button>
        <div className={styles.modalHeader}>
          <div className={styles.modalLogos}>
            <img src={exp.logo} alt={exp.company} className={styles.modalLogo} />
            {exp.logo2 && (
              <img src={exp.logo2} alt="ProCompite" className={styles.modalLogo} />
            )}
          </div>
          <div className={styles.modalMeta}>
            <span className={styles.modalPeriod}>
              {exp.period} · {exp.location}
            </span>
            <Heading level={4} as="h2" id="experience-modal-title">
              {exp.company}
            </Heading>
            <Text size="l" as="p" className={styles.modalRole}>
              {exp.role}
            </Text>
          </div>
        </div>
        <span className={styles.modalLabel} role="heading" aria-level={3}>
          {lang === 'en' ? 'Key activities' : 'Actividades realizadas'}
        </span>
        <ul className={styles.taskList}>
          {exp.tasks.map((task, i) => (
            <motion.li
              key={i}
              className={styles.taskItem}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span className={styles.taskIndex} aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <Text size="s" as="span">
                {task}
              </Text>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState(null);
  const experiences = (lang === 'en' ? EXPERIENCES_EN : EXPERIENCES_ES).slice().reverse();

  const handleClose = useCallback(() => setSelected(null), []);

  const selectedExp = selected
    ? experiences.find(exp => exp.id === selected.id) ?? selected
    : null;

  return (
    <article className={styles.experience}>
      <Section className={styles.header}>
        <div className={styles.headerContent}>
          <Heading className={styles.heading} level={4} as="h1">
            <span>{lang === 'en' ? 'Professional' : 'Experiencia'}</span>
            <span>{lang === 'en' ? 'experience' : 'profesional'}</span>
          </Heading>
          <Text size="l" className={styles.subtitle} as="p">
            {lang === 'en'
              ? 'A career connecting public management, productive development and technology to organize information, coordinate teams and create measurable impact.'
              : 'Una trayectoria que conecta gestión pública, desarrollo productivo y tecnología para organizar información, coordinar equipos y generar impacto medible.'}
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
        <div
          className={styles.headerStats}
          aria-label={lang === 'en' ? 'Career highlights' : 'Resumen profesional'}
        >
          <div>
            <strong>06</strong>
            <span>{lang === 'en' ? 'roles' : 'experiencias'}</span>
          </div>
          <div>
            <strong>25+</strong>
            <span>{lang === 'en' ? 'associations' : 'asociaciones'}</span>
          </div>
          <div>
            <strong>07</strong>
            <span>{lang === 'en' ? 'years of journey' : 'años de trayectoria'}</span>
          </div>
        </div>
      </Section>

      <Section className={styles.timelineSection}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              reduceMotion={reduceMotion}
              onOpen={setSelected}
              lang={lang}
            />
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal
            exp={selectedExp}
            lang={lang}
            reduceMotion={reduceMotion}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      <Footer />
    </article>
  );
}
