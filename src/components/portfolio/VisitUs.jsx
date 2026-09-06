// import { useState } from 'react';
// import { useModal } from '../../context/ModalContext';
// import './VisitUs.css';

// import lucknowImage from '../../assets/visitus/lucknow.jpg';
// import varanasiImage from '../../assets/visitus/varanasi.jpg';

// const locations = {
//   Lucknow: {
//     image: lucknowImage,
//     label: '9Square Lucknow',
//     address:
//       '5/66, Apna Ghar Yojana, Sector 4, Near Shaheed Path, Lucknow, Uttar Pradesh, 226010',
//     timings: 'Monday To Saturday | 10am to 8pm',
//     contact: '8800333929',
//     facilities: 'Free Car Parking | Restrooms',
//     bring: 'Floor Plan | Site Images',
//   },
//   Varanasi: {
//     image: varanasiImage,
//     label: '9Square Varanasi',
//     address:
//       '5/66, Apna Ghar Yojana, Sector 4, Near Shaheed Path, Lucknow, Uttar Pradesh, 226010',
//     timings: 'Monday To Sunday | 10am to 8pm',
//     contact: '9695036889',
//     facilities: 'Free Car Parking | Restrooms',
//     bring: 'Floor Plan | Site Images',
//   },
// };

// export default function VisitUs() {
//   const [activeCity, setActiveCity] = useState('Lucknow');
//   const current = locations[activeCity];
//   const { openContactModal } = useModal();

//   return (
//     <section className="visitus">
//       <h2 className="visitus__heading">Visit Our Experience Centre(s)</h2>

//       <div className="visitus__tabs">
//         {Object.keys(locations).map((city) => (
//           <button
//             key={city}
//             className={`visitus__tab ${activeCity === city ? 'active' : ''}`}
//             onClick={() => setActiveCity(city)}
//           >
//             {city}
//           </button>
//         ))}
//       </div>

//       <div className="visitus__content">
//         <div className="visitus__image-wrap">
//           <img src={current.image} alt={current.label} className="visitus__image" />
//           <span className="visitus__image-label">{current.label}</span>
//         </div>

//         <div className="visitus__details">
//           <p className="visitus__detail-heading">ADDRESS</p>
//           <p className="visitus__detail-text">{current.address}</p>

//           <div className="visitus__detail-row">
//             <div>
//               <p className="visitus__detail-heading">TIMINGS</p>
//               <p className="visitus__detail-text">{current.timings}</p>
//             </div>
//             <div>
//               <p className="visitus__detail-heading">CONTACT NUMBER</p>
//               <p className="visitus__detail-text">{current.contact}</p>
//             </div>
//           </div>

//           <p className="visitus__detail-heading">FACILITIES FOR YOUR CONVENIENCE:</p>
//           <p className="visitus__detail-text">{current.facilities}</p>

//           <p className="visitus__detail-heading">WHAT TO BRING FOR YOUR DESIGN CONSULTATION</p>
//           <p className="visitus__detail-text">{current.bring}</p>
//         </div>
//       </div>

//       <div className="visitus__cta-wrap">
//         <button className="visitus__cta" onClick={openContactModal}>
//           Schedule Visit
//         </button>
//       </div>
//     </section>
//   );
// }


import { useModal } from '../../context/ModalContext';
import './VisitUs.css';

import lucknowImage from '../../assets/visitus/lucknow.jpg';

const location = {
  image: lucknowImage,
  label: '9Square Lucknow',
  address:
    '5/66, Apna Ghar Yojana, Sector 4, Near Shaheed Path, Lucknow, Uttar Pradesh, 226010',
  timings: 'Monday To Saturday | 10am to 8pm',
  contact: '8800333929',
  facilities: 'Free Car Parking | Restrooms',
  bring: 'Floor Plan | Site Images',
};

export default function VisitUs() {
  const { openContactModal } = useModal();

  return (
    <section className="visitus">
      <h2 className="visitus__heading">
        Visit Our Experience Centre
      </h2>

      <div className="visitus__content">
        <div className="visitus__image-wrap">
          <img
            src={location.image}
            alt={location.label}
            className="visitus__image"
          />

          <span className="visitus__image-label">
            {location.label}
          </span>
        </div>

        <div className="visitus__details">

          <p className="visitus__detail-heading">
            ADDRESS
          </p>

          <p className="visitus__detail-text">
            {location.address}
          </p>

          <div className="visitus__detail-row">

            <div>
              <p className="visitus__detail-heading">
                TIMINGS
              </p>

              <p className="visitus__detail-text">
                {location.timings}
              </p>
            </div>

            <div>
              <p className="visitus__detail-heading">
                CONTACT NUMBER
              </p>

              <p className="visitus__detail-text">
                {location.contact}
              </p>
            </div>

          </div>

          <p className="visitus__detail-heading">
            FACILITIES FOR YOUR CONVENIENCE:
          </p>

          <p className="visitus__detail-text">
            {location.facilities}
          </p>

          <p className="visitus__detail-heading">
            WHAT TO BRING FOR YOUR DESIGN CONSULTATION
          </p>

          <p className="visitus__detail-text">
            {location.bring}
          </p>

        </div>
      </div>

      <div className="visitus__cta-wrap">
        <button
          className="visitus__cta"
          onClick={openContactModal}
        >
          Schedule Visit
        </button>
      </div>
    </section>
  );
}