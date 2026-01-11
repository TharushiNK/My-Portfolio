import './SkillsHorizontal.css';

export default function SkillsHorizontal() {
  const techSkills = [
    'Java',
    'Spring Boot',
    'React',
    'MySQL',
    'Firebase',
    'REST APIs',
    'Android',
    'JavaScript',
    'Express.js',
    'MongoDB',
    'Python',
    'C++'
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Time Management',
    'Adaptability',
    'Leadership'
  ];

  const certifications = [
    'Postman API Fundamentals',
    'UOM Web Development',
    'Kaggle Intro to ML',
    'Sololearn Python'
  ];

  const education = [
    { degree: 'BSC (Hons) Computing', institution: 'NIBM', year: 'In Progress' },
    { degree: 'HND Software Engineering', institution: 'NIBM', year: 'In Progress' },
    { degree: 'Diploma in SE', institution: 'NIBM', year: '2023-24' },
    { degree: 'Certificate in IT', institution: 'ESOFT', year: '2022-23' }
  ];

  return (
    <section id="skills-overview" className="skills-horizontal">
      <div className="container">
        <div className="skills-cards">
          {/* Tech Skills */}
          <div className="skill-card glass-card">
            <div className="card-header">
              <h3>💻 Technical Skills</h3>
              <span className="card-count">{techSkills.length}</span>
            </div>
            <div className="skills-tags">
              {techSkills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-card glass-card">
            <div className="card-header">
              <h3>🌟 Soft Skills</h3>
              <span className="card-count">{softSkills.length}</span>
            </div>
            <div className="skills-tags">
              {softSkills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="skill-card glass-card">
            <div className="card-header">
              <h3>🏆 Certifications</h3>
              <span className="card-count">{certifications.length}</span>
            </div>
            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="skill-card glass-card">
            <div className="card-header">
              <h3>🎓 Education</h3>
              <span className="card-count">{education.length}</span>
            </div>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-meta">{edu.institution} • {edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
