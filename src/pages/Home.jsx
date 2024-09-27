
import Sidebar from "../components/aside/aside"
import MainContent from "../components/main/main"
import Footer from "../components/footer/footer"
import Menu from "../components/menu/menu"
import Header from "../components/header/header"

const Home = () => {
  return (
    <>
    <Header/>
    <Menu/>
    <div className="Home">
      <div className="Home-Main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home