
import '../styles/HeroSection.css'


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">BlogPost</h1>
       

        <div className="hero-features">
          <div className="hero-feature">
            <span>⚡</span>
            <span>Performance optimisée</span>
          </div>
          <div className="hero-feature">
            <span>📱</span>
            <span>Design responsive</span>
          </div>
          <div className="hero-feature">
            <span>🎨</span>
            <span>Interface moderne</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
