import { socials } from '../data'

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`socials ${className}`}>
      {socials.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          aria-label={name}
          title={name}
          {...(url.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
