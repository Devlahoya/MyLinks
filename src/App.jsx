import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from './config'
import { detectLanguage, getTranslated, availableLanguages } from './i18n'
import LinkCard from './components/LinkCard'
import './theme.css'
import './App.css'

// Inject CSS variables from config.theme into :root at runtime
function applyTheme(theme) {
  const root = document.documentElement.style
  if (!theme) return
  root.setProperty('--background',           theme.background       || '')
  root.setProperty('--card-bg',              theme.cardBg           || '')
  root.setProperty('--card-border',          theme.cardBorder       || '')
  root.setProperty('--card-hover',           theme.cardHover        || '')
  root.setProperty('--card-hover-border',    theme.cardHoverBorder  || '')
  root.setProperty('--text-color',           theme.textColor        || '')
  root.setProperty('--subtext-color',        theme.subtextColor     || '')
  root.setProperty('--accent-color',         theme.accentColor      || '')
  root.setProperty('--avatar-border',        theme.avatarBorder     || '')
  root.setProperty('--avatar-glow',          theme.avatarGlow       || '')
  root.setProperty('--shadow-color',         theme.shadowColor      || '')
}

// Profile section entrance animation
const profileVariants = {
  hidden:  { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const avatarVariants = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
  },
}

const langs = availableLanguages()

export default function App() {
  const [lang, setLang] = useState(() => detectLanguage())
  const t = getTranslated(lang)

  useEffect(() => {
    applyTheme(config.theme)
    if (config.name) document.title = config.name
  }, [])

  // Update <html lang=""> attribute when language changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <>
      {/* Animated background */}
      <div className="bg-layer" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Language switcher */}
      {langs.length > 1 && (
        <div className="lang-switcher" role="group" aria-label="Language selector">
          {langs.map(code => (
            <button
              key={code}
              className={`lang-btn${lang === code ? ' lang-btn--active' : ''}`}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              title={code.toUpperCase()}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <main className="page">
        <div className="container">

          {/* ---- Profile ---- */}
          <motion.section
            className="profile"
            initial="hidden"
            animate="visible"
            variants={profileVariants}
          >
            {/* Avatar */}
            <motion.div
              className="avatar-wrapper"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="avatar-ring" aria-hidden="true" />
              <img
                className="avatar"
                src={config.avatar}
                alt={`${config.name} avatar`}
                loading="lazy"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="profile-name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              {config.name}
            </motion.h1>

            {/* Bio — animated when language changes */}
            {t.bio && (
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang + '-bio'}
                  className="profile-bio"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {t.bio}
                </motion.p>
              </AnimatePresence>
            )}
          </motion.section>

          {/* ---- Links ---- */}
          <nav className="links-list" aria-label="Social links">
            {t.links.map((link, i) => (
              <LinkCard key={link.id} link={link} index={i} />
            ))}
          </nav>

          {/* ---- Footer ---- */}
          {t.footer && (
            <AnimatePresence mode="wait">
              <motion.footer
                key={lang + '-footer'}
                className="footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: t.links.length * 0.07 + 0.4, duration: 0.6 }}
              >
                {t.footer}
              </motion.footer>
            </AnimatePresence>
          )}

        </div>
      </main>
    </>
  )
}
