// import './ArchitectureProjectCategories.css';

// import project1 from '../../assets/architecture/project1.jpg';
// import project2 from '../../assets/architecture/project2.jpg';
// import project3 from '../../assets/architecture/project3.jpg';
// import project4 from '../../assets/architecture/project4.jpg';
// import project5 from '../../assets/architecture/project5.avif';
// import project6 from '../../assets/architecture/project6.avif';
// import project7 from '../../assets/architecture/project7.avif';
// import project8 from '../../assets/architecture/project8.avif';

// const projectCategories = [
//   {
//     image: project1,
//     title: 'Workspaces | Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project2,
//     title: 'Residential Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project3,
//     title: 'Institutional Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project4,
//     title: 'Commercial Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project5,
//     title: 'Hospitality Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project6,
//     title: 'Public Spaces',
//     link: 'https://google.com',
//   },
//   {
//     image: project7,
//     title: 'Landscape Architecture',
//     link: 'https://google.com',
//   },
//   {
//     image: project8,
//     title: 'Master Planning',
//     link: 'https://google.com',
//   },
// ];

// export default function ArchitectureProjectCategories() {
//   return (
//     <section className="architecture-project-categories">
//       <div className="architecture-project-categories__container">

//         <h2 className="architecture-project-categories__heading">
//           Explore Project Categories
//         </h2>

//         <div className="architecture-project-categories__grid">
//           {projectCategories.map((project, index) => (
//             <a
//               key={index}
//               href={project.link}
//               className="architecture-project-card"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="architecture-project-card__image"
//               />

//               <div className="architecture-project-card__overlay" />

//               <div className="architecture-project-card__content">
//                 <h3 className="architecture-project-card__title">
//                   {project.title}
//                 </h3>
//               </div>
//             </a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { useState } from 'react';
import './ArchitectureProjectCategories.css';

// =========================
// RESIDENTIAL
// =========================
import residential1 from '../../assets/architecture/residential/residential1.avif';
import residential2 from '../../assets/architecture/residential/residential2.jpg';
import residential3 from '../../assets/architecture/residential/residential3.jpg';
import residential4 from '../../assets/architecture/residential/residential4.jpg';
import residential5 from '../../assets/architecture/residential/residential5.jpg';
import residential6 from '../../assets/architecture/residential/residential6.avif';
import residential7 from '../../assets/architecture/residential/residential7.avif';
import residential8 from '../../assets/architecture/residential/residential8.avif';
import residential9 from '../../assets/architecture/residential/residential9.avif';
import residential10 from '../../assets/architecture/residential/residential10.jpg';

// =========================
// HOSPITALITY
// =========================
import hospitality1 from '../../assets/architecture/hospitality/hospitality1.avif';
import hospitality2 from '../../assets/architecture/hospitality/hospitality2.jpg';
import hospitality3 from '../../assets/architecture/hospitality/hospitality3.jpg';
import hospitality4 from '../../assets/architecture/hospitality/hospitality4.jpg';
import hospitality5 from '../../assets/architecture/hospitality/hospitality5.jpg';
import hospitality6 from '../../assets/architecture/hospitality/hospitality6.avif';
import hospitality7 from '../../assets/architecture/hospitality/hospitality7.avif';
import hospitality8 from '../../assets/architecture/hospitality/hospitality8.avif';
import hospitality9 from '../../assets/architecture/hospitality/hospitality9.avif';
import hospitality10 from '../../assets/architecture/hospitality/hospitality10.jpg';

// =========================
// WORKSPACES
// =========================
import workspace1 from '../../assets/architecture/workspaces/workspace1.jpg';
import workspace2 from '../../assets/architecture/workspaces/workspace2.jpg';
import workspace3 from '../../assets/architecture/workspaces/workspace3.jpg';
import workspace4 from '../../assets/architecture/workspaces/workspace4.jpg';
import workspace5 from '../../assets/architecture/workspaces/workspace5.avif';
import workspace6 from '../../assets/architecture/workspaces/workspace6.jpg';
import workspace7 from '../../assets/architecture/workspaces/workspace7.avif';
import workspace8 from '../../assets/architecture/workspaces/workspace8.avif';
import workspace9 from '../../assets/architecture/workspaces/workspace9.jpg';
import workspace10 from '../../assets/architecture/workspaces/workspace10.avif';

// =========================
// MASTER PLANNING
// =========================
import master1 from '../../assets/architecture/master-planning/master1.jpg';
import master2 from '../../assets/architecture/master-planning/master2.jpg';
import master3 from '../../assets/architecture/master-planning/master3.jpg';
import master4 from '../../assets/architecture/master-planning/master4.jpg';
import master5 from '../../assets/architecture/master-planning/master5.avif';
import master6 from '../../assets/architecture/master-planning/master6.jpg';
import master7 from '../../assets/architecture/master-planning/master7.avif';
import master8 from '../../assets/architecture/master-planning/master8.avif';
import master9 from '../../assets/architecture/master-planning/master9.jpg';
import master10 from '../../assets/architecture/master-planning/master10.avif';

// =========================
// PROJECT DATA
// =========================

const projectCategories = {
  Residential: [
    residential1,
    residential2,
    residential3,
    residential4,
    residential5,
    residential6,
    residential7,
    residential8,
    residential9,
    residential10,
  ],

  Hospitality: [
    hospitality1,
    hospitality2,
    hospitality3,
    hospitality4,
    hospitality5,
    hospitality6,
    hospitality7,
    hospitality8,
    hospitality9,
    hospitality10,
  ],

  Workspaces: [
    workspace1,
    workspace2,
    workspace3,
    workspace4,
    workspace5,
    workspace6,
    workspace7,
    workspace8,
    workspace9,
    workspace10,
  ],

  'Master Planning': [
    master1,
    master2,
    master3,
    master4,
    master5,
    master6,
    master7,
    master8,
    master9,
    master10,
  ],
};

// =========================
// ALL PROJECTS
// =========================

const allProjects = [
  ...projectCategories.Residential,
  ...projectCategories.Hospitality,
  ...projectCategories.Workspaces,
  ...projectCategories['Master Planning'],
];

const tabs = [
  {
    name: 'All Projects',
    count: 40,
  },
  {
    name: 'Residential',
    count: 10,
  },
  {
    name: 'Hospitality',
    count: 10,
  },
  {
    name: 'Workspaces',
    count: 10,
  },
  {
    name: 'Master Planning',
    count: 10,
  },
];

export default function ArchitectureProjectCategories() {
  const [activeTab, setActiveTab] = useState('Residential');

  const images =
    activeTab === 'All Projects'
      ? allProjects
      : projectCategories[activeTab];

  return (
    <section className="architecture-project-categories">

      {/* =========================
          CATEGORY NAVIGATION
      ========================= */}

      <div className="architecture-project-categories__nav">

        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            className={`architecture-project-tab ${
              activeTab === tab.name
                ? 'architecture-project-tab--active'
                : ''
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span>{tab.name}</span>

            <sup>({tab.count})</sup>
          </button>
        ))}

      </div>


      {/* =========================
          IMAGE GRID
      ========================= */}

      <div className="architecture-project-grid">

        {images.map((image, index) => (
          <div
            className={`architecture-project-item ${
              index % 4 === 2 || index % 4 === 3
                ? 'architecture-project-item--large'
                : ''
            }`}
            key={`${activeTab}-${index}`}
          >

            <img
              src={image}
              alt={`${activeTab} architecture project ${index + 1}`}
              loading={index < 6 ? 'eager' : 'lazy'}
            />

          </div>
        ))}

      </div>

    </section>
  );
}
