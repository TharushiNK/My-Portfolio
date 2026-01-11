import './Education.css';

export default function Education() {
  const education = [
    {
      degree: "BSC (Hons) Computing (Software Engineering Pathway)",
      institution: "NIBM",
      period: "In Progress",
      status: "Pursuing"
    },
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "NIBM",
      period: "In Progress",
      status: "Pursuing"
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "NIBM",
      period: "2023 – 2024",
      gpa: "GPA: 3.95",
      status: "Completed"
    },
    {
      degree: "Certificate in Information Technology",
      institution: "ESOFT",
      period: "2022 – 2023",
      status: "Completed"
    },
    {
      degree: "GCE A/Ls (Biology)",
      institution: "School",
      period: "2021",
      details: "Chemistry – C, Biology – S, Physics – S",
      status: "Completed"
    },
    {
      degree: "GCE O/Ls (English Medium)",
      institution: "School",
      period: "2018",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{item.degree}</h3>
                  <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                </div>
                <p className="institution">{item.institution}</p>
                <p className="period">{item.period}</p>
                {item.gpa && <p className="gpa">{item.gpa}</p>}
                {item.details && <p className="details">{item.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
