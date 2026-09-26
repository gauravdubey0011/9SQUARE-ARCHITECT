import './OurProcess.css';

// Replace these paths with the actual paths of your icons
import briefingIcon from '../../assets/icons/icon-9square.png';
import designIcon from '../../assets/icons/calculator.png';
import executionIcon from '../../assets/icons/instagram.png';
import handoverIcon from '../../assets/icons/kitchen.png';

const processSteps = [
  {
    number: '01',
    title: 'BRIEFING',
    icon: briefingIcon,
    description:
      'We begin with an exhaustive questionnaire to fully understand the client’s needs and expectations. The most important of all steps.',
  },
  {
    number: '02',
    title: 'DESIGN',
    icon: designIcon,
    description:
      'Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.',
  },
  {
    number: '03',
    title: 'EXECUTION',
    icon: executionIcon,
    description:
      'Bringing our designs to life by building it from the ground up. As we only take on end-to-end projects, everything from structural design to decor is executed in this phase.',
  },
  {
    number: '04',
    title: 'HANDOVER',
    icon: handoverIcon,
    description:
      'The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.',
  },
];

export default function OurProcess() {
  return (
    <section className="our-process">

      {/* =========================
          INTRO / STATEMENT
      ========================= */}
      <div className="our-process__intro">
        <h2>
          Over 10,000 sq ft of premium commercial and
          residential spaces in execution globally
        </h2>
      </div>

      {/* =========================
          PROCESS SECTION
      ========================= */}
      <div className="our-process__content">

        <h3 className="our-process__heading">
          Our Process
        </h3>

        <div className="our-process__grid">
          {processSteps.map((step) => (
            <article
              className="our-process__step"
              key={step.number}
            >

              {/* Number */}
              <div className="our-process__number">
                {step.number}
              </div>

              {/* Icon */}
              <div className="our-process__icon-wrapper">
                <img
                  src={step.icon}
                  alt={`${step.title} process`}
                  className="our-process__icon"
                />
              </div>

              {/* Text */}
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