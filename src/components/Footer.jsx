import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tharushi Nikethana</h4>
            <p>Software Engineering Undergraduate</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/TharushiNK" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/tharushi-nikethana" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:tnkumari2003@gmail.com">Email</a></li>
              <li><a href="tel:+94761015928">Phone</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tharushi Nikethana. All rights reserved.</p>
          <p>Crafted with <span className="heart">❤️</span> using React & Vite</p>
        </div>
      </div>
    </footer>
  );
}
