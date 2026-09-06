import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './ArchitectureConnect.css';

export default function ArchitectureConnect() {
  const { openArchitectureModal } = useModal();

  return (
    <section className="architecture-connect">
      <div className="architecture-connect__container">

        <h2 className="architecture-connect__heading">
          Start a conversation about your project aspirations today!
        </h2>

        <button
          type="button"
          className="architecture-connect__button"
          onClick={openArchitectureModal}
        >
          <span>Connect</span>
          <span className="architecture-connect__arrow">→</span>
        </button>

      </div>
    </section>
  );
}