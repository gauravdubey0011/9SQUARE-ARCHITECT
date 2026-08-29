import { useState } from 'react';
import './DesignerHero.css';

import heroImage from '../../assets/slide2.jpg';

export default function DesignerHero() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1);
    formData.append('subject', 'New Request for Services — 9Square');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section className="designer-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="designer-hero__dim" />

      <div className="designer-hero__content">
        <h1 className="designer-hero__heading">
          Expert Designers,
          <br />
          Ready to Design Your First Home.
        </h1>
      </div>

      <div className="designer-hero__card">
        <p className="designer-hero__card-note">All the fields marked with * are required</p>

        <form className="designer-hero__form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />

          <select name="city" defaultValue="" required>
            <option value="" disabled>
              City
            </option>
            <option value="Lucknow">Lucknow</option>
            <option value="Varanasi">Varanasi</option>
          </select>

          <button type="submit" className="designer-hero__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="designer-hero__status designer-hero__status--success">
              Thanks! We've received your request — we'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="designer-hero__status designer-hero__status--error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}