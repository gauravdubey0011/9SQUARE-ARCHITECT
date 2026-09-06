import { useState } from 'react';
import './ArchitectureVisitModal.css';

export default function ArchitectureVisitModal({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const [status, setStatus] = useState('idle');

  if (!isOpen) return null;


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

            /*
             * Replace this with the NEW
             * Architecture Web3Forms access key.
             */
            access_key: 'eb2a3b8f-caf0-4031-a24a-214f3f8a4bc8',

            subject:
              'New Architecture Experience Centre Visit — 9Square',

            from_name: '9Square Architecture',

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

        console.error('Web3Forms error:', result);

        setStatus('error');
      }

    } catch (error) {

      console.error('Form submission error:', error);

      setStatus('error');
    }
  }


  return (
    <div
      className="architecture-visit-modal__overlay"
      onClick={onClose}
    >

      <div
        className="architecture-visit-modal__card"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="architecture-visit-modal__header">

          <div>
            <p className="architecture-visit-modal__eyebrow">
              9SQUARE ARCHITECTURE
            </p>

            <h2 className="architecture-visit-modal__heading">
              Schedule a Visit
            </h2>
          </div>

          <button
            type="button"
            className="architecture-visit-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <p className="architecture-visit-modal__description">
          Share your details and our team will contact you
          shortly to schedule your visit to our Lucknow
          experience centre.
        </p>


        <form
          className="architecture-visit-modal__form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="architecture-visit-modal__input"
          />


          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="architecture-visit-modal__input"
          />


          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="architecture-visit-modal__input"
          />


          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="architecture-visit-modal__select"
          >

            <option value="" disabled>
              Select location
            </option>

            <option value="Lucknow">
              Lucknow
            </option>

          </select>


          <button
            type="submit"
            className="architecture-visit-modal__submit"
            disabled={status === 'sending'}
          >

            {status === 'sending'
              ? 'Sending...'
              : 'Schedule Visit'}

            {status !== 'sending' && (
              <span>→</span>
            )}

          </button>


          {status === 'success' && (
            <p className="architecture-visit-modal__status architecture-visit-modal__status--success">
              Thanks! We've received your details — we'll contact you soon.
            </p>
          )}


          {status === 'error' && (
            <p className="architecture-visit-modal__status architecture-visit-modal__status--error">
              Something went wrong. Please try again.
            </p>
          )}

        </form>


        <button
          type="button"
          className="architecture-visit-modal__close-text"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
}