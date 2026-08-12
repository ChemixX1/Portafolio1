import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useLoaderData } from '@remix-run/react';
import { useLanguage } from '~/components/language-provider';
import styles from './contact.module.css';

export const meta = ({ matches }) => {
  return baseMeta({
    matches,
    title: 'Contacto',
    description:
      'Envíame un mensaje si te interesa hablar sobre un proyecto o simplemente para saludar',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

// Pre-computed particle burst for the "message sent" confirmation. Each
// particle flies out from the center of the checkmark at an even angle.
const SUCCESS_PARTICLE_COUNT = 14;
const SUCCESS_PARTICLES = Array.from({ length: SUCCESS_PARTICLE_COUNT }, (_, index) => {
  const angle = (index / SUCCESS_PARTICLE_COUNT) * Math.PI * 2;
  const distance = 48 + (index % 3) * 12;
  return {
    tx: Math.round(Math.cos(angle) * distance),
    ty: Math.round(Math.sin(angle) * distance),
    delay: 360 + (index % 5) * 30,
  };
});

// Web3Forms only allows submissions from the client side on the free plan, so
// the form is sent straight from the browser. The access key is public by
// design (Web3Forms handles spam protection on their side), so it's safe to
// expose it to the client through the loader.
export const Contact = () => {
  const { accessKey } = useLoaderData();
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const { lang } = useLanguage();

  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(false);

  const t = (en, es) => (lang === 'en' ? en : es);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Hidden honeypot field — if a bot fills it, fake success and don't send
    if (form.elements.namedItem('name')?.value) {
      setSuccess(true);
      return;
    }

    const newErrors = {};

    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      newErrors.email = t(
        'Please enter a valid email address.',
        'Por favor ingresa un correo electrónico válido.'
      );
    }

    if (!message.value) {
      newErrors.message = t('Please enter a message.', 'Por favor ingresa un mensaje.');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    setErrors(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Mensaje del portafolio de ${email.value}`,
          from_name: 'Portafolio',
          // Web3Forms uses this as the reply-to address so you can answer directly
          email: email.value,
          message: message.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setErrors({
          message: t(
            'Could not send the message. Please try again later.',
            'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.'
          ),
        });
      }
    } catch {
      setErrors({
        message: t(
          'Could not send the message. Please try again later.',
          'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.'
        ),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            className={styles.form}
            method="post"
            ref={nodeRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text={lang === 'en' ? 'Hello, write to me' : 'Hola, escríbeme'} start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Hidden honeypot field to identify bots */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label={lang === 'en' ? 'Your email' : 'Tu correo electrónico'}
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label={lang === 'en' ? 'Message' : 'Mensaje'}
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {errors?.email}
                      {errors?.message}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText={lang === 'en' ? 'Sending...' : 'Enviando...'}
              icon="send"
              type="submit"
            >
              {lang === 'en' ? 'Send message' : 'Enviar mensaje'}
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <div className={styles.completeIcon} data-status={status} aria-hidden>
              <svg className={styles.completeCheckmark} viewBox="0 0 80 80">
                <circle className={styles.completeCircle} cx="40" cy="40" r="36" />
                <path className={styles.completeCheck} d="M26 41 l10 10 l18 -22" />
              </svg>
              {SUCCESS_PARTICLES.map((particle, index) => (
                <span
                  key={index}
                  className={styles.completeParticle}
                  style={cssProps({
                    tx: particle.tx,
                    ty: particle.ty,
                    delay: particle.delay,
                  })}
                />
              ))}
            </div>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              {lang === 'en' ? 'Message sent' : 'Mensaje enviado'}
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              {lang === 'en' ? "I'll get back to you in a couple of days, thanks for writing!" : 'Te responderé en un par de días, ¡gracias por escribir!'}
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              {lang === 'en' ? 'Back to home' : 'Volver al inicio'}
            </Button>
            <div className={styles.completeNinja} data-status={status} aria-hidden>
              <svg className={styles.ninjaSvg} viewBox="0 0 100 118">
                {/* Headband tails, fluttering behind the head */}
                <g className={styles.ninjaTails}>
                  <path d="M78 33 q 18 -2 24 4 q -14 3 -22 5 z" fill="var(--accent)" />
                  <path d="M78 39 q 16 5 22 13 q -14 -1 -22 -3 z" fill="var(--accent)" />
                </g>
                {/* Body */}
                <path
                  d="M30 80 Q52 64 74 80 L70 107 Q52 117 34 107 Z"
                  fill="var(--ninjaSuit)"
                />
                {/* Head hood */}
                <ellipse cx="52" cy="48" rx="30" ry="31" fill="var(--ninjaSuit)" />
                {/* Face opening */}
                <rect x="22" y="42" width="60" height="15" rx="7.5" fill="var(--ninjaFace)" />
                {/* Eyes */}
                <circle cx="44" cy="49.5" r="4" fill="var(--ninjaSuit)" />
                <circle cx="62" cy="49.5" r="4" fill="var(--ninjaSuit)" />
                <circle cx="45.4" cy="48" r="1.3" fill="var(--ninjaFace)" />
                <circle cx="63.4" cy="48" r="1.3" fill="var(--ninjaFace)" />
                {/* Headband across the forehead */}
                <rect x="21" y="33" width="62" height="8" rx="4" fill="var(--accent)" />
                {/* Raised arm doing a thumbs up */}
                <g className={styles.ninjaThumb}>
                  <rect
                    x="12"
                    y="58"
                    width="13"
                    height="27"
                    rx="6.5"
                    fill="var(--ninjaSuit)"
                    transform="rotate(15 18 70)"
                  />
                  <circle cx="15" cy="54" r="10" fill="var(--ninjaSuit)" />
                  <rect x="8" y="55" width="15" height="5" rx="2.5" fill="var(--accent)" />
                  <rect x="10" y="36" width="9" height="16" rx="4.5" fill="var(--ninjaSuit)" />
                </g>
              </svg>
            </div>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
