import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WardrobeEstimate.css';

const wardrobeTypes = ['Sliding', 'Swing'];

const materials = [
  'Laminate',
  'Acrylic',
  'Membrane',
  'Veneer',
  'PU Finish',
];

export default function WardrobeEstimate() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [estimateData, setEstimateData] = useState({
    height: '',
    wardrobeType: '',
    material: '',
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [status, setStatus] = useState('idle');

  function handleEstimateChange(field, value) {
    setEstimateData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleContactChange(e) {
    setContactData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleNext() {
    if (step === 1 && !estimateData.height) {
      return;
    }

    if (step === 2 && !estimateData.wardrobeType) {
      return;
    }

    if (step === 3 && !estimateData.material) {
      return;
    }

    setStep((prev) => prev + 1);
  }

  function handleBack() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus('sending');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2,

            subject: 'New Wardrobe Estimate Enquiry',

            from_name: contactData.name,
            replyto: contactData.email,

            enquiry_type: 'Wardrobe Estimate',

            wardrobe_height: estimateData.height,
            wardrobe_type: estimateData.wardrobeType,
            material: estimateData.material,

            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
            city: contactData.city,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setEstimateData({
          height: '',
          wardrobeType: '',
          material: '',
        });

        setContactData({
          name: '',
          email: '',
          phone: '',
          city: '',
        });

        setTimeout(() => {
          navigate('/');
        }, 10000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <main className="wardrobe-estimate">
      <div className="wardrobe-estimate__header">
        <h1>
          Get your free wardrobe estimate in{' '}
          <span>under 30 seconds!</span>
        </h1>

        <p>
          Tell us about your wardrobe preferences.
        </p>

        <div className="wardrobe-estimate__step">
          STEP <strong>{step}</strong> OF 4
        </div>
      </div>

      <div className="wardrobe-estimate__container">

        {/* STEP 1 */}

        {step === 1 && (
          <section className="wardrobe-step">
            <div className="wardrobe-step__content">
              <span className="wardrobe-step__number">
                01
              </span>

              <h2>
                What is the height of your wardrobe?
              </h2>

              <p>
                Select the approximate wardrobe height.
              </p>

              <div className="height-options">
                {[4, 5, 6, 7, 8, 9].map((height) => (
                  <button
                    key={height}
                    type="button"
                    className={
                      estimateData.height === `${height} ft`
                        ? 'wardrobe-option active'
                        : 'wardrobe-option'
                    }
                    onClick={() =>
                      handleEstimateChange(
                        'height',
                        `${height} ft`
                      )
                    }
                  >
                    {height} ft
                  </button>
                ))}
              </div>

              <div className="wardrobe-navigation">
                <button
                  type="button"
                  className="wardrobe-next-button"
                  disabled={!estimateData.height}
                  onClick={handleNext}
                >
                  NEXT →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <section className="wardrobe-step">
            <div className="wardrobe-step__content">
              <span className="wardrobe-step__number">
                02
              </span>

              <h2>
                What type of wardrobe do you want?
              </h2>

              <p>
                Choose the wardrobe opening style.
              </p>

              <div className="wardrobe-type-options">
                {wardrobeTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={
                      estimateData.wardrobeType === type
                        ? 'wardrobe-option wardrobe-type-card active'
                        : 'wardrobe-option wardrobe-type-card'
                    }
                    onClick={() =>
                      handleEstimateChange(
                        'wardrobeType',
                        type
                      )
                    }
                  >
                    <div className="wardrobe-icon">
                      {type === 'Sliding' ? '⇆' : '↔'}
                    </div>

                    <strong>{type}</strong>

                    <span>
                      {type === 'Sliding'
                        ? 'Space-saving sliding doors'
                        : 'Classic opening doors'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="wardrobe-navigation">
                <button
                  type="button"
                  className="wardrobe-back-button"
                  onClick={handleBack}
                >
                  ← BACK
                </button>

                <button
                  type="button"
                  className="wardrobe-next-button"
                  disabled={!estimateData.wardrobeType}
                  onClick={handleNext}
                >
                  NEXT →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <section className="wardrobe-step">
            <div className="wardrobe-step__content">
              <span className="wardrobe-step__number">
                03
              </span>

              <h2>
                What type of material do you want?
              </h2>

              <p>
                Select the material or finish you prefer.
              </p>

              <div className="material-options">
                {materials.map((material) => (
                  <button
                    key={material}
                    type="button"
                    className={
                      estimateData.material === material
                        ? 'wardrobe-option material-card active'
                        : 'wardrobe-option material-card'
                    }
                    onClick={() =>
                      handleEstimateChange(
                        'material',
                        material
                      )
                    }
                  >
                    {material}
                  </button>
                ))}
              </div>

              <div className="wardrobe-navigation">
                <button
                  type="button"
                  className="wardrobe-back-button"
                  onClick={handleBack}
                >
                  ← BACK
                </button>

                <button
                  type="button"
                  className="wardrobe-next-button"
                  disabled={!estimateData.material}
                  onClick={handleNext}
                >
                  NEXT →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <section className="wardrobe-contact-step">
            <div className="wardrobe-contact-card">

              <div className="wardrobe-contact-info">
                <div className="contact-decoration">
                  ✦
                </div>

                <span className="wardrobe-contact-tag">
                  FREE QUOTE
                </span>

                <h2>
                  Your dream wardrobe is almost ready
                </h2>

                <p>
                  Share your contact details and our team
                  will help you with the next steps.
                </p>

                <div className="wardrobe-summary">
                  <div>
                    <span>Height</span>
                    <strong>{estimateData.height}</strong>
                  </div>

                  <div>
                    <span>Wardrobe Type</span>
                    <strong>
                      {estimateData.wardrobeType}
                    </strong>
                  </div>

                  <div>
                    <span>Material</span>
                    <strong>
                      {estimateData.material}
                    </strong>
                  </div>
                </div>
              </div>

              <form
                className="wardrobe-contact-form"
                onSubmit={handleSubmit}
              >
                <h3>Get your free quote</h3>

                <p>
                  Fill in your details and we'll contact you.
                </p>

                <div className="wardrobe-form-field">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={contactData.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="wardrobe-form-field">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="wardrobe-form-field">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={contactData.phone}
                    onChange={handleContactChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    inputMode="numeric"
                    required
                  />
                </div>

                <div className="wardrobe-form-field">
                  <label>City</label>

                  <select
                    name="city"
                    value={contactData.city}
                    onChange={handleContactChange}
                    required
                  >
                    <option value="" disabled>
                      Select your city
                    </option>

                    <option value="Lucknow">
                      Lucknow
                    </option>

                    <option value="Varanasi">
                      Varanasi
                    </option>
                  </select>
                </div>

                <div className="wardrobe-contact-buttons">
                  <button
                    type="button"
                    className="wardrobe-back-button"
                    onClick={handleBack}
                    disabled={status === 'sending'}
                  >
                    ← BACK
                  </button>

                  <button
                    type="submit"
                    className="wardrobe-submit-button"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending'
                      ? 'SENDING...'
                      : 'GET FREE QUOTE →'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="wardrobe-success">
                    Our team will contact you soon.
                    Redirecting you to the home page...
                  </div>
                )}

                {status === 'error' && (
                  <div className="wardrobe-error">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}