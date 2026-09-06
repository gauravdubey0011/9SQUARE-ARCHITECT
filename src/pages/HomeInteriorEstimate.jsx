// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './HomeInteriorEstimate.css';

// // export default function HomeInteriorEstimate() {
// //     const navigate = useNavigate();
// //   const [step, setStep] = useState(1);

// //   const [estimateData, setEstimateData] = useState({
// //     floorplan: '',
// //     purpose: '',
// //   });

// //   const [contactData, setContactData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     city: '',
// //   });

// //   const [status, setStatus] = useState('idle');

// //   function handleEstimateChange(field, value) {
// //     setEstimateData((prev) => ({
// //       ...prev,
// //       [field]: value,
// //     }));
// //   }

// //   function handleContactChange(e) {
// //     setContactData((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value,
// //     }));
// //   }

// //   function handleNext() {
// //     if (!estimateData.floorplan || !estimateData.purpose) {
// //       return;
// //     }

// //     setStep(2);
// //   }

// //   function handleBack() {
// //     setStep(1);
// //   }

// //   async function handleSubmit(e) {
// //     e.preventDefault();

// //     setStatus('sending');

// //     try {
// //       const response = await fetch(
// //         'https://api.web3forms.com/submit',
// //         {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //             Accept: 'application/json',
// //           },
// //           body: JSON.stringify({
// //             access_key:
// //               import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,

// //             subject:
// //               'New Full Home Interior Estimate Enquiry',

// //             from_name: contactData.name,

// //             replyto: contactData.email,

// //             // Step 1 information
// //             enquiry_type: 'Full Home Interior',
// //             floorplan: estimateData.floorplan,
// //             purpose: estimateData.purpose,

// //             // Step 2 information
// //             name: contactData.name,
// //             email: contactData.email,
// //             phone: contactData.phone,
// //             city: contactData.city,
// //           }),
// //         }
// //       );

// //       const result = await response.json();

// //             if (result.success) {
// //         setStatus('success');

// //         setEstimateData({
// //             floorplan: '',
// //             purpose: '',
// //         });

// //         setContactData({
// //             name: '',
// //             email: '',
// //             phone: '',
// //             city: '',
// //         });

// //         setTimeout(() => {
// //             navigate('/');
// //         }, 10000);
// //       } else {
// //         setStatus('error');
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       setStatus('error');
// //     }
// //   }

// //   return (
// //     <main className="home-interior-estimate">
// //       <div className="estimate-page-header">
// //         <h1>
// //           Get your free estimate in{' '}
// //           <span>under 30 seconds!</span>
// //         </h1>

// //         <p>
// //           Share your preferences for an accurate estimate
// //         </p>

// //         <div className="estimate-step-indicator">
// //           STEP <strong>{step}</strong> OF 2
// //         </div>
// //       </div>

// //       <div className="estimate-form-container">
// //         {step === 1 && (
// //           <>
// //             <div className="estimate-form-left">
// //               <h2>Your floorplan</h2>

// //               <div className="option-group floorplan-options">
// //                 {['1 BHK', '2 BHK', '3 BHK', '3+ BHK'].map(
// //                   (option) => (
// //                     <button
// //                       key={option}
// //                       type="button"
// //                       className={
// //                         estimateData.floorplan === option
// //                           ? 'estimate-option active'
// //                           : 'estimate-option'
// //                       }
// //                       onClick={() =>
// //                         handleEstimateChange(
// //                           'floorplan',
// //                           option
// //                         )
// //                       }
// //                     >
// //                       {option}
// //                     </button>
// //                   )
// //                 )}
// //               </div>

// //               <h2 className="purpose-heading">
// //                 Purpose
// //               </h2>

// //               <div className="option-group purpose-options">
// //                 {['Move In', 'Rent Out', 'Renovate'].map(
// //                   (option) => (
// //                     <button
// //                       key={option}
// //                       type="button"
// //                       className={
// //                         estimateData.purpose === option
// //                           ? 'estimate-option active'
// //                           : 'estimate-option'
// //                       }
// //                       onClick={() =>
// //                         handleEstimateChange(
// //                           'purpose',
// //                           option
// //                         )
// //                       }
// //                     >
// //                       {option}
// //                     </button>
// //                   )
// //                 )}
// //               </div>
// //             </div>

