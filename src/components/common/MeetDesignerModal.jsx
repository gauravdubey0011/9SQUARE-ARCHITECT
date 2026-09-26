// import { useState } from 'react';
// import { useModal } from '../../context/ModalContext';
// import './MeetDesignerModal.css';

// export default function MeetDesignerModal() {
//   const { activeModal, closeModal } = useModal();
//   const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
//   const [whatsappUpdates, setWhatsappUpdates] = useState(true);
//   const [status, setStatus] = useState('idle'); // idle | sending | success | error

//   if (activeModal !== 'designer') return null;

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,
//           subject: 'New Designer Consultation Request — 9Square',
//           name: formData.name,
//           phone: formData.phone,
//           city: formData.city,
//           whatsapp_updates: whatsappUpdates ? 'Yes' : 'No',
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus('success');
//         setFormData({ name: '', phone: '', city: '' });
//         setWhatsappUpdates(true);
//       } else {
//         setStatus('error');
//       }
//     } catch (err) {
//       setStatus('error');
//     }
//   }

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal-card" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-card__header">
//           <h2 className="modal-card__heading">Meet a designer</h2>
//           <button className="modal-card__close-icon" onClick={closeModal} aria-label="Close">
//             ×
//           </button>
//         </div>

//         <form className="modal-card__form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="modal-card__input"
//           />

//           <div className="modal-card__phone-row">
//             <select className="modal-card__country-select" defaultValue="IN">
//               <option value="IN">🇮🇳</option>
//             </select>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your mobile number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="modal-card__phone-input"
//             />
//           </div>

//           {/* <div className="modal-card__toggle-row">
//             <span className="modal-card__toggle-label"></span>
//             <label className="modal-card__switch">
//               <input
//                 type="checkbox"
//                 checked={whatsappUpdates}
//                 onChange={(e) => setWhatsappUpdates(e.target.checked)}
//               />
//               <span className="modal-card__slider"></span>
//             </label>
//           </div> */}

//           <select
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="modal-card__select"
//           >
//             <option value="" disabled>
//               Select your property city
//             </option>
//             <option value="Lucknow">Lucknow</option>
//             <option value="Varanasi">Varanasi</option>
//           </select>

//           <button type="submit" className="modal-card__submit" disabled={status === 'sending'}>
//             {status === 'sending' ? 'Sending...' : 'Book Design Session'}{' '}
//             {status !== 'sending' && <span className="modal-card__arrow">→</span>}
//           </button>

//           {status === 'success' && (
//             <p className="modal-card__status modal-card__status--success">
//               Thanks! We've received your details — our team will reach out soon.
//             </p>
//           )}
//           {status === 'error' && (
//             <p className="modal-card__status modal-card__status--error">
//               Something went wrong. Please try again.
//             </p>
//           )}

//           {/* <p className="modal-card__fineprint">
//             By submitting, you agree to our <a href="#">privacy policy</a> and{' '}
//             <a href="#">terms of use</a>, allowing us to use your information as outlined.
//           </p> */}
//         </form>

//         <button className="modal-card__close-text" onClick={closeModal}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }



// import { useState } from 'react';
// import { useModal } from '../../context/ModalContext';
// import './MeetDesignerModal.css';

// export default function MeetDesignerModal() {
//   const { activeModal, closeModal } = useModal();

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     city: '',
//   });

//   const [status, setStatus] = useState('idle'); // idle | sending | success | error

//   if (activeModal !== 'designer') return null;

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,

//           subject: 'New Designer Consultation Request — 9Square',

//           name: formData.name,
//           phone: formData.phone,
//           email: formData.email,
//           city: formData.city,
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus('success');

//         setFormData({
//           name: '',
//           phone: '',
//           email: '',
//           city: '',
//         });
//       } else {
//         setStatus('error');
//       }
//     } catch (err) {
//       console.error('Web3Forms submission error:', err);
//       setStatus('error');
//     }
//   }

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div
//         className="modal-card"
//         onClick={(e) => e.stopPropagation()}
//       >

//         {/* Header */}
//         <div className="modal-card__header">
//           <h2 className="modal-card__heading">
//             Meet a designer
//           </h2>

//           <button
//             className="modal-card__close-icon"
//             onClick={closeModal}
//             aria-label="Close"
//             type="button"
//           >
//             ×
//           </button>
//         </div>

//         <form
//           className="modal-card__form"
//           onSubmit={handleSubmit}
//         >

//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="modal-card__input"
//           />

//           {/* Phone */}
//           <div className="modal-card__phone-row">

//             <select
//               className="modal-card__country-select"
//               defaultValue="IN"
//               aria-label="Country"
//             >
//               <option value="IN">🇮🇳</option>
//             </select>

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your mobile number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="modal-card__phone-input"
//             />

//           </div>

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="modal-card__input"
//           />

//           {/* City */}
//           <select
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="modal-card__select"
//           >
//             <option value="" disabled>
//               Select your property city
//             </option>

//             <option value="Lucknow">
//               Lucknow
//             </option>

//             <option value="Varanasi">
//               Varanasi
//             </option>
//           </select>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="modal-card__submit"
//             disabled={status === 'sending'}
//           >
//             {status === 'sending'
//               ? 'Sending...'
//               : 'Book Design Session'}

//             {status !== 'sending' && (
//               <span className="modal-card__arrow">
//                 →
//               </span>
//             )}
//           </button>

//           {/* Success */}
//           {status === 'success' && (
//             <p className="modal-card__status modal-card__status--success">
//               Thanks! We've received your details — our team will reach out soon.
//             </p>
//           )}

