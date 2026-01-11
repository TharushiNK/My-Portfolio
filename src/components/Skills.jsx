import './Skills.css';

export default function Skills() {
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'Firebase', level: 80 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'Android Studio', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 75 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 75 },
    { name: 'C++', level: 70 }
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Time Management',
    'Adaptability',
    'Task Prioritization'
  ];

  const certifications = [
    'Postman API Fundamentals Student Expert',
    'UOM Web Development',
    'Kaggle Intro to Machine Learning',
    'Sololearn Python Intermediate'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>
        
        <div className="skills-grid">
          {/* Technical Skills */}
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill">
                  <span className="skill-tag">{skill}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="category-title" style={{ marginTop: '2rem' }}>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