// //             <div className="estimate-form-right">
// //               <div className="floorplan-illustration">
// //                 <div className="room room-1"></div>
// //                 <div className="room room-2"></div>
// //                 <div className="room room-3"></div>
// //                 <div className="room room-4"></div>
// //                 <div className="room room-5"></div>
// //               </div>

// //               <div className="illustration-text">
// //                 Interiors made easy
// //               </div>
// //             </div>
// //           </>
// //         )}

// //         {step === 2 && (
// //           <div className="contact-step">
// //             <div className="contact-step-header">
// //               <h2>Almost there!</h2>
// //               <p>
// //                 Enter your contact details to receive your
// //                 estimate.
// //               </p>
// //             </div>

// //             <div className="selected-details">
// //               <div>
// //                 <span>Floorplan</span>
// //                 <strong>{estimateData.floorplan}</strong>
// //               </div>

// //               <div>
// //                 <span>Purpose</span>
// //                 <strong>{estimateData.purpose}</strong>
// //               </div>
// //             </div>

// //             <form
// //               className="estimate-contact-form"
// //               onSubmit={handleSubmit}
// //             >
// //               <div className="form-row">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   placeholder="Name"
// //                   value={contactData.name}
// //                   onChange={handleContactChange}
// //                   required
// //                 />

// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email"
// //                   value={contactData.email}
// //                   onChange={handleContactChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="form-row">
// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   placeholder="Phone Number"
// //                   value={contactData.phone}
// //                   onChange={handleContactChange}
// //                   pattern="[0-9]{10}"
// //                   maxLength="10"
// //                   required
// //                 />

// //                 <select
// //                   name="city"
// //                   value={contactData.city}
// //                   onChange={handleContactChange}
// //                   required
// //                 >
// //                   <option value="" disabled>
// //                     City
// //                   </option>
// //                   <option value="Lucknow">Lucknow</option>
// //                   <option value="Varanasi">Varanasi</option>
// //                 </select>
// //               </div>

// //               <div className="estimate-navigation">
// //                 <button
// //                   type="button"
// //                   className="back-button"
// //                   onClick={handleBack}
// //                 >
// //                   ← BACK
// //                 </button>

// //                 <button
// //                   type="submit"
// //                   className="next-button"
// //                   disabled={status === 'sending'}
// //                 >
// //                   {status === 'sending'
// //                     ? 'SENDING...'
// //                     : 'GET ESTIMATE →'}
// //                 </button>
// //               </div>

// //               {status === 'success' && (
// //                 <div className="estimate-success">
// //                   Thank you! Your details have been
// //                   submitted successfully. We will contact
// //                   you soon.
// //                 </div>
// //               )}

// //               {status === 'error' && (
// //                 <div className="estimate-error">
// //                   Something went wrong. Please try again.
// //                 </div>
// //               )}
// //             </form>
// //           </div>
// //         )}
// //       </div>

// //       {step === 1 && (
// //         <button
// //           type="button"
// //           className="estimate-next-button"
// //           onClick={handleNext}
// //           disabled={
// //             !estimateData.floorplan ||
// //             !estimateData.purpose
// //           }
// //         >
// //           NEXT
// //         </button>
// //       )}
// //     </main>
// //   );
// // }





// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomeInteriorEstimate.css';

// const NAME_REGEX = /^[a-zA-Z\s]{2,50}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const PHONE_REGEX = /^[6-9]\d{9}$/; // 10 digits, valid Indian mobile prefix

// export default function HomeInteriorEstimate() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);

//   const [estimateData, setEstimateData] = useState({
//     floorplan: '',
//     purpose: '',
//   });

//   const [contactData, setContactData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: '',
//   });

//   const [status, setStatus] = useState('idle');

//   function handleEstimateChange(field, value) {
//     setEstimateData((prev) => ({ ...prev, [field]: value }));
//   }

