import './About.css';
import heroImage from '../assets/tharu.jpeg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          {/* Image */}
          <div className="about-image">
            <div className="image-container glass">
              <img src={heroImage} alt="Tharushi Nikethana" />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <h2 className="section-title-about">About Me</h2>
            <p className="about-text">
              Motivated Software Engineering undergraduate with expertise in mobile, web, and backend development. 
              Proficient in Java, Spring Boot, RESTful APIs, and Firebase. Passionate about building scalable applications 
              and solving complex problems through innovative technology solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">11+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
