// // import './Category.css';

// // export default function CategoryGallery({ sectionHeading, items }) {
// //   return (
// //     <section className="category-gallery">
// //       <h2 className="category-gallery__heading">{sectionHeading}</h2>

// //       <div className="category-gallery__grid">
// //         {items.map((item, index) => (
// //           <div className="category-image-card" key={index}>
// //             <div className="category-image-card__image-wrap">
// //               <img
// //                 src={item.image}
// //                 alt={item.caption}
// //                 className="category-image-card__image"
// //               />
// //             </div>

// //             <div className="category-image-card__footer">
// //               <p className="category-image-card__caption">
// //                 {item.caption}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import { useState, useRef } from 'react';
// import './Category.css';

// const ITEMS_PER_PAGE = 6;

// export default function CategoryGallery({ sectionHeading, items }) {
//   const [page, setPage] = useState(0);
//   const touchStartX = useRef(null);

//   const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
//   const start = page * ITEMS_PER_PAGE;
//   const visibleItems = items.slice(start, start + ITEMS_PER_PAGE);

//   const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));
//   const goPrev = () => setPage((p) => Math.max(p - 1, 0));

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const deltaX = e.changedTouches[0].clientX - touchStartX.current;
//     if (deltaX < -50) goNext();
//     else if (deltaX > 50) goPrev();
//     touchStartX.current = null;
//   };

//   return (
//     <section className="category-gallery">
//       <h2 className="category-gallery__heading">{sectionHeading}</h2>

//       <div className="category-gallery__wrap">
//         {page > 0 && (
//           <button
//             className="category-gallery__arrow category-gallery__arrow--left"
//             onClick={goPrev}
//             aria-label="Previous"
//           >
//             ‹
//           </button>
//         )}

//         <div
//           className="category-gallery__grid"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {visibleItems.map((item, index) => (
//             <div className="category-image-card" key={start + index}>
//               <img
//                 src={item.image}
//                 alt={item.caption}
//                 className="category-image-card__image"
//               />
//               <span className="category-image-card__label">{item.caption}</span>
//             </div>
//           ))}
//         </div>

//         {page < totalPages - 1 && (
//           <button
//             className="category-gallery__arrow category-gallery__arrow--right"
//             onClick={goNext}
//             aria-label="Next"
//           >
//             ›
//           </button>
//         )}
//       </div>

//       {totalPages > 1 && (
//         <div className="category-gallery__dots">
//           {Array.from({ length: totalPages }).map((_, i) => (
//             <span
//               key={i}
//               className={`category-gallery__dot ${i === page ? 'active' : ''}`}
//               onClick={() => setPage(i)}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }


import { useState, useRef } from 'react';
import './Category.css';

const ITEMS_PER_PAGE = 6;

export default function CategoryGallery({ sectionHeading, items }) {
  const [page, setPage] = useState(0);
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const pages = Array.from({ length: totalPages }, (_, i) =>
    items.slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
  );

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) goNext();
    else if (deltaX > 50) goPrev();
    touchStartX.current = null;
  };

  return (
    <section className="category-gallery">
      <h2 className="category-gallery__heading">{sectionHeading}</h2>

      <div className="category-gallery__wrap">
        {page > 0 && (
          <button
            className="category-gallery__arrow category-gallery__arrow--left"
            onClick={goPrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}

        <div className="category-gallery__viewport">
          <div
            className="category-gallery__track"
            ref={trackRef}
            style={{ transform: `translateX(-${page * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {pages.map((pageItems, pageIndex) => (
              <div className="category-gallery__grid" key={pageIndex}>
                {pageItems.map((item, index) => (
                  <div className="category-image-card" key={index}>
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="category-image-card__image"
                    />
                    <span className="category-image-card__label">{item.caption}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {page < totalPages - 1 && (
          <button
            className="category-gallery__arrow category-gallery__arrow--right"
            onClick={goNext}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}