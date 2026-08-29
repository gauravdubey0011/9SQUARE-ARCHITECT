// import { useModal } from '../../context/ModalContext';
// import './Category.css';

// export default function CategoryGallery({ sectionHeading, items, highlightIndex = 4, highlight }) {
//   const { openDesignerModal } = useModal();

//   // Build the final card sequence, inserting the highlight card at the given position
//   const cards = [];
//   let itemPointer = 0;
//   const totalSlots = items.length + 1;

//   for (let i = 0; i < totalSlots; i++) {
//     if (i === highlightIndex) {
//       cards.push({ type: 'highlight' });
//     } else {
//       cards.push({ type: 'image', ...items[itemPointer] });
//       itemPointer++;
//     }
//   }

//   return (
//     <section className="category-gallery">
//       <h2 className="category-gallery__heading">{sectionHeading}</h2>

//       <div className="category-gallery__grid">
//         {cards.map((card, index) =>
//           card.type === 'highlight' ? (
//             <div className="category-highlight-card" key={`highlight-${index}`}>
//               <p className="category-highlight-card__label">{highlight.label}</p>
//               <p className="category-highlight-card__price">{highlight.price}</p>
//               <a href={highlight.href} className="category-highlight-card__button">
//                 {highlight.buttonLabel}
//               </a>
//             </div>
//           ) : (
//             <div className="category-image-card" key={index}>
//               <div className="category-image-card__image-wrap">
//                 <img src={card.image} alt={card.caption} className="category-image-card__image" />
//                 {/* <span className="category-image-card__heart">♡</span> */}
//               </div>
//               <div className="category-image-card__footer">
//                 <p className="category-image-card__caption">{card.caption}</p>
//                 {/* <button className="category-image-card__quote" onClick={openDesignerModal}>
//                   Get Quote
//                 </button> */}
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

import './Category.css';

export default function CategoryGallery({ sectionHeading, items }) {
  return (
    <section className="category-gallery">
      <h2 className="category-gallery__heading">{sectionHeading}</h2>

      <div className="category-gallery__grid">
        {items.map((item, index) => (
          <div className="category-image-card" key={index}>
            <div className="category-image-card__image-wrap">
              <img
                src={item.image}
                alt={item.caption}
                className="category-image-card__image"
              />
            </div>

            <div className="category-image-card__footer">
              <p className="category-image-card__caption">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}