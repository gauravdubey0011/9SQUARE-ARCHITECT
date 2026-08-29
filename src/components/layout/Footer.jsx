// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// export default function Footer() {
//   const [interiorsOpen, setInteriorsOpen] = useState(true);

//   return (
//     <footer className="footer">
//       <div className="footer__inner">
//         {/* Brand + socials */}
//         <div className="footer__brand-col">
//           <a href="/" className="footer__logo">
//             9SQUARE
//           </a>

//           <div className="footer__socials">
//             {/* <a href="https://google.com" className="footer__social-icon" aria-label="Facebook">
//               f
//             </a>
//             <a href="https://google.com" className="footer__social-icon" aria-label="Twitter">
//               t
//             </a> */}
//             <a href="https://google.com" className="footer__social-icon" aria-label="Instagram">
//               ig
//             </a>
//             <a href="https://google.com" className="footer__social-icon" aria-label="Pinterest">
//               p
//             </a>
//             {/* <a href="https://google.com" className="footer__social-icon" aria-label="YouTube">
//               yt
//             </a> */}
//           </div>
//         </div>

//         {/* Offerings */}
//         <div className="footer__col">
//           <h4 className="footer__heading">OFFERINGS</h4>

//           <button
//             className="footer__dropdown-toggle"
//             onClick={() => setInteriorsOpen(!interiorsOpen)}
//           >
//             Interiors <span>{interiorsOpen ? '▲' : '▼'}</span>
//           </button>

//           {interiorsOpen && (
//           <ul className="footer__sublist">
//             <li>
//               <Link to="/interiors/modular-interiors">
//                 Modular Interiors
//               </Link>
//             </li>

//             <li>
//               <Link to="/interiors/full-home-interiors">
//                 Full Home Interiors
//               </Link>
//             </li>

//             <li>
//               <a href="https://google.com">Luxury Interiors</a>
//             </li>

//             <li>
//               <a href="https://google.com">9Square Kitchen</a>
//             </li>

//             <li>
//               <a href="https://google.com">9Square Wardrobe</a>
//             </li>

//             <li>
//               <a href="#estimate-section">
//                 Home Interior Price Calculator
//               </a>
//             </li>

//             <li>
//               <a href="#estimate-section">
//                 Modular Kitchen Price Calculator
//               </a>
//             </li>

//             <li>
//               <a href="#estimate-section">
//                 Wardrobe Price Calculator
//               </a>
//             </li>

//             <li>
//               <a href="https://google.com">Kitchen Cabinets</a>
//             </li>

//             <li>
//               <a href="https://google.com">Wardrobe Cabinets</a>
//             </li>
//           </ul>
//         )}
//         </div>

//         <div className="footer__col">
//           <h4 className="footer__heading">CONTACT US</h4>

//           <p className="footer__contact-label">Call us</p>
//           <p className="footer__contact-value">8800333929</p>

//           <p className="footer__contact-label">Email us</p>
//           <p className="footer__contact-value">kuchbhi@9square.com</p>

//           <p className="footer__contact-label">Visit us</p>
//           <p className="footer__contact-value">
//             5/66, Apna Ghar Yojna, Sector 4,
//             <br />
//             Near Shaheed Path, Lucknow, Uttar Pradesh, 226010
//           </p>
//         </div>
//       </div>

//       <div className="footer__bottom">
//         <p>&copy; {new Date().getFullYear()} 9Square. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }




import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import instagramIcon from '../../assets/icons/instagram.png';
import pinterestIcon from '../../assets/icons/pinterest.png';

export default function Footer() {
  const [interiorsOpen, setInteriorsOpen] = useState(true);

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand + socials */}
        <div className="footer__brand-col">
          <a href="/" className="footer__logo">
            9SQUARE
          </a>

          <div className="footer__socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              className="footer__social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="footer__social-icon-img"
              />
            </a>

            {/* Pinterest */}
            <a
              href="https://in.pinterest.com/"
              className="footer__social-icon"
              aria-label="Pinterest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pinterestIcon}
                alt="Pinterest"
                className="footer__social-icon-img"
              />
            </a>

          </div>
        </div>

        {/* Offerings */}
        <div className="footer__col">
          <h4 className="footer__heading">OFFERINGS</h4>

          <button
            className="footer__dropdown-toggle"
            onClick={() => setInteriorsOpen(!interiorsOpen)}
          >
            Interiors
            <span>{interiorsOpen ? '⌃' : '⌄'}</span>
          </button>

          {interiorsOpen && (
            <ul className="footer__sublist">

              <li>
                <Link to="/interiors/modular-interiors">
                  Modular Interiors
                </Link>
              </li>

              <li>
                <Link to="/interiors/full-home-interiors">
                  Full Home Interiors
                </Link>
              </li>

              <li>
                <a href="https://google.com">Luxury Interiors</a>
              </li>

              <li>
                <a href="https://google.com">9Square Kitchen</a>
              </li>

              <li>
                <a href="https://google.com">9Square Wardrobe</a>
              </li>

              <li>
                <a href="#estimate-section">
                  Home Interior Price Calculator
                </a>
              </li>

              <li>
                <a href="#estimate-section">
                  Modular Kitchen Price Calculator
                </a>
              </li>

              <li>
                <a href="#estimate-section">
                  Wardrobe Price Calculator
                </a>
              </li>

              <li>
                <a href="https://google.com">Kitchen Cabinets</a>
              </li>

              <li>
                <a href="https://google.com">Wardrobe Cabinets</a>
              </li>

            </ul>
          )}
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">CONTACT US</h4>

          <p className="footer__contact-label">Call us</p>
          <p className="footer__contact-value">8800333929</p>

          <p className="footer__contact-label">Email us</p>
          <p className="footer__contact-value">
            kuchbhi@9square.com
          </p>

          <p className="footer__contact-label">Visit us</p>
          <p className="footer__contact-value">
            5/66, Apna Ghar Yojna, Sector 4,
            <br />
            Near Shaheed Path, Lucknow, Uttar Pradesh, 226010
          </p>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} 9Square. All rights reserved.
        </p>
      </div>
    </footer>
  );
}