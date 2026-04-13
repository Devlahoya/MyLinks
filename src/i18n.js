// ============================================================
//  i18n.js — Language detection & translation helper
//  No external libraries needed.
// ============================================================

import { config } from './config'

/**
 * Detect the best matching language from the browser's preferences.
 * Falls back to config.defaultLang if nothing matches.
 */
export function detectLanguage() {
  const available = Object.keys(config.translations || {})
  if (available.length === 0) return config.defaultLang || 'es'

  // navigator.languages is an ordered list of preferred languages (e.g. ["es-MX", "es", "en"])
  const preferred = navigator.languages || [navigator.language || navigator.userLanguage || '']

  for (const lang of preferred) {
    // Exact match (e.g. "es")
    const code = lang.toLowerCase().slice(0, 2)
    if (available.includes(code)) return code
  }

  return config.defaultLang || available[0]
}

/**
 * Return a translated version of config for the given language code.
 * Falls back field-by-field to the original config values.
 */
export function getTranslated(lang) {
  const t = (config.translations || {})[lang] || {}

  return {
    bio:    t.bio    ?? config.bio,
    footer: t.footer ?? config.footer,
    // Merge translated link titles over the original links array
    links: config.links.map(link => ({
      ...link,
      title: (t.links || {})[link.id] ?? link.title,
    })),
  }
}

/**
 * Return all available language codes defined in translations.
 */
export function availableLanguages() {
  return Object.keys(config.translations || {})
}
