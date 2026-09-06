// // import './WhyChooseTicker.css';

// // const tickerText = 'Because तुम्हारे पास लखनऊ में और कोई choice नहीं है, हम ही अच्छे हैं बस Livspace हैं पर महँगा है।';

// // export default function WhyChooseTicker() {
// //   return (
// //     <section className="ticker-section">
// //       <h2 className="ticker-section__heading">Why choose us</h2>

// //       <div className="ticker">
// //         <div className="ticker__track">
// //           <span className="ticker__item">{tickerText}</span>
// //           <span className="ticker__item">{tickerText}</span>
// //           <span className="ticker__item">{tickerText}</span>
// //           <span className="ticker__item">{tickerText}</span>
// //           <span className="ticker__item">{tickerText}</span>
// //           <span className="ticker__item">{tickerText}</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import './WhyChooseTicker.css';

// // Add your icons here later
// // Example:
// // import icon1 from '../../assets/icons/expertise.png';

// const whyChooseItems = [
//   {
//     title: 'Experience & Expertise',
//     icon: null,
//   },
//   {
//     title: 'Personalized Design Approach',
//     icon: null,
//   },
//   {
//     title: 'End-to-End Service',
//     icon: null,
//   },
//   {
//     title: 'On-Time Project Delivery',
//     icon: null,
//   },
//   {
//     title: 'Quality Craftsmanship & Materials',
//     icon: null,
//   },
//   {
//     title: '3D Visualization Before Execution',
//     icon: null,
//   },
// ];

// export default function WhyChooseTicker() {
//   return (
//     <section className="why-choose-section">
//       <h2 className="why-choose-section__heading">
//         Why Choose Us
//       </h2>

//       <div className="why-choose-slider">
//         <div className="why-choose-track">
//           {whyChooseItems.map((item, index) => (
//             <div className="why-choose-item" key={index}>
//               <div className="why-choose-item__icon">
//                 {item.icon ? (
//                   <img src={item.icon} alt="" />
//                 ) : (
//                   <div className="why-choose-item__icon-placeholder">
//                     Icon
//                   </div>
//                 )}
//               </div>

//               <p className="why-choose-item__title">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import './WhyChooseTicker.css';

// Add your icons here later
// Example:
// import expertiseIcon from '../../assets/icons/expertise.png';

const whyChooseItems = [
  {
    title: 'Experience & Expertise',
    icon: null,
  },
  {
    title: 'Personalized Design Approach',
    icon: null,
  },
  {
    title: 'End-to-End Service',
    icon: null,
  },
  {
    title: 'On-Time Project Delivery',
    icon: null,
  },
  {
    title: 'Quality Craftsmanship & Materials',
    icon: null,
  },
  // {
  //   title: '3D Visualization Before Execution',
  //   icon: null,
  // },
  // {
  //   title: 'Client Testimonials / Portfolio Proof',
  //   icon: null,
  // }
];

function WhyChooseItems() {
  return (
    <>
      {whyChooseItems.map((item, index) => (
        <div className="why-choose-item" key={index}>
          <div className="why-choose-item__icon">
            {item.icon ? (
              <img src={item.icon} alt="" />
            ) : (
              <div className="why-choose-item__icon-placeholder">
                Icon
              </div>
            )}
          </div>

          <p className="why-choose-item__title">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
}

export default function WhyChooseTicker() {
  return (
    <section className="why-choose-section">
      <h2 className="why-choose-section__heading">
        Why Choose Us
      </h2>

      <div className="why-choose-slider">
        <div className="why-choose-track">
          {/* First set */}
          <WhyChooseItems />

          {/* Duplicate set for seamless infinite movement */}
          <WhyChooseItems />
        </div>
      </div>
    </section>
  );
}