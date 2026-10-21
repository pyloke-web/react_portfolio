import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import { links } from '../data'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever the page changes
  useEffect(() => setIsNavShowing(false), [location])

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          Yen<span>.</span>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'nav__links--open' : ''}`}>
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive && !path.includes('#') ? 'active' : '')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle"
          aria-label={isNavShowing ? 'Close menu' : 'Open menu'}
          aria-expanded={isNavShowing}
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
