import './ArchitectureFooter.css';

const architectureProjects = [
  'Workspace',
  'Residential',
  'Culture',
  'Education',
  'Wellness',
  'Hospitality',
  'Adaptive Re Use',
  'Industrial',
];

const interiorProjects = [
  'Workspace',
  'Residential',
  'Culture',
  'Wellness',
  'Hospitality',
  'Retail',
];

export default function ArchitectureFooter() {
  return (
    <footer className="architecture-footer">
      <div className="architecture-footer__inner">

        {/* Brand / Address / Contact */}
        <div className="architecture-footer__brand">

          <a href="/" className="architecture-footer__logo">
            9SQUARE
          </a>

          <div className="architecture-footer__section">
            <h3>Address</h3>

            <p>
              5/66, Apna Ghar Yojna, Sector 4,
              <br />
              Near Shaheed Path,
              <br />
              Lucknow, Uttar Pradesh,
              <br />
              226010
            </p>
          </div>

          <div className="architecture-footer__section">
            <h3>Contact</h3>

            <p>+91 8800333929</p>
          </div>

        </div>

        {/* Architecture Projects */}
        <div className="architecture-footer__column">

          <h2>
            Architecture
            <br />
            Projects
          </h2>

          <ul>
            {architectureProjects.map((project) => (
              <li key={project}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Interior Projects */}
        <div className="architecture-footer__column">

          <h2>
            Interior
            <br />
            Projects
          </h2>

          <ul>
            {interiorProjects.map((project) => (
              <li key={project}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Email / Social */}
        <div className="architecture-footer__contact">

          <h2>Email</h2>

          <p className="architecture-footer__label">
            For general inquiry:
          </p>

          <a
            href="mailto:kuchbhi@9square.com"
            className="architecture-footer__email"
          >
            kuchbhi@9square.com
          </a>

          <p className="architecture-footer__label architecture-footer__team">
            Join our team:
          </p>

          <a
            href="mailto:kuchbhi@9square.com"
            className="architecture-footer__email"
          >
            kuchbhi@9square.com
          </a>

          {/* Social icons */}
          <div className="architecture-footer__socials">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span>IG</span>
            </a>

            <a
              href="https://in.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <span>P</span>
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span>IN</span>
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <span>YT</span>
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="architecture-footer__bottom">
        <p>
          © {new Date().getFullYear()} 9SQUARE. All rights reserved.
        </p>
      </div>

    </footer>
  );
}