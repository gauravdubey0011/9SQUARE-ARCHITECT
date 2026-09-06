import './ArchitectureProjectCategories.css';

import project1 from '../../assets/architecture/project1.jpg';
import project2 from '../../assets/architecture/project2.jpg';
import project3 from '../../assets/architecture/project3.jpg';
import project4 from '../../assets/architecture/project4.jpg';
import project5 from '../../assets/architecture/project5.avif';
import project6 from '../../assets/architecture/project6.avif';
import project7 from '../../assets/architecture/project7.avif';
import project8 from '../../assets/architecture/project8.avif';

const projectCategories = [
  {
    image: project1,
    title: 'Workspaces | Architecture',
    link: 'https://google.com',
  },
  {
    image: project2,
    title: 'Residential Architecture',
    link: 'https://google.com',
  },
  {
    image: project3,
    title: 'Institutional Architecture',
    link: 'https://google.com',
  },
  {
    image: project4,
    title: 'Commercial Architecture',
    link: 'https://google.com',
  },
  {
    image: project5,
    title: 'Hospitality Architecture',
    link: 'https://google.com',
  },
  {
    image: project6,
    title: 'Public Spaces',
    link: 'https://google.com',
  },
  {
    image: project7,
    title: 'Landscape Architecture',
    link: 'https://google.com',
  },
  {
    image: project8,
    title: 'Master Planning',
    link: 'https://google.com',
  },
];

export default function ArchitectureProjectCategories() {
  return (
    <section className="architecture-project-categories">
      <div className="architecture-project-categories__container">

        <h2 className="architecture-project-categories__heading">
          Explore Project Categories
        </h2>

        <div className="architecture-project-categories__grid">
          {projectCategories.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="architecture-project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="architecture-project-card__image"
              />

              <div className="architecture-project-card__overlay" />

              <div className="architecture-project-card__content">
                <h3 className="architecture-project-card__title">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}