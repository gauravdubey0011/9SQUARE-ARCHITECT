import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './ArchitectureContactModal.css';

export default function ArchitectureContactModal() {
  const { activeModal, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const [status, setStatus] = useState('idle');

  if (activeModal !== 'architecture-contact') {
    return null;
  }

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
              import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_3,

            subject:
              'New Architecture Project Enquiry — 9Square',

            form_type: 'Architecture Design Enquiry',

            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            location: formData.location,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <div
      className="architecture-modal-overlay"
      onClick={closeModal}
    >
      <div
        className="architecture-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="architecture-modal__header">
          <div>
            <p className="architecture-modal__eyebrow">
              9SQUARE ARCHITECTURE
            </p>

            <h2 className="architecture-modal__heading">
              Start a conversation
            </h2>
          </div>

          <button
            type="button"
            className="architecture-modal__close"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <p className="architecture-modal__description">
          Tell us a little about your project and our team
          will get in touch with you soon.
        </p>

        <form
          className="architecture-modal__form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="architecture-modal__input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength="10"
            required
            className="architecture-modal__input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="architecture-modal__input"
          />

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="architecture-modal__select"
          >
            <option value="" disabled>
              Select your location
            </option>

            <option value="Lucknow">
              Lucknow
            </option>

            <option value="Varanasi">
              Varanasi
            </option>
          </select>

          <button
            type="submit"
            className="architecture-modal__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? 'Sending...'
              : 'Connect With Us →'}
          </button>

          {status === 'success' && (
            <div className="architecture-modal__success">
              <strong>Thank you!</strong>
              <span>
                We've received your details.
                Our team will contact you soon.
              </span>
            </div>
          )}

          {status === 'error' && (
            <div className="architecture-modal__error">
              Something went wrong. Please try again.
            </div>
          )}

        </form>

        <button
          type="button"
          className="architecture-modal__close-text"
          onClick={closeModal}
        >
          Close
        </button>

      </div>
    </div>
  );
}