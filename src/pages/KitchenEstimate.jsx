import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KitchenEstimate.css';

const feetOptions = Array.from({ length: 16 }, (_, index) => index + 5);
const inchOptions = Array.from({ length: 12 }, (_, index) => index);

const NAME_REGEX = /^[a-zA-Z\s]{2,50}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

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
    wallCFeet: '5',
    wallCInch: '0',

    cabinetMaterial: '',

    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [status, setStatus] = useState('idle');

  function updateData(field, value) {
    setEstimateData((prev) => ({ ...prev, [field]: value }));
  }

  function validateField(name, value) {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!NAME_REGEX.test(value.trim())) return 'Enter a valid name (letters only)';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!EMAIL_REGEX.test(value.trim())) return 'Enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!PHONE_REGEX.test(value.trim())) return 'Enter a valid 10-digit mobile number';
        return '';
      case 'city':
        if (!value) return 'Please select a city';
        return '';
      default:
        return '';
    }
  }

  function handleContactFieldChange(field, value) {
    const cleanedValue = field === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    updateData(field, cleanedValue);
    setErrors((prev) => ({ ...prev, [field]: validateField(field, cleanedValue) }));
  }

  function isStep4Valid() {
    const nameError = validateField('name', estimateData.name);
    const emailError = validateField('email', estimateData.email);
    const phoneError = validateField('phone', estimateData.phone);
    const cityError = validateField('city', estimateData.city);
    return !nameError && !emailError && !phoneError && !cityError;
  }

  function nextStep() {
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function previousStep() {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nameError = validateField('name', estimateData.name);
    const emailError = validateField('email', estimateData.email);
    const phoneError = validateField('phone', estimateData.phone);
    const cityError = validateField('city', estimateData.city);

    setErrors({ name: nameError, email: emailError, phone: phoneError, city: cityError });

    if (nameError || emailError || phoneError || cityError) {
      return; // block submission until every field is valid
    }

    setStatus('sending');

    const wallSummaryParts = [
      `Wall A: ${estimateData.wallAFeet} Feet ${estimateData.wallAInch} Inch`,
      `Wall B: ${estimateData.wallBFeet} Feet ${estimateData.wallBInch} Inch`,
    ];
    if (estimateData.kitchenShape === 'U-Shape') {
      wallSummaryParts.push(
        `Wall C: ${estimateData.wallCFeet} Feet ${estimateData.wallCInch} Inch`
      );
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2,
          subject: 'New Kitchen Estimate Request — 9Square',
          form_type: 'Kitchen Estimate',
          bhk: estimateData.bhk,
          kitchen_shape: estimateData.kitchenShape,
          wall_measurements: wallSummaryParts.join(' | '),
          cabinet_material: estimateData.cabinetMaterial,
          name: estimateData.name.trim(),
          email: estimateData.email.trim(),
          phone: estimateData.phone.trim(),
          city: estimateData.city,
        }),
      });

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
          Get your free estimate in <span>under 30 seconds!</span>
        </h1>
        <p>Share your preferences for an accurate estimate</p>
        <div className="kitchen-estimate__progress">STEP {step} OF 4</div>
      </div>

      <div className="kitchen-estimate__container">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="estimate-step">
            <h2>
              <strong>Step 1:</strong> Home Configuration
            </h2>

            <div className="bhk-options">
              {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((bhk) => (
                <label
                  key={bhk}
                  className={`radio-option ${estimateData.bhk === bhk ? 'radio-option--active' : ''}`}
                >
                  <input
                    type="radio"
                    name="bhk"
                    value={bhk}
                    checked={estimateData.bhk === bhk}
                    onChange={(e) => updateData('bhk', e.target.value)}
                  />
                  <span className="custom-radio" />
                  {bhk}
                </label>
              ))}
            </div>

            <div className="step-buttons">
              <button className="next-button" disabled={!estimateData.bhk} onClick={nextStep}>
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
              {['L-Shape', 'U-Shape', 'Parallel'].map((shape) => (
                <div
                  key={shape}
                  className={`shape-card ${
                    estimateData.kitchenShape === shape ? 'shape-card--active' : ''
                  }`}
                  onClick={() => updateData('kitchenShape', shape)}
                >
                  <div className="shape-image-placeholder">{shape}</div>
                  <label className="shape-label">
                    <input
                      type="radio"
                      name="kitchenShape"
                      value={shape}
                      checked={estimateData.kitchenShape === shape}
                      onChange={() => updateData('kitchenShape', shape)}
                    />
                    <span className="custom-radio" />
                    {shape}
                  </label>
                </div>
              ))}
            </div>

            {/* WALL SIZE — Wall A & B always required; Wall C added only for U-Shape */}
            {estimateData.kitchenShape && (
              <div className="wall-size-section">
                <h3>Wall Size</h3>

                <div className="wall-size-grid">
                  <div className="wall-size-row">
                    <span className="wall-label">Wall A</span>
                    <select
                      value={estimateData.wallAFeet}
                      onChange={(e) => updateData('wallAFeet', e.target.value)}
                    >
                      {feetOptions.map((feet) => (
                        <option key={feet} value={feet}>
                          {feet}
                        </option>
                      ))}
                    </select>
                    <span>Feet</span>
                    <select
                      value={estimateData.wallAInch}
                      onChange={(e) => updateData('wallAInch', e.target.value)}
                    >
                      {inchOptions.map((inch) => (
                        <option key={inch} value={inch}>
                          {inch}
                        </option>
                      ))}
                    </select>
                    <span>Inch</span>
                  </div>

                  <div className="wall-size-row">
                    <span className="wall-label">Wall B</span>
                    <select
                      value={estimateData.wallBFeet}
                      onChange={(e) => updateData('wallBFeet', e.target.value)}
                    >
                      {feetOptions.map((feet) => (
                        <option key={feet} value={feet}>
                          {feet}
                        </option>
                      ))}
                    </select>
                    <span>Feet</span>
                    <select
                      value={estimateData.wallBInch}
                      onChange={(e) => updateData('wallBInch', e.target.value)}
                    >
                      {inchOptions.map((inch) => (
                        <option key={inch} value={inch}>
                          {inch}
                        </option>
                      ))}
                    </select>
                    <span>Inch</span>
                  </div>

                  {estimateData.kitchenShape === 'U-Shape' && (
                    <div className="wall-size-row">
                      <span className="wall-label">Wall C</span>
                      <select
                        value={estimateData.wallCFeet}
                        onChange={(e) => updateData('wallCFeet', e.target.value)}
                      >
                        {feetOptions.map((feet) => (
                          <option key={feet} value={feet}>
                            {feet}
                          </option>
                        ))}
                      </select>
                      <span>Feet</span>
                      <select
                        value={estimateData.wallCInch}
                        onChange={(e) => updateData('wallCInch', e.target.value)}
                      >
                        {inchOptions.map((inch) => (
                          <option key={inch} value={inch}>
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
              <button className="back-button" onClick={previousStep}>
                BACK
              </button>
              <button
                className="next-button"
                disabled={!estimateData.kitchenShape}
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
              {['Particle Board', 'BWP-Ply', 'BWR-Ply', 'HDHMR'].map((material) => (
                <label
                  key={material}
                  className={`material-option ${
                    estimateData.cabinetMaterial === material ? 'material-option--active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="cabinetMaterial"
                    value={material}
                    checked={estimateData.cabinetMaterial === material}
                    onChange={(e) => updateData('cabinetMaterial', e.target.value)}
                  />
                  <span>{material}</span>
                </label>
              ))}
            </div>

            <div className="step-buttons">
              <button className="back-button" onClick={previousStep}>
                BACK
              </button>
              <button
                className="next-button"
                disabled={!estimateData.cabinetMaterial}
                onClick={nextStep}
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
  <div className="quote-step">
    {/* LEFT PANEL */}
    <div className="quote-step__left">
      <div className="quote-step__badge">✦</div>
      <p className="quote-step__eyebrow">FREE QUOTE</p>
      <h2 className="quote-step__heading">Your dream kitchen is almost ready</h2>
      <p className="quote-step__description">
        Share your contact details and our team will help you with the next steps.
      </p>

      <div className="quote-step__summary">
        <div className="quote-summary-row">
          <span className="quote-summary-row__label">Home</span>
          <strong className="quote-summary-row__value">{estimateData.bhk}</strong>
        </div>
        <div className="quote-summary-row">
          <span className="quote-summary-row__label">Kitchen Shape</span>
          <strong className="quote-summary-row__value">{estimateData.kitchenShape}</strong>
        </div>
        <div className="quote-summary-row">
          <span className="quote-summary-row__label">Cabinet Material</span>
          <strong className="quote-summary-row__value">{estimateData.cabinetMaterial}</strong>
        </div>
      </div>
    </div>

    {/* RIGHT PANEL — FORM */}
    <div className="quote-step__right">
      <h3 className="quote-step__right-heading">Get your free quote</h3>
      <p className="quote-step__right-subtext">Fill in your details and we'll contact you.</p>

      <form className="quote-form" onSubmit={handleSubmit} noValidate>
        <div className="quote-field-wrap">
          <label className="quote-label">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={estimateData.name}
            onChange={(e) => handleContactFieldChange('name', e.target.value)}
            className={errors.name ? 'quote-input input-error' : 'quote-input'}
          />
          {errors.name && <span className="field-error-message">{errors.name}</span>}
        </div>

        <div className="quote-field-wrap">
          <label className="quote-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={estimateData.email}
            onChange={(e) => handleContactFieldChange('email', e.target.value)}
            className={errors.email ? 'quote-input input-error' : 'quote-input'}
          />
          {errors.email && <span className="field-error-message">{errors.email}</span>}
        </div>

        <div className="quote-field-wrap">
          <label className="quote-label">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={estimateData.phone}
            onChange={(e) => handleContactFieldChange('phone', e.target.value)}
            inputMode="numeric"
            className={errors.phone ? 'quote-input input-error' : 'quote-input'}
          />
          {errors.phone && <span className="field-error-message">{errors.phone}</span>}
        </div>

        <div className="quote-field-wrap">
          <label className="quote-label">City</label>
          <select
            value={estimateData.city}
            onChange={(e) => handleContactFieldChange('city', e.target.value)}
            className={errors.city ? 'quote-input input-error' : 'quote-input'}
          >
            <option value="" disabled>
              Select your city
            </option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varanasi">Varanasi</option>
          </select>
          {errors.city && <span className="field-error-message">{errors.city}</span>}
        </div>

        <div className="quote-buttons">
          <button type="button" className="quote-back-button" onClick={previousStep}>
            ← BACK
          </button>
          <button
            type="submit"
            className="quote-submit-button"
            disabled={status === 'sending' || !isStep4Valid()}
          >
            {status === 'sending' ? 'SENDING...' : 'GET FREE QUOTE →'}
          </button>
        </div>

        {status === 'success' && (
          <p className="form-success">
            Thank you! Your request has been submitted successfully. You will be redirected to
            the home page in 10 seconds.
          </p>
        )}
        {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
      </form>
    </div>
  </div>
)}
      </div>
    </section>
  );
}