import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KitchenEstimate.css';

const feetOptions = Array.from(
  { length: 16 },
  (_, index) => index + 5
);

const inchOptions = Array.from(
  { length: 12 },
  (_, index) => index
);

export default function KitchenEstimate() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [estimateData, setEstimateData] = useState({
    bhk: '',

    kitchenShape: '',

    wallAFeet: '5',
    wallAInch: '0',

    wallBFeet: '5',
    wallBInch: '0',

    cabinetMaterial: '',

    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [status, setStatus] = useState('idle');

  function updateData(field, value) {
    setEstimateData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function nextStep() {
    setStep((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function previousStep() {
    setStep((prev) => prev - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2,

            subject:
              'New Kitchen Estimate Request — 9Square',

            form_type: 'Kitchen Estimate',

            bhk: estimateData.bhk,

            kitchen_shape:
              estimateData.kitchenShape,

            wall_a: `${estimateData.wallAFeet} Feet ${estimateData.wallAInch} Inch`,

            wall_b: `${estimateData.wallBFeet} Feet ${estimateData.wallBInch} Inch`,

            cabinet_material:
              estimateData.cabinetMaterial,

            name: estimateData.name,
            email: estimateData.email,
            phone: estimateData.phone,
            city: estimateData.city,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setTimeout(() => {
          navigate('/');
        }, 10000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section className="kitchen-estimate">

      <div className="kitchen-estimate__header">
        <h1>
          Get your free estimate in{' '}
          <span>under 30 seconds!</span>
        </h1>

        <p>
          Share your preferences for an accurate estimate
        </p>

        <div className="kitchen-estimate__progress">
          STEP {step} OF 4
        </div>
      </div>

      <div className="kitchen-estimate__container">

        {/* STEP 1 */}

        {step === 1 && (
          <div className="estimate-step">

            <h2>
              <strong>Step 1:</strong> Home Configuration
            </h2>

            <div className="bhk-options">

              {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map(
                (bhk) => (
                  <label
                    key={bhk}
                    className={`radio-option ${
                      estimateData.bhk === bhk
                        ? 'radio-option--active'
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="bhk"
                      value={bhk}
                      checked={estimateData.bhk === bhk}
                      onChange={(e) =>
                        updateData(
                          'bhk',
                          e.target.value
                        )
                      }
                    />

                    <span className="custom-radio" />

                    {bhk}
                  </label>
                )
              )}

            </div>

            <div className="step-buttons">
              <button
                className="next-button"
                disabled={!estimateData.bhk}
                onClick={nextStep}
              >
                NEXT
              </button>
            </div>

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="estimate-step">

            <h2>
              <strong>Step 2:</strong> Kitchen Shape
            </h2>

            <div className="shape-options">

              {[
                'L-Shape',
                'U-Shape',
                'Parallel',
              ].map((shape) => (
                <div
                  key={shape}
                  className={`shape-card ${
                    estimateData.kitchenShape === shape
                      ? 'shape-card--active'
                      : ''
                  }`}
                  onClick={() =>
                    updateData(
                      'kitchenShape',
                      shape
                    )
                  }
                >

                  <div className="shape-image-placeholder">
                    {shape}
                  </div>

                  <label className="shape-label">

                    <input
                      type="radio"
                      name="kitchenShape"
                      value={shape}
                      checked={
                        estimateData.kitchenShape === shape
                      }
                      onChange={() =>
                        updateData(
                          'kitchenShape',
                          shape
                        )
                      }
                    />

                    <span className="custom-radio" />

                    {shape}

                  </label>

                </div>
              ))}

            </div>

            {/* WALL SIZE */}

            {estimateData.kitchenShape && (
              <div className="wall-size-section">

                <h3>Wall Size</h3>

                <div className="wall-size-grid">

                  <div className="wall-size-row">

                    <span className="wall-label">
                      Wall A
                    </span>

                    <select
                      value={
                        estimateData.wallAFeet
                      }
                      onChange={(e) =>
                        updateData(
                          'wallAFeet',
                          e.target.value
                        )
                      }
                    >
                      {feetOptions.map((feet) => (
                        <option
                          key={feet}
                          value={feet}
                        >
                          {feet}
                        </option>
                      ))}
                    </select>

                    <span>Feet</span>

                    <select
                      value={
                        estimateData.wallAInch
                      }
                      onChange={(e) =>
                        updateData(
                          'wallAInch',
                          e.target.value
                        )
                      }
                    >
                      {inchOptions.map((inch) => (
                        <option
                          key={inch}
                          value={inch}
                        >
                          {inch}
                        </option>
                      ))}
                    </select>

                    <span>Inch</span>

                  </div>

                  {/* Parallel has two walls */}

                  {estimateData.kitchenShape ===
                    'Parallel' && (
                    <div className="wall-size-row">

                      <span className="wall-label">
                        Wall B
                      </span>

                      <select
                        value={
                          estimateData.wallBFeet
                        }
                        onChange={(e) =>
                          updateData(
                            'wallBFeet',
                            e.target.value
                          )
                        }
                      >
                        {feetOptions.map((feet) => (
                          <option
                            key={feet}
                            value={feet}
                          >
                            {feet}
                          </option>
                        ))}
                      </select>

                      <span>Feet</span>

                      <select
                        value={
                          estimateData.wallBInch
                        }
                        onChange={(e) =>
                          updateData(
                            'wallBInch',
                            e.target.value
                          )
                        }
                      >
                        {inchOptions.map((inch) => (
                          <option
                            key={inch}
                            value={inch}
                          >
                            {inch}
                          </option>
                        ))}
                      </select>

                      <span>Inch</span>

                    </div>
                  )}

                </div>

              </div>
            )}

            <div className="step-buttons">

              <button
                className="back-button"
                onClick={previousStep}
              >
                BACK
              </button>

              <button
                className="next-button"
                disabled={
                  !estimateData.kitchenShape
                }
                onClick={nextStep}
              >
                NEXT
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="estimate-step">

            <h2>
              <strong>Step 3:</strong> Cabinet Material
            </h2>

            <div className="material-options">

              {[
                'Particle Board',
                'BWP-Ply',
                'BWR-Ply',
                'HDHMR',
              ].map((material) => (

                <label
                  key={material}
                  className={`material-option ${
                    estimateData.cabinetMaterial ===
                    material
                      ? 'material-option--active'
                      : ''
                  }`}
                >

                  <input
                    type="radio"
                    name="cabinetMaterial"
                    value={material}
                    checked={
                      estimateData.cabinetMaterial ===
                      material
                    }
                    onChange={(e) =>
                      updateData(
                        'cabinetMaterial',
                        e.target.value
                      )
                    }
                  />

                  <span>
                    {material}
                  </span>

                </label>

              ))}

            </div>

            <div className="step-buttons">

              <button
                className="back-button"
                onClick={previousStep}
              >
                BACK
              </button>

              <button
                className="next-button"
                disabled={
                  !estimateData.cabinetMaterial
                }
                onClick={nextStep}
              >
                NEXT
              </button>

            </div>

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="estimate-step">

            <h2>
              <strong>Step 4:</strong> Meet Our Designer
            </h2>

            <p className="designer-text">
              Share your details and our team will
              contact you regarding your kitchen.
            </p>

            <form
              className="kitchen-contact-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Name"
                value={estimateData.name}
                onChange={(e) =>
                  updateData(
                    'name',
                    e.target.value
                  )
                }
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={estimateData.email}
                onChange={(e) =>
                  updateData(
                    'email',
                    e.target.value
                  )
                }
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={estimateData.phone}
                onChange={(e) =>
                  updateData(
                    'phone',
                    e.target.value
                  )
                }
                required
              />

              <select
                value={estimateData.city}
                onChange={(e) =>
                  updateData(
                    'city',
                    e.target.value
                  )
                }
                required
              >

                <option value="">
                  Select City
                </option>

                <option value="Lucknow">
                  Lucknow
                </option>

                <option value="Varanasi">
                  Varanasi
                </option>

              </select>

              <div className="step-buttons">

                <button
                  type="button"
                  className="back-button"
                  onClick={previousStep}
                >
                  BACK
                </button>

                <button
                  type="submit"
                  className="next-button"
                  disabled={
                    status === 'sending'
                  }
                >
                  {status === 'sending'
                    ? 'SENDING...'
                    : 'SUBMIT'}
                </button>

              </div>

              {status === 'success' && (
                <p className="form-success">
                  Thank you! Your request has been
                  submitted successfully. You will be
                  redirected to the home page in 10
                  seconds.
                </p>
              )}

              {status === 'error' && (
                <p className="form-error">
                  Something went wrong. Please try
                  again.
                </p>
              )}

            </form>

          </div>
        )}

      </div>
    </section>
  );
}