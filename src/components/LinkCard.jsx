import { motion } from 'framer-motion'
import * as FaIcons from 'react-icons/fa6'
import * as SiIcons from 'react-icons/si'
import * as BiIcons from 'react-icons/bi'

// Resolve an icon name string (e.g. "FaInstagram") to the actual component
function resolveIcon(iconName) {
  if (!iconName) return null
  return (
    FaIcons[iconName] ||
    SiIcons[iconName] ||
    BiIcons[iconName] ||
    FaIcons['FaLink'] // fallback
  )
}

// Lighten a hex color for the icon bubble gradient
function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function LinkCard({ link, index }) {
  const IconComponent = resolveIcon(link.icon)
  const color = link.color || '#667eea'

  const iconBg = `linear-gradient(135deg, ${color} 0%, ${hexToRgba(color, 0.7)} 100%)`

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      aria-label={link.title}
    >
      {/* Icon bubble */}
      <span
        className="link-icon-wrap"
        style={{ background: iconBg }}
        aria-hidden="true"
      >
        {IconComponent && <IconComponent />}
      </span>

      {/* Title */}
      <span className="link-title">{link.title}</span>

      {/* Chevron */}
      <span className="link-chevron" aria-hidden="true">
        {FaIcons.FaChevronRight && <FaIcons.FaChevronRight />}
      </span>
    </motion.a>
  )
}
