import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Logo from './Logo'
import Icon from './Icon'
import { mainNav, type NavItem } from '../data/navigation'
import { business } from '../data/business'

function Dropdown({ item, id }: { item: NavItem; id: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => setOpen(false), [pathname, hash])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <li
      ref={ref}
      className={`nav__item nav__item--has-menu ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink to={item.to} className="nav__link">
        {item.label}
      </NavLink>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${item.label} menu`}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="chevron" size={18} />
      </button>
      <div className="nav__menu" id={id}>
        <ul>
          {item.children!.map((c) => (
            <li key={c.to}>
              <Link to={c.to} className="nav__menu-link">
                <span className="nav__menu-label">{c.label}</span>
                {c.description && <span className="nav__menu-desc">{c.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname, hash])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {mainNav.map((item) =>
              item.children ? (
                <Dropdown key={item.to} item={item} id={`menu-${item.to.slice(1)}`} />
              ) : (
                <li key={item.to} className="nav__item">
                  <NavLink to={item.to} className="nav__link">
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <a className="header-call" href={business.phoneHref}>
          <Icon name="phone" size={18} />
          <span>{business.phoneDisplay}</span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="mobile-menu__link">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mobile-menu__sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--block" href={business.phoneHref}>
            <Icon name="phone" size={18} /> Call {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}
