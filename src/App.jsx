import AboutSection from "./componants/AboutSection"
import ArticleDetail from "./componants/ArticleDetail"
import ArticleList from "./componants/ArticleList"
import Footer from "./componants/Footer"
import HeroSection from "./componants/HeroSection"
import MyNavbar from "./componants/Navbar"
import AjouterArticle from "./componants/AjouterArticle"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
        <MyNavbar />
      <Routes>
        <Route path="/" element={
          <>
          <HeroSection />
          <AboutSection />
          <ArticleList />
          </>
          } />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/publierArticle" element={<AjouterArticle />} />
        <Route path="/article/:id"  element ={<ArticleDetail />}/>
      </Routes>
      <Footer />

    </Router>
    
   

     
    </>
  )
}

export default App
