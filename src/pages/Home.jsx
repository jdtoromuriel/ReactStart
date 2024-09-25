import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <div>Home</div>

    <nav>
      <ul>
        <li>
          <Link to={'/contacto'}>Ir a Contacto</Link>
        </li>
      </ul>
    </nav>
    </>
    
  )
}

export default Home