import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './MeetDesignerModal.css';

export default function MeetDesignerModal() {
  const { activeModal, closeModal } = useModal();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  if (activeModal !== 'designer') return null;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,
          subject: 'New Designer Consultation Request — 9Square',
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          whatsapp_updates: whatsappUpdates ? 'Yes' : 'No',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', city: '' });
        setWhatsappUpdates(true);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-card__header">
          <h2 className="modal-card__heading">Meet a designer</h2>
          <button className="modal-card__close-icon" onClick={closeModal} aria-label="Close">
            ×
          </button>
        </div>

        <form className="modal-card__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="modal-card__input"
          />

          <div className="modal-card__phone-row">
            <select className="modal-card__country-select" defaultValue="IN">
              <option value="IN">🇮🇳</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="modal-card__phone-input"
            />
          </div>

          {/* <div className="modal-card__toggle-row">
            <span className="modal-card__toggle-label"></span>
            <label className="modal-card__switch">
              <input
                type="checkbox"
                checked={whatsappUpdates}
                onChange={(e) => setWhatsappUpdates(e.target.checked)}
              />
              <span className="modal-card__slider"></span>
            </label>
          </div> */}

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="modal-card__select"
          >
            <option value="" disabled>
              Select your property city
            </option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varanasi">Varanasi</option>
          </select>

          <button type="submit" className="modal-card__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Book Design Session'}{' '}
            {status !== 'sending' && <span className="modal-card__arrow">→</span>}
          </button>

          {status === 'success' && (
            <p className="modal-card__status modal-card__status--success">
              Thanks! We've received your details — our team will reach out soon.
            </p>
          )}
          {status === 'error' && (
            <p className="modal-card__status modal-card__status--error">
              Something went wrong. Please try again.
            </p>
          )}

          {/* <p className="modal-card__fineprint">
            By submitting, you agree to our <a href="#">privacy policy</a> and{' '}
            <a href="#">terms of use</a>, allowing us to use your information as outlined.
          </p> */}
        </form>

        <button className="modal-card__close-text" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}