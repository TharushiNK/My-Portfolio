import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Mobile Safety App',
      category: 'mobile',
      description: 'Innovative women\'s safety mobile app with real-time location tracking and emergency alerts.',
      technologies: ['Java', 'Android Studio', 'Firebase', 'Google Maps API', 'SQLite'],
      github: 'https://github.com/TharushiNK/SafeZoneApp',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '📱'
    },
    {
      id: 2,
      title: 'Tuition Management System',
      category: 'mobile',
      description: 'Mobile app for managing tuition schedules with QR code generation and attendance tracking.',
      technologies: ['Java', 'Android Studio', 'SQLite', 'MPAndroidChart', 'Zxing'],
      github: 'https://github.com/TharushiNK/Academix-Tuition-Class-Management-System',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '📚'
    },
    {
      id: 3,
      title: 'Route Optimization Tool',
      category: 'mobile',
      description: 'Java mobile app for route optimization using Dijkstra\'s algorithm with real-time visualization.',
      technologies: ['Java', 'Android', 'Dijkstra\'s Algorithm', 'Priority Queues'],
      github: 'hhttps://github.com/TharushiNK/Route-Optimization-and-Passenger-Boarding-Tool',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🗺️'
    },
    {
      id: 4,
      title: 'Car Rental System',
      category: 'web',
      description: 'Backend services for car rental platform with microservice architecture and RESTful APIs.',
      technologies: ['Spring Boot', 'REST APIs', 'MySQL', 'Microservices'],
      github: 'https://github.com/TharushiNK/Full-stack-microservices-project-with-Spring-Boot-React-and-REST-APIs',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🚗'
    },
    {
      id: 5,
      title: 'Urban Food System',
      category: 'web',
      description: 'Full-stack food ordering application with microservice architecture and multiple databases.',
      technologies: ['Spring Boot', 'REST APIs', 'Oracle DB', 'MongoDB', 'Microservices'],
      github: 'https://github.com/TharushiNK/CityBites-Microservice-App',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🍕'
    },
    {
      id: 6,
      title: 'Hostel Management System',
      category: 'web',
      description: 'PHP & MySQL web application for hostel operations with CRUD functionality and authentication.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/TharushiNK/Hostel-Management-System',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🏠'
    },
    {
      id: 7,
      title: 'Tourist Agent Management',
      category: 'web',
      description: 'Web application for managing tourist agents with backend logic and database integration.',
      technologies: ['Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/TharushiNK/TravelPilot',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '✈️'
    },
    {
      id: 8,
      title: 'Student Management System',
      category: 'standalone',
      description: 'Java Swing desktop application with OOP principles for managing student data.',
      technologies: ['Java', 'Swing', 'SQL', 'OOP'],
      github: 'https://github.com/TharushiNK/Swing-Enterprise-Application-with-CRUD-Operations',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '👨‍🎓'
    },
    {
      id: 9,
      title: 'Smart Cart Robot',
      category: 'iot',
      description: 'IoT-enabled shopping cart with product detection, weighing, and automated billing.',
      technologies: ['C++', 'Arduino', 'ESP32', 'IR/RFID', 'Bluetooth'],
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🤖'
    },
    {
      id: 10,
      title: 'Fire Fighting Robot',
      category: 'iot',
      description: 'Autonomous robot for fire detection and extinguishing with mobile app control.',
      technologies: ['ESP32', 'Arduino', 'Firebase', 'Android', 'Sensors'],
      github: 'https://github.com/TharushiNK/Smart-Fire-Fighting-Robot',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🔥'
    },
    {
      id: 11,
      title: 'Fetal Health Monitoring ML',
      category: 'ml',
      description: 'Random Forest Classification model for fetal health monitoring using medical data.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      github: 'https://github.com/TharushiNK/Fetal_Health_Checker_ML_Model',
      linkedin: 'https://www.linkedin.com/in/tharushi-nikethana-a45b8325b/details/projects/',
      image: '🧬'
    }
  ];

  const categories = [
    { id: 'all', label: '🔍 All Projects' },
    { id: 'mobile', label: '📱 Mobile Apps' },
    { id: 'web', label: '🌐 Web Apps' },
    { id: 'standalone', label: '💻 Standalone Systems' },
    { id: 'iot', label: '⚙️ IoT Projects' },
    { id: 'ml', label: '🤖 ML Models' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
