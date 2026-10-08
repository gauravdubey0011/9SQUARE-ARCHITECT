import './OurProcess.css';

const processSteps = [
  {
    number: '01',
    title: 'BRIEFING',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.75h7l4 4v12.5H7z" />
        <path d="M14 3.75v4h4M10 12h5M10 15.5h5" />
      </svg>
    ),
    description:
      'We begin with an exhaustive questionnaire to fully understand the client’s needs and expectations. The most important of all steps.',
  },
  {
    number: '02',
    title: 'DESIGN',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 16.75 11.9-11.9a2.1 2.1 0 0 1 3 3L7 19.75 3.5 20.5z" />
        <path d="m13.8 6.95 3 3" />
      </svg>
    ),
    description:
      'Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.',
  },
  {
    number: '03',
    title: 'EXECUTION',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16M6.5 20V9h11v11M9 9V5h6v4M10 13h4M10 16h4" />
      </svg>
    ),
    description:
      'Bringing our designs to life by building it from the ground up. As we only take on end-to-end projects, everything from structural design to decor is executed in this phase.',
  },
  {
    number: '04',
    title: 'HANDOVER',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5M9.5 20v-6h5v6" />
        <path d="m9 10.5 2 2 4-4" />
      </svg>
    ),
    description:
      'The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.',
  },
];

export default function OurProcess() {
  return (
    <section className="our-process">

      <div className="our-process__intro">
        <p className="our-process__eyebrow">OUR PROCESS</p>
        <h2>A clear path from first brief to final handover</h2>
        <p className="our-process__stat">
          <strong>Over 10,000 sq ft</strong> of premium commercial and residential spaces in execution globally
        </p>
      </div>

      <div className="our-process__content">
        <div className="our-process__grid">
          {processSteps.map((step) => (
            <article
              className="our-process__step"
              key={step.number}
            >

              <div className="our-process__number">
                {step.number}
              </div>

              <div className="our-process__icon-wrapper">
                {step.icon}
              </div>

              <div className="our-process__info">

                <h4>{step.title}</h4>

                <p>{step.description}</p>

              </div>

            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
