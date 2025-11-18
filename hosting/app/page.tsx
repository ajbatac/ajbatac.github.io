export default function Page() {
  return (
    <div className="container" style={{ maxWidth: '1100px', margin: 'auto', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem', padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', color: '#fff', borderRadius: '0 0 30px 30px' }}>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Allan "AJ" Batac</h1>
        <p style={{ fontSize: 'var(--text-xl)', marginTop: '1rem', fontWeight: '400', opacity: '0.9' }}>Tech Leader | Web Applications Developer | Futurist | Ideator | SWE</p>
      </header>

      <section style={{ background: 'var(--section-bg-color)', padding: '4rem', borderRadius: '20px', boxShadow: '0 10px 30px var(--shadow-color)', marginBottom: '4rem' }}>
        <h2>📝 Summary</h2>
        <ul>
          <li>Designed and developed over 100 websites from ideation to launch.</li>
          <li>Led and mentored diverse teams of developers, designers, and QA testers.</li>
          <li>Ideated and invented new products to sell to 8 million users, with 4 million active daily users.</li>
          <li>Managed a high-traffic website with over 500,000 daily views.</li>
          <li>Contributed to a successful acquisition by Kleiner Perkins for a multi-million dollar sum.</li>
          <li>Led the launch of a video streaming project featuring Dr. Fauci on CNN, reaching millions of concurrent viewers.</li>
          <li>Engineered scalable and resilient cloud solutions on AWS, GCP, and Digital Ocean.</li>
          <li>Mastered both LAMP and MERN stacks for robust back-end development.</li>
          <li>Championed exceptional user experiences with a focus on UI/UX and AODA/WCAG 2.1 compliance.</li>
          <li>Innovated with emerging technologies, including Generative AI, AI Agents, and LLMs.</li>
        </ul>
      </section>

      <section style={{ background: 'var(--section-bg-color)', padding: '4rem', borderRadius: '20px', boxShadow: '0 10px 30px var(--shadow-color)', marginBottom: '4rem' }}>
        <h2>🛠️ Key Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {['Leadership', 'Project Management', 'AWS', 'GCP', 'React', 'Node.js', 'TypeScript', 'UI/UX', 'AI', 'LLM'].map((skill) => (
            <span
              key={skill}
              style={{
                background: 'var(--bg-color)',
                color: 'var(--primary-color)',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                transition: 'background-color 0.3s, color 0.3s',
                border: '2px solid var(--primary-color)',
                lineHeight: 'var(--leading-normal)',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: '#777', marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--section-bg-color)' }}>
        © {new Date().getFullYear()} Allan Batac | All Rights Reserved
      </footer>
    </div>
  );
}
