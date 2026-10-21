import SocialLinks from './SocialLinks'
import { EMAIL } from '../data'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h2>Let's work together</h2>
          <p>
            Have a project or role in mind? Reach me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
        <SocialLinks />
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Loke Pak Yen</p>
    </footer>
  )
}

export default Footer
