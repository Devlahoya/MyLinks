// ============================================================
//  icons.js — Explicit icon imports (NO wildcard imports)
//  Tree-shaking only works with named imports. "import * as"
//  bundles thousands of SVGs and kills build memory.
//
//  HOW TO ADD A NEW ICON:
//  1. Find the name at https://react-icons.github.io/react-icons/
//  2. Add a named import below from the correct package
//  3. Add it to the iconMap object
// ============================================================

// Font Awesome 6
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaTwitch,
  FaDiscord,
  FaGlobe,
  FaSpotify,
  FaWhatsapp,
  FaLink,
  FaChevronRight,
} from 'react-icons/fa6'

// Add imports from other libraries here if needed:
// import { SiBluesky } from 'react-icons/si'

export const iconMap = {
  // Brand icons
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaTwitch,
  FaDiscord,
  FaGlobe,
  FaSpotify,
  FaWhatsapp,
  // Add new icons here: SiBluesky,

  // UI icons (used internally)
  FaLink,
  FaChevronRight,
}

/**
 * Resolve an icon name string to its component.
 * Falls back to FaLink if the icon isn't registered.
 */
export function resolveIcon(name) {
  return iconMap[name] || FaLink
}
