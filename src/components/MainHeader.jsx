import { MdOutlineWavingHand } from 'react-icons/md'
import SocialLinks from './SocialLinks'
import { EMAIL } from '../data'

const MainHeader = () => {
  return (
    <header className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          <p className="eyebrow">Data · Policy · Web</p>
          <h1>
            Hello, I'm Yen <MdOutlineWavingHand className="hero__wave" />
          </h1>
          <p className="hero__intro">
            I have an academic background in psychology and data science, and I'm passionate about where
            people and technology meet. I currently work in public policy, with experience across web
            development, design and analytics. This is a collection of some of the work I've done.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn--ghost">
              Get in touch
            </a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </header>
  )
}

export default MainHeader
