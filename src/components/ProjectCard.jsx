import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'

// A card links to a case study page (`to`), an external page (`href`), or nowhere
const ProjectCard = ({ image, title, info, method, tag, to, href }) => {
  const body = (
    <>
      <div className="card__media">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="card__body">
        <div className="card__meta">
          {method && <span className="chip">{method}</span>}
          {tag && <span className="card__tag">{tag}</span>}
        </div>
        <h3>{title}</h3>
        <p>{info}</p>
        {to && (
          <span className="card__cta">
            Read case study <FiArrowRight />
          </span>
        )}
        {href && (
          <span className="card__cta">
            View project <FiArrowUpRight />
          </span>
        )}
        {!to && !href && <span className="card__cta card__cta--muted">Demo available on request</span>}
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="card card--link">
        {body}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className="card card--link">
        {body}
      </a>
    )
  }
  return <article className="card">{body}</article>
}

export default ProjectCard