//           {/* Error */}
//           {status === 'error' && (
//             <p className="modal-card__status modal-card__status--error">
//               Something went wrong. Please try again.
//             </p>
//           )}

//         </form>

//         {/* Close */}
//         <button
//           className="modal-card__close-text"
//           onClick={closeModal}
//           type="button"
//         >
//           Close
//         </button>

//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './MeetDesignerModal.css';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  city: '',
};

const initialErrors = {
  name: '',
  phone: '',
  email: '',
  city: '',
};

export default function MeetDesignerModal() {
  const { activeModal, closeModal } = useModal();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle');

  if (activeModal !== 'designer') return null;

  function validateField(name, value) {
    const trimmedValue = value.trim();

    switch (name) {
      case 'name':
        if (!trimmedValue) {
          return 'Please enter your name.';
        }

        if (trimmedValue.length < 2) {
          return 'Name must be at least 2 characters.';
        }

        if (trimmedValue.length > 50) {
          return 'Name must not exceed 50 characters.';
        }

        if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
          return 'Name can contain only letters and spaces.';
        }

        return '';

      case 'phone':
        if (!trimmedValue) {
          return 'Please enter your mobile number.';
        }

        if (!/^\d{10}$/.test(trimmedValue)) {
          return 'Enter a valid 10-digit mobile number.';
        }

        // Prevent obviously invalid Indian mobile numbers.
        if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
          return 'Enter a valid Indian mobile number.';
        }

        return '';

      case 'email':
        if (!trimmedValue) {
          return 'Please enter your email address.';
        }

        if (trimmedValue.length > 100) {
          return 'Email must not exceed 100 characters.';
        }

        // Practical email validation.
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue)) {
          return 'Please enter a valid email address.';
        }

        return '';

      case 'city':
        if (!value) {
          return 'Please select your property city.';
        }

        if (!['Lucknow', 'Varanasi'].includes(value)) {
          return 'Please select a valid city.';
        }

        return '';

      default:
        return '';
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    let newValue = value;

    // Phone: allow digits only.
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    // Name: prevent excessive length.
    if (name === 'name') {
      newValue = value.slice(0, 50);
    }

    // Email: prevent excessive length.
    if (name === 'email') {
      newValue = value.slice(0, 100);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Validate while the user is editing only if
    // that field already has an error.
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue),
      }));
    }

    // Clear success/error status when user starts editing again.
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle');
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  }

  function validateForm() {
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      city: validateField('city', formData.city),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== '');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Do not submit if validation fails.
    if (!validateForm()) {
      setStatus('idle');
      return;
    }

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
            access_key:
              import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,

            subject:
              'New Designer Consultation Request — 9Square',

            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            city: formData.city,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        setFormData(initialFormData);
        setErrors(initialErrors);
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
      className="modal-overlay"
      onClick={closeModal}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="modal-card__header">
          <h2 className="modal-card__heading">
            Meet a designer
          </h2>

          <button
            type="button"
            className="modal-card__close-icon"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form
          className="modal-card__form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* NAME */}
          <div className="modal-card__field">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
              maxLength={50}
              required
              className={`modal-card__input ${
                errors.name ? 'modal-card__input--error' : ''
              }`}
            />

            {errors.name && (
              <p className="modal-card__field-error">
                {errors.name}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div className="modal-card__field">
            <div
              className={`modal-card__phone-row ${
                errors.phone
                  ? 'modal-card__phone-row--error'
                  : ''
              }`}
            >
              <select
                className="modal-card__country-select"
                defaultValue="IN"
                aria-label="Country"
              >
                <option value="IN">🇮🇳</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                required
                className="modal-card__phone-input"
              />
            </div>

            {errors.phone && (
              <p className="modal-card__field-error">
                {errors.phone}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="modal-card__field">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              maxLength={100}
              required
              className={`modal-card__input ${
                errors.email ? 'modal-card__input--error' : ''
              }`}
            />

            {errors.email && (
              <p className="modal-card__field-error">
                {errors.email}
              </p>
            )}
          </div>

          {/* CITY */}
          <div className="modal-card__field">
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`modal-card__select ${
                errors.city ? 'modal-card__input--error' : ''
              }`}
            >
              <option value="" disabled>
                Select your property city
              </option>

              <option value="Lucknow">
                Lucknow
              </option>

              <option value="Varanasi">
                Varanasi
              </option>
              <option value="varanasi">Noida</option>
              <option value="varanasi">Gurugram</option>
              <option value="varanasi">Delhi</option>
              <option value="varanasi">Agra</option>
              <option value="varanasi">Kanpur</option>
              <option value="varanasi">Pune</option>
              <option value="varanasi">Mumbai</option>
              <option value="varanasi">Mysuru</option>
              <option value="varanasi">Bengaluru</option>
            </select>

            {errors.city && (
              <p className="modal-card__field-error">
                {errors.city}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="modal-card__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? 'Sending...'
              : 'Book Design Session'}

            {status !== 'sending' && (
              <span className="modal-card__arrow">
                →
              </span>
            )}
          </button>

          {/* SUCCESS */}
          {status === 'success' && (
            <p className="modal-card__status modal-card__status--success">
              Thanks! We've received your details — our team will reach out soon.
            </p>
          )}

          {/* ERROR */}
          {status === 'error' && (
            <p className="modal-card__status modal-card__status--error">
              Something went wrong. Please try again.
            </p>
          )}

        </form>

        <button
          type="button"
          className="modal-card__close-text"
          onClick={closeModal}
        >
          Close
        </button>

      </div>
    </div>
  );
}