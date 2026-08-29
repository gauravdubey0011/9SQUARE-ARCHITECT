import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeInteriorEstimate.css';

export default function HomeInteriorEstimate() {
    const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [estimateData, setEstimateData] = useState({
    floorplan: '',
    purpose: '',
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
    if (!estimateData.floorplan || !estimateData.purpose) {
      return;
    }

    setStep(2);
  }

  function handleBack() {
    setStep(1);
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
            access_key:
              import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,

            subject:
              'New Full Home Interior Estimate Enquiry',

            from_name: contactData.name,

            replyto: contactData.email,

            // Step 1 information
            enquiry_type: 'Full Home Interior',
            floorplan: estimateData.floorplan,
            purpose: estimateData.purpose,

            // Step 2 information
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
            floorplan: '',
            purpose: '',
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
    <main className="home-interior-estimate">
      <div className="estimate-page-header">
        <h1>
          Get your free estimate in{' '}
          <span>under 30 seconds!</span>
        </h1>

        <p>
          Share your preferences for an accurate estimate
        </p>

        <div className="estimate-step-indicator">
          STEP <strong>{step}</strong> OF 2
        </div>
      </div>

      <div className="estimate-form-container">
        {step === 1 && (
          <>
            <div className="estimate-form-left">
              <h2>Your floorplan</h2>

              <div className="option-group floorplan-options">
                {['1 BHK', '2 BHK', '3 BHK', '3+ BHK'].map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        estimateData.floorplan === option
                          ? 'estimate-option active'
                          : 'estimate-option'
                      }
                      onClick={() =>
                        handleEstimateChange(
                          'floorplan',
                          option
                        )
                      }
                    >
                      {option}
                    </button>
                  )
                )}
              </div>

              <h2 className="purpose-heading">
                Purpose
              </h2>

              <div className="option-group purpose-options">
                {['Move In', 'Rent Out', 'Renovate'].map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        estimateData.purpose === option
                          ? 'estimate-option active'
                          : 'estimate-option'
                      }
                      onClick={() =>
                        handleEstimateChange(
                          'purpose',
                          option
                        )
                      }
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="estimate-form-right">
              <div className="floorplan-illustration">
                <div className="room room-1"></div>
                <div className="room room-2"></div>
                <div className="room room-3"></div>
                <div className="room room-4"></div>
                <div className="room room-5"></div>
              </div>

              <div className="illustration-text">
                Interiors made easy
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="contact-step">
            <div className="contact-step-header">
              <h2>Almost there!</h2>
              <p>
                Enter your contact details to receive your
                estimate.
              </p>
            </div>

            <div className="selected-details">
              <div>
                <span>Floorplan</span>
                <strong>{estimateData.floorplan}</strong>
              </div>

              <div>
                <span>Purpose</span>
                <strong>{estimateData.purpose}</strong>
              </div>
            </div>

            <form
              className="estimate-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={contactData.name}
                  onChange={handleContactChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={contactData.phone}
                  onChange={handleContactChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />

                <select
                  name="city"
                  value={contactData.city}
                  onChange={handleContactChange}
                  required
                >
                  <option value="" disabled>
                    City
                  </option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Varanasi">Varanasi</option>
                </select>
              </div>

              <div className="estimate-navigation">
                <button
                  type="button"
                  className="back-button"
                  onClick={handleBack}
                >
                  ← BACK
                </button>

                <button
                  type="submit"
                  className="next-button"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? 'SENDING...'
                    : 'GET ESTIMATE →'}
                </button>
              </div>

              {status === 'success' && (
                <div className="estimate-success">
                  Thank you! Your details have been
                  submitted successfully. We will contact
                  you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="estimate-error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      {step === 1 && (
        <button
          type="button"
          className="estimate-next-button"
          onClick={handleNext}
          disabled={
            !estimateData.floorplan ||
            !estimateData.purpose
          }
        >
          NEXT
        </button>
      )}
    </main>
  );
}