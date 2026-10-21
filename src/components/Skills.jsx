import { programs } from '../data'

const Skills = () => {
  return (
    <section className="section">
      <div className="container skills">
        {programs.map(({ id, icon, title, info }) => (
          <article className="skill" key={id}>
            <span className="skill__icon">{icon}</span>
            <h3>{title}</h3>
            <p>{info}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
