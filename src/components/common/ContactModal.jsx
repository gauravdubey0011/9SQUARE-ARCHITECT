import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './MeetDesignerModal.css'; // shared modal chrome styles
import './ContactModal.css'; // contact-specific field styles

export default function ContactModal() {
  const { activeModal, closeModal } = useModal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });
  const [status, setStatus] = useState('idle');

  if (activeModal !== 'contact') return null;

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
          subject: 'New Contact Form Submission — 9Square',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', city: '' });
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
          <h2 className="modal-card__heading">Get in Touch</h2>
          <button className="modal-card__close-icon" onClick={closeModal} aria-label="Close">
            ×
          </button>
        </div>

        <p className="contact-modal__subheading">
          Have a question or want to discuss your project? Send us a message.
        </p>

        <form className="modal-card__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="modal-card__input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="modal-card__input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="modal-card__input"
          />
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="modal-card__select"
          >
            <option value="" disabled>
              City
            </option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varanasi">Varanasi</option>
          </select>

          <button type="submit" className="modal-card__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact-modal__status contact-modal__status--success">
              Thanks! Your message has been sent — we'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-modal__status contact-modal__status--error">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>

        <button className="modal-card__close-text" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}