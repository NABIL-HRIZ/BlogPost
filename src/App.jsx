import AboutSection from "./componants/AboutSection";
import ArticleDetail from "./componants/ArticleDetail";
import ArticleList from "./componants/ArticleList";
import Footer from "./componants/Footer";
import HeroSection from "./componants/HeroSection";
import MyNavbar from "./componants/Navbar";
import AjouterArticle from "./componants/AjouterArticle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import TrueFocus from "./componants/TrueFocus";

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introShown');
  });

  useEffect(() => {
    if (!showIntro) return;
    
    const interval = setInterval(() => {
      sessionStorage.setItem('introShown', 'true');
      setShowIntro(false);
    }, 6000);

    return () => clearInterval(interval);
  }, [showIntro]);

  if (showIntro) {
    return (
      <div>
        <TrueFocus 
          sentence="Blog Post"
          manualMode={false}
          blurAmount={5}
          borderColor="#6588d3"
          animationDuration={2}
          pauseBetweenAnimations={1}
          title="Welcome to My Blog"
        />
      </div>
    );
  }

  return (
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
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;