//   function validateField(name, value) {
//     switch (name) {
//       case 'name':
//         if (!value.trim()) return 'Name is required';
//         if (!NAME_REGEX.test(value.trim())) return 'Enter a valid name (letters only)';
//         return '';
//       case 'email':
//         if (!value.trim()) return 'Email is required';
//         if (!EMAIL_REGEX.test(value.trim())) return 'Enter a valid email address';
//         return '';
//       case 'phone':
//         if (!value.trim()) return 'Phone number is required';
//         if (!PHONE_REGEX.test(value.trim())) return 'Enter a valid 10-digit mobile number';
//         return '';
//       case 'city':
//         if (!value) return 'Please select a city';
//         return '';
//       default:
//         return '';
//     }
//   }

//   function handleContactChange(e) {
//     const { name, value } = e.target;

//     // Restrict phone field to digits only, max 10 characters, as the user types
//     const cleanedValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;

//     setContactData((prev) => ({ ...prev, [name]: cleanedValue }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, cleanedValue) }));
//   }

//   function isStep2Valid() {
//     const nameError = validateField('name', contactData.name);
//     const emailError = validateField('email', contactData.email);
//     const phoneError = validateField('phone', contactData.phone);
//     const cityError = validateField('city', contactData.city);

//     return !nameError && !emailError && !phoneError && !cityError;
//   }

//   function handleNext() {
//     if (!estimateData.floorplan || !estimateData.purpose) {
//       return;
//     }
//     setStep(2);
//   }

//   function handleBack() {
//     setStep(1);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     // Run full validation on submit, in case a field was never touched (no onChange fired)
//     const nameError = validateField('name', contactData.name);
//     const emailError = validateField('email', contactData.email);
//     const phoneError = validateField('phone', contactData.phone);
//     const cityError = validateField('city', contactData.city);

//     setErrors({
//       name: nameError,
//       email: emailError,
//       phone: phoneError,
//       city: cityError,
//     });

//     if (nameError || emailError || phoneError || cityError) {
//       return; // block submission — invalid data never reaches Web3Forms
//     }

//     setStatus('sending');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1,
//           subject: 'New Full Home Interior Estimate Enquiry',
//           from_name: contactData.name,
//           replyto: contactData.email,

//           enquiry_type: 'Full Home Interior',
//           floorplan: estimateData.floorplan,
//           purpose: estimateData.purpose,

//           name: contactData.name.trim(),
//           email: contactData.email.trim(),
//           phone: contactData.phone.trim(),
//           city: contactData.city,
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus('success');

//         setEstimateData({ floorplan: '', purpose: '' });
//         setContactData({ name: '', email: '', phone: '', city: '' });
//         setErrors({ name: '', email: '', phone: '', city: '' });

//         setTimeout(() => {
//           navigate('/');
//         }, 10000);
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus('error');
//     }
//   }

//   return (
//     <main className="home-interior-estimate">
//       <div className="estimate-page-header">
//         <h1>
//           Get your free estimate in <span>under 30 seconds!</span>
//         </h1>
//         <p>Share your preferences for an accurate estimate</p>
//         <div className="estimate-step-indicator">
//           STEP <strong>{step}</strong> OF 2
//         </div>
//       </div>

//       <div className="estimate-form-container">
//         {step === 1 && (
//           <>
//             <div className="estimate-form-left">
//               <h2>Your floorplan</h2>

//               <div className="option-group floorplan-options">
//                 {['1 BHK', '2 BHK', '3 BHK', '3+ BHK'].map((option) => (
//                   <button
//                     key={option}
//                     type="button"
//                     className={
//                       estimateData.floorplan === option ? 'estimate-option active' : 'estimate-option'
//                     }
//                     onClick={() => handleEstimateChange('floorplan', option)}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>

//               <h2 className="purpose-heading">Purpose</h2>

//               <div className="option-group purpose-options">
//                 {['Move In', 'Rent Out', 'Renovate'].map((option) => (
//                   <button
//                     key={option}
//                     type="button"
//                     className={
//                       estimateData.purpose === option ? 'estimate-option active' : 'estimate-option'
//                     }
//                     onClick={() => handleEstimateChange('purpose', option)}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="estimate-form-right">
//               <div className="floorplan-illustration">
//                 <div className="room room-1"></div>
//                 <div className="room room-2"></div>
//                 <div className="room room-3"></div>
//                 <div className="room room-4"></div>
//                 <div className="room room-5"></div>
//               </div>
//               <div className="illustration-text">Interiors made easy</div>
//             </div>
//           </>
//         )}

//         {step === 2 && (
//           <div className="contact-step">
//             <div className="contact-step-header">
//               <h2>Almost there!</h2>
//               <p>Enter your contact details to receive your estimate.</p>
//             </div>

//             <div className="selected-details">
//               <div>
//                 <span>Floorplan</span>
//                 <strong>{estimateData.floorplan}</strong>
//               </div>
//               <div>
//                 <span>Purpose</span>
//                 <strong>{estimateData.purpose}</strong>
//               </div>
//             </div>

//             <form className="estimate-contact-form" onSubmit={handleSubmit} noValidate>
//               <div className="form-row">
//                 <div className="form-field-wrap">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={contactData.name}
//                     onChange={handleContactChange}
//                     className={errors.name ? 'input-error' : ''}
//                   />
//                   {errors.name && <span className="field-error-message">{errors.name}</span>}
//                 </div>

//                 <div className="form-field-wrap">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={contactData.email}
//                     onChange={handleContactChange}
//                     className={errors.email ? 'input-error' : ''}
//                   />
//                   {errors.email && <span className="field-error-message">{errors.email}</span>}
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-field-wrap">
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={contactData.phone}
//                     onChange={handleContactChange}
//                     inputMode="numeric"
//                     className={errors.phone ? 'input-error' : ''}
//                   />
//                   {errors.phone && <span className="field-error-message">{errors.phone}</span>}
//                 </div>

//                 <div className="form-field-wrap">
//                   <select
//                     name="city"
//                     value={contactData.city}
//                     onChange={handleContactChange}
//                     className={errors.city ? 'input-error' : ''}
//                   >
//                     <option value="" disabled>
//                       City
//                     </option>
//                     <option value="Lucknow">Lucknow</option>
//                     <option value="Varanasi">Varanasi</option>
//                   </select>
//                   {errors.city && <span className="field-error-message">{errors.city}</span>}
//                 </div>
//               </div>

//               <div className="estimate-navigation">
//                 <button type="button" className="back-button" onClick={handleBack}>
//                   ← BACK
//                 </button>

//                 <button
//                   type="submit"
//                   className="next-button"
//                   disabled={status === 'sending' || !isStep2Valid()}
//                 >
//                   {status === 'sending' ? 'SENDING...' : 'GET ESTIMATE →'}
//                 </button>
//               </div>

//               {status === 'success' && (
//                 <div className="estimate-success">
//                   Thank you! Your details have been submitted successfully. We will contact you soon.
//                 </div>
//               )}

//               {status === 'error' && (
//                 <div className="estimate-error">Something went wrong. Please try again.</div>
//               )}
//             </form>
//           </div>
//         )}
//       </div>

//       {step === 1 && (
//         <button
//           type="button"
//           className="estimate-next-button"
//           onClick={handleNext}
//           disabled={!estimateData.floorplan || !estimateData.purpose}
//         >
//           NEXT
//         </button>
//       )}
//     </main>
//   );
// }




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeInteriorEstimate.css';

