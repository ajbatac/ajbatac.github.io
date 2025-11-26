
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container">
      <header>
        <div className="header-controls">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" title="Toggle Dark/Light Mode">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="font-sizer-wrapper">
            <button className="font-sizer-btn" title="Decrease Font Size">-A</button>
            <button className="font-sizer-btn" title="Reset Font Size">T</button>
            <button className="font-sizer-btn" title="Increase Font Size">+A</button>
          </div>
        </div>
        
        <img src="/linkn-logo-trans.png" alt="Allan Batac" className="profile-img" />
        <h1>Allan "AJ" Batac</h1>
        <p>Tech Leader | Web Applications Developer | Futurist | Ideator | SWE</p>

        <div className="contact-info">
            <a href="tel:+12042281074" title="Call">📞</a>
            <a href="mailto:ajbatac@gmail.com" title="Email">✉️</a>
            <a href="https://linkedin.com/in/ajbatac" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href="https://ajbatac.com" target="_blank" rel="noopener noreferrer" title="Personal Website">🌐</a>
        </div>
      </header>

      <div className="jump-links">
          <a href="#summary">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
      </div>

      <section id="summary">
        <div className="section-header">
          <h2>📝 Summary</h2>
        </div>
        <div className="section-content">
          <ul>
            <li>Proven Tech Leader with 25+ years of experience in tech leadership and web application development.</li>
            <li>Expert in developing scalable web applications and resilient cloud solutions on AWS, GCP, and Digital Ocean.</li>
            <li>Passionate about AI integration, exploring Generative AI, AI Agents, and LLMs to drive future solutions.</li>
            <li>Championed exceptional user experiences with a focus on UI/UX and AODA/WCAG 2.1 compliance.</li>
          </ul>
        </div>
      </section>

      <section id="skills">
        <div className="section-header">
          <h2>🛠️ Skills</h2>
        </div>
        <div className="section-content">
          <div className="skills">
              <div className="skill-category">
                  <strong>Languages:</strong>
                  <div className="skill-pills">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">PHP</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">HTML</span>
                  </div>
              </div>
              <div className="skill-category">
                  <strong>Frameworks:</strong>
                  <div className="skill-pills">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">Flutter</span>
                      <span className="skill-tag">LAMP</span>
                      <span className="skill-tag">MERN</span>
                  </div>
              </div>
              <div className="skill-category">
                  <strong>Tools:</strong>
                  <div className="skill-pills">
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">Docker</span>
                      <span className="skill-tag">AWS</span>
                      <span className="skill-tag">GCP</span>
                      <span className="skill-tag">Jira</span>
                  </div>
              </div>
              <div className="skill-category">
                  <strong>AI:</strong>
                  <div className="skill-pills">
                      <span className="skill-tag">LLM</span>
                      <span className="skill-tag">RAG</span>
                      <span className="skill-tag">AI Agents</span>
                      <span className="skill-tag">Context Engineering</span>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-header">
          <h2>🏢 Experience</h2>
        </div>
        <div className="section-content">
          <div className="experience">
            <div className="job-title">Senior Webmaster</div>
            <div className="company-name">Financial Services Regulatory Authority of Ontario (FSRA)</div>
            <span className="time-location">Mar 2023 – Present | Toronto, Ontario</span>
            <ul>
              <li>Lead technical development and deployment of public-facing web platforms including FSRA's website and social media channels.</li>
              <li>Collaborate with cross-functional teams to ensure exceptional user experiences aligned with stakeholder needs.</li>
            </ul>
          </div>

          <div className="experience">
            <div className="job-title">IT Leader</div>
            <div className="company-name">Association TV</div>
            <span className="time-location">May 2022 – Mar 2023 | Winnipeg, Manitoba</span>
            <ul>
              <li>Managed IT and Web professionals to enhance technology infrastructure and systems performance.</li>
              <li>Migrated sites to load-balanced auto-scaling clusters; reduced response time by 30%.</li>
            </ul>
          </div>

          <div className="experience">
              <div className="job-title">Web Team Leader</div>
              <div className="company-name">Association TV</div>
              <span className="time-location">Aug 2010 – Jun 2022 | Winnipeg, Manitoba</span>
              <ul>
                <li>Built and expanded a high-performing web team managing over 100 web properties.</li>
                <li>Expert in LAMP stack, AWS, GCP, and Google Dart/Flutter.</li>
              </ul>
            </div>
        </div>
      </section>

      <section id="certifications">
        <div className="section-header">
          <h2>📜 Certifications</h2>
        </div>
        <div className="section-content">
          <ul>
            <li>Inclusive Leadership</li>
            <li>Critical Thinking for More Effective Communication</li>
            <li>Managing a Multigenerational Team</li>
            <li>Understanding Deepfake</li>
            <li>Building ChatGPT Plugins</li>
            <li>Understanding RAG/Inference</li>
            <li>Understanding Generative AI</li>
            <li>AWS DevOps Certified</li>
          </ul>
        </div>
      </section>

      <section id="education">
        <div className="section-header">
          <h2>🎓 Education</h2>
        </div>
        <div className="education section-content">
          <p><strong>University of Santo Tomas</strong> <span className="time-location">BSECE, Electronics and Communications</span></p>
          <p><strong>Holy Angel University</strong> <span className="time-location">BSCS, Computer Science</span></p>
          <p><strong>Don Bosco Academy</strong> <span className="time-location">Diploma, High School</span></p>
        </div>
      </section>

      <section id="recent-apps">
          <div className="section-header">
            <h2>🚀 Recent Web Apps</h2>
          </div>
          <div className="section-content">
            <div className="apps-grid">
              <div className="app-card">
                  <h3>Colour Palette Generator</h3>
                  <p>Professional-grade color palette generator with harmony algorithms.</p>
                  <a href="https://colourpalettes.techhive.net/" target="_blank" rel="noopener noreferrer">Visit App</a>
              </div>
              <div className="app-card">
                  <h3>kulay</h3>
                  <p>Modern web application for discovering and managing color palettes.</p>
                  <a href="https://kulay.ca/?=github" target="_blank" rel="noopener noreferrer">Visit App</a>
              </div>
              <div className="app-card">
                  <h3>Palayok</h3>
                  <p>AI-powered cooking companion for converting units and tips.</p>
                  <a href="https://palayok.ca/?=github" target="_blank" rel="noopener noreferrer">Visit App</a>
              </div>
               <div className="app-card">
                  <h3>Celebrity r8r</h3>
                  <p>Rate actors and view AI-powered summaries of celebrities.</p>
                  <a href="https://celebrity.r8r.website/?=github" target="_blank" rel="noopener noreferrer">Visit App</a>
              </div>
            </div>
          </div>
        </section>

      <footer>
        © {new Date().getFullYear()} Allan Batac Inc. All rights reserved.
      </footer>
    
      {/* Chat bubble button */}
      <button className="chat-bubble-btn" title="Contact Me">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </button>
    </div>
  );
}
