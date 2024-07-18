import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import mainLogo from '../../images/tlogo.png'
import contact from '../../images/contactBtn.png'
import '../../styles/colorPalette.ts'

function Navbar() {
  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.navigationbar}>
          <Link to="/">
            <img className={styles.logo} alt="logo" src={mainLogo} />
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/map"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contack Us
          </NavLink>

          <div>
            <Link to="/">
              <img className={styles.logo} alt="contact" src={contact} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
