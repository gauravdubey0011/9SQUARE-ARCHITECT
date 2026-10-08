import { useState } from 'react';
import './TalkToDesigner.css';
import cities from '../../data/cities';

// Replace with your actual image
import designerImage from '../../assets/slide2.jpg';

export default function TalkToDesigner() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });
      const result = await response.json();

      if (!result.success) throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="talkdesigner">
      <div className="talkdesigner__image-wrap">
        <img src={designerImage} alt="Interior design" className="talkdesigner__image" />
      </div>

      <div className="talkdesigner__panel">
        <h2 className="talkdesigner__heading">Talk to a designer</h2>

        <form className="talkdesigner__form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1 || ''} />
          <input type="hidden" name="subject" value="New Designer Consultation Request — 9Square" />
          <input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" className="talkdesigner__input" required />
          <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" className="talkdesigner__input" required />
          <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" autoComplete="tel" className="talkdesigner__input" required />

          <select name="city" aria-label="City" className="talkdesigner__select" defaultValue="" required>
            <option value="" disabled>
              City
            </option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>

          <button type="submit" className="talkdesigner__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Book a free consultation'}
          </button>
          {status === 'success' && <p role="status">Thanks! Your request has been sent.</p>}
          {status === 'error' && <p role="alert">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
