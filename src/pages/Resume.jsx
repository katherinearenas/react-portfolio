export default function Resume() {
        return (
          <div className="resume is-centered">
            <h2>Resume</h2>
      
            {/* Personal Information */}
            <section className="personal-info">
              <h3>Katherine Arenas</h3>
              <p>Email: katherineelainearenas@gmail.com</p>
              <p>Location: Chicago, IL</p>
              <p><a href="github.com/katherinearenas">Github</a></p>
            </section>
      
            {/* Summary */}
            <section className="summary">
              <h3>Summary</h3>
              <p>
                Fullstack web developer with experience in building responsive, dynamic web applications. Proficient in JavaScript, Node.js, Express, SQL, Sequelize, MongoDb, GraphQL, and React excited about learning both back and front-end technologies. Passionate about problem-solving and delivering pleasant user experiences.
              </p>
            </section>
            <section className="skills">
              <h3>Technical Skills</h3>
              <ul>
                <li>JavaScript (ES6+), HTML, CSS</li>
                <li>React, React Router</li>
                <li>Node.js, Express, Sequelize</li>
                <li>Version Control (Git, GitHub)</li>
                <li>RESTFUL APIs, GraphQL</li>
                <li>Responsive Design, Bootstrap, Bulma</li>
              </ul>
            </section>
      
            {/* Work Experience */}
            <section className="experience">
              <h3>Work Experience</h3>
              <div className="job">
                <h4>Freelance Data Migration Assistant</h4>
                <p>Various Projects | 2023-2024</p>
                <ul>
                  <li>Streamlined local files, and cloud storage.</li>
                  <li> Worked with client to create company bios, about, and written resources.</li>
                  <li>Helped to enhance clarity and SEO.</li>
                </ul>
              </div>
      
              <div className="job">
                <h4>Front Desk</h4>
                <p>Symmetry Physical Therapy | 2023</p>
                <ul>
                  <li>Collected insurance information from patients for billing purposes</li>
                  <li>Helped modernize the front desk for a more productive workspace</li>
                  <li>Managed files and calendars .</li>
                </ul>
              </div>
              <div className="job">
                <h4>Coursework in Ceramics and Drawing</h4>
                <p>2022-2024</p>
                <ul>
                  <li>Learned how to work with clay to create three dimensional forms</li>
                  <li>Developed a Zine series, wrote multiple issues and still creating new ones.</li>
                  <li>Developed drawing skills and studied design.</li>
                </ul>
              </div>
              <div className="job">
                <h4>Freelance Data Migration Assistant</h4>
                <p>Various Projects | 2023-2024</p>
                <ul>
                  <li>Streamlined local files, and cloud storage.</li>
                  <li> Worked with client to create company bios, about, and written resources.</li>
                  <li>Helped to enhance clarity and SEO.</li>
                </ul>
              </div>
            </section>
      
            {/* Education */}
            <section className="education">
              <h3>Education</h3>
              <ul>
              <li><p><strong>Juris Doctorate</strong> - University of Illinois Urbana-Champaign - Illinois College of Law (Class of 2017)</p></li>
              <li><p><strong>Bachelor of Arts in Political Science</strong> - University of Illinois Urbana-Champaign (Class of 2014)</p></li>
              <li><p><strong>High School Diploma</strong> - Illinois Mathematics and Science Academy (Class of 2011)</p></li>
                </ul>
            </section>
      
            {/* Certifications (Optional) */}
            <section className="certifications">
              <h3>Certifications</h3>
              <p><strong>Full Stack Web Development</strong> - Northwestern Bootcamp (2024)</p>
              </section>
{/*       
            // {/* Projects 
            <section className="projects">
              <h3>Projects</h3>
              <div className="project">
                <h4>Book Club App</h4>
                <p>A web application to manage members, books, and clubs using React, Node.js, Express, and Sequelize.</p>
                <a href="https://github.com/katherine-arenas/book-club-app" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
      
              <div className="project">
                <h4>Portfolio Website</h4>
                <p>Built a personal portfolio showcasing projects and experience using React, Sass, and CSS3.</p>
                <a href="https://github.com/katherine-arenas/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </section> */}
          </div> 
        );
      };    