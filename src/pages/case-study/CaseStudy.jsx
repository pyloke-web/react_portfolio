import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { caseStudies } from '../../data'

const CaseStudy = () => {
  const { slug } = useParams()
  const index = caseStudies.findIndex((c) => c.slug === slug)
  if (index === -1) return <Navigate to="/" replace />

  const { image, title, info, method, tag, link, summary, problem, solution, conclusion } = caseStudies[index]
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="case">
      <div className="container case__container">
        <Link to="/#highlights" className="case__back">
          <FiArrowLeft /> All projects
        </Link>
        <div className="card__meta">
          <span className="chip">{method}</span>
          <span className="card__tag">{tag}</span>
        </div>
        <h1>{title}</h1>
        <p className="case__lede">{info}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer noopener" className="btn btn--primary">
            View project <FiArrowUpRight />
          </a>
        )}
        <img className="case__image" src={image} alt={title} />

        <h2>Summary</h2>
        <p>{summary}</p>
        <h2>Problem</h2>
        <p>{problem}</p>
        <h2>Solution</h2>
        {solution.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <h2>Conclusion</h2>
        <p>{conclusion}</p>

        <Link to={`/projects/${next.slug}`} className="case__next">
          <span className="eyebrow">Next case study</span>
          <span className="case__next-title">
            {next.title} <FiArrowRight />
          </span>
        </Link>
      </div>
    </article>
  )
}

export default CaseStudy