const NAME_REGEX = /^[a-zA-Z\s]{2,50}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [status, setStatus] = useState('idle');

  function handleEstimateChange(field, value) {
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

  function handleContactChange(e) {
    const { name, value } = e.target;
    const cleanedValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setContactData((prev) => ({ ...prev, [name]: cleanedValue }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, cleanedValue) }));
  }

  function isStep2Valid() {
    const nameError = validateField('name', contactData.name);
    const emailError = validateField('email', contactData.email);
    const phoneError = validateField('phone', contactData.phone);
    const cityError = validateField('city', contactData.city);
    return !nameError && !emailError && !phoneError && !cityError;
  }

  function handleNext() {
    if (!estimateData.floorplan || !estimateData.purpose) return;
    setStep(2);
  }

  function handleBack() {
    setStep(1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nameError = validateField('name', contactData.name);
    const emailError = validateField('email', contactData.email);
    const phoneError = validateField('phone', contactData.phone);
    const cityError = validateField('city', contactData.city);

    setErrors({ name: nameError, email: emailError, phone: phoneError, city: cityError });

    if (nameError || emailError || phoneError || cityError) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_2,
          subject: 'New Full Home Interior Estimate Enquiry',
          from_name: contactData.name,
          replyto: contactData.email,
          enquiry_type: 'Full Home Interior',
          floorplan: estimateData.floorplan,
          purpose: estimateData.purpose,
          name: contactData.name.trim(),
          email: contactData.email.trim(),
          phone: contactData.phone.trim(),
          city: contactData.city,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEstimateData({ floorplan: '', purpose: '' });
        setContactData({ name: '', email: '', phone: '', city: '' });
        setErrors({ name: '', email: '', phone: '', city: '' });
        setTimeout(() => navigate('/'), 10000);
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
          Get your free estimate in <span>under 30 seconds!</span>
        </h1>
        <p>Share your preferences for an accurate estimate</p>
        <div className="estimate-step-indicator">
          STEP <strong>{step}</strong> OF 2
        </div>
      </div>

      <div className="estimate-form-container">
        {step === 1 && (
          <div className="estimate-form-left estimate-form-left--full">
            <h2>Your floorplan</h2>

            <div className="option-group floorplan-options">
              {['1 BHK', '2 BHK', '3 BHK', '3+ BHK'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={estimateData.floorplan === option ? 'estimate-option active' : 'estimate-option'}
                  onClick={() => handleEstimateChange('floorplan', option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <h2 className="purpose-heading">Purpose</h2>

            <div className="option-group purpose-options">
              {['Move In', 'Rent Out', 'Renovate'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={estimateData.purpose === option ? 'estimate-option active' : 'estimate-option'}
                  onClick={() => handleEstimateChange('purpose', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="quote-step">
            {/* LEFT PANEL */}
            <div className="quote-step__left">
              <div className="quote-step__badge">✦</div>
              <p className="quote-step__eyebrow">FREE QUOTE</p>
              <h2 className="quote-step__heading">
                Your dream home is almost ready
              </h2>
              <p className="quote-step__description">
                Share your contact details and our team will help you with the next steps.
              </p>

              <div className="quote-step__summary">
                <div className="quote-summary-row">
                  <span className="quote-summary-row__label">Floorplan</span>
                  <strong className="quote-summary-row__value">{estimateData.floorplan}</strong>
                </div>
                <div className="quote-summary-row">
                  <span className="quote-summary-row__label">Purpose</span>
                  <strong className="quote-summary-row__value">{estimateData.purpose}</strong>
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
                    name="name"
                    placeholder="Enter your name"
                    value={contactData.name}
                    onChange={handleContactChange}
                    className={errors.name ? 'quote-input input-error' : 'quote-input'}
                  />
                  {errors.name && <span className="field-error-message">{errors.name}</span>}
                </div>

                <div className="quote-field-wrap">
                  <label className="quote-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    className={errors.email ? 'quote-input input-error' : 'quote-input'}
                  />
                  {errors.email && <span className="field-error-message">{errors.email}</span>}
                </div>

                <div className="quote-field-wrap">
                  <label className="quote-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={contactData.phone}
                    onChange={handleContactChange}
                    inputMode="numeric"
                    className={errors.phone ? 'quote-input input-error' : 'quote-input'}
                  />
                  {errors.phone && <span className="field-error-message">{errors.phone}</span>}
                </div>

                <div className="quote-field-wrap">
                  <label className="quote-label">City</label>
                  <select
                    name="city"
                    value={contactData.city}
                    onChange={handleContactChange}
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
                  <button type="button" className="quote-back-button" onClick={handleBack}>
                    ← BACK
                  </button>
                  <button
                    type="submit"
                    className="quote-submit-button"
                    disabled={status === 'sending' || !isStep2Valid()}
                  >
                    {status === 'sending' ? 'SENDING...' : 'GET FREE QUOTE →'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="estimate-success">
                    Thank you! Your details have been submitted successfully. We will contact you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="estimate-error">Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>

      {step === 1 && (
        <button
          type="button"
          className="estimate-next-button"
          onClick={handleNext}
          disabled={!estimateData.floorplan || !estimateData.purpose}
        >
          NEXT
        </button>
      )}
    </main>
  );
}