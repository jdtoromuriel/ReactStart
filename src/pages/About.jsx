import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div>About</div>

    <nav>
        <ul>
          <li>
            <Link to={'/'}>Ir a home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default About