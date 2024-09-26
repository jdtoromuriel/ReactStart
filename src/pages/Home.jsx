import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import MainContent from "../components/main/main"
import Footer from "../components/footer/footer"

const Home = () => {
  return (
    <>
    <Header/>
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