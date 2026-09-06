

// // import { createContext, useContext, useState } from 'react';

// // const ModalContext = createContext();

// // export function ModalProvider({ children }) {
// //   const [activeModal, setActiveModal] = useState(null);

// //   const openDesignerModal = () => setActiveModal('designer');
// //   const openContactModal = () => setActiveModal('contact');
// //   const closeModal = () => setActiveModal(null);

// //   return (
// //     <ModalContext.Provider
// //       value={{ activeModal, openDesignerModal, openContactModal, closeModal }}
// //     >
// //       {children}
// //     </ModalContext.Provider>
// //   );
// // }

// // export function useModal() {
// //   return useContext(ModalContext);
// // }


// import { createContext, useContext, useState } from 'react';

// const ModalContext = createContext();

// export function ModalProvider({ children }) {
//   const [activeModal, setActiveModal] = useState(null);
//   const [estimateCategory, setEstimateCategory] = useState('');

//   const openDesignerModal = () => setActiveModal('designer');
//   const openContactModal = () => setActiveModal('contact');
//   const openEstimateModal = (category) => {
//     setEstimateCategory(category);
//     setActiveModal('estimate');
//   };
//   const openKitchenEstimateModal = () => setActiveModal('kitchen-estimate');
//   const closeModal = () => setActiveModal(null);

//   return (
//     <ModalContext.Provider
//       value={{
//         activeModal,
//         estimateCategory,
//         openDesignerModal,
//         openContactModal,
//         openEstimateModal,
//         openKitchenEstimateModal,
//         closeModal,
//       }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// }

// export function useModal() {
//   return useContext(ModalContext);
// }


import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);

  const [estimateCategory, setEstimateCategory] = useState('');

  const openDesignerModal = () => {
    setActiveModal('designer');
  };

  const openContactModal = () => {
    setActiveModal('contact');
  };

  const openEstimateModal = (category) => {
    setEstimateCategory(category);
    setActiveModal('estimate');
  };

  const openKitchenEstimateModal = () => {
    setActiveModal('kitchen-estimate');
  };

  // Architecture modal
  const openArchitectureModal = () => {
    setActiveModal('architecture-contact');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        estimateCategory,

        openDesignerModal,
        openContactModal,
        openEstimateModal,
        openKitchenEstimateModal,

        // Architecture
        openArchitectureModal,

        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}