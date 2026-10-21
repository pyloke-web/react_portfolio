import { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import Skills from '../../components/Skills'
import ProjectCard from '../../components/ProjectCard'
import { featured, caseStudies, projects, otherProjects } from '../../data'

const ALL = 'All'
const methods = [ALL, ...new Set(projects.map((p) => p.method))]
const PREVIEW_COUNT = 6

const Home = () => {
  const [filter, setFilter] = useState(ALL)
  const [showAll, setShowAll] = useState(false)
  const matching = filter === ALL ? projects : projects.filter((p) => p.method === filter)
  const visible = showAll ? matching : matching.slice(0, PREVIEW_COUNT)

  return (
    <>
      <MainHeader />
      <Skills />

      <section className="section" id="highlights">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Featured</p>
            <h2>Highlights</h2>
          </div>
          <div className="grid grid--wide">
            {featured.map(({ id, path, ...p }) => (
              <ProjectCard key={id} {...p} href={path} />
            ))}
            {caseStudies.map(({ slug, ...p }) => (
              <ProjectCard key={slug} {...p} to={`/projects/${slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Analysis & research</p>
            <h2>Data Projects</h2>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {methods.map((m) => (
              <button
                key={m}
                className={`filter ${filter === m ? 'filter--active' : ''}`}
                aria-pressed={filter === m}
                onClick={() => setFilter(m)}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="grid">
            {visible.map(({ id, path, ...p }) => (
              <ProjectCard key={id} {...p} href={path} />
            ))}
          </div>
          {matching.length > PREVIEW_COUNT && (
            <div className="show-more">
              <button className="btn btn--ghost" onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? 'Show fewer' : `Show all ${matching.length} projects`}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="other">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Web & apps</p>
            <h2>Other Projects</h2>
          </div>
          <div className="grid">
            {otherProjects.map(({ id, ...p }) => (
              <ProjectCard key={id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
