import React, { useState } from "react";
import styles from "./Modal.module.css"; // Import your CSS module (or use inline styles)

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      {isOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Modal Title</h2>
              <button onClick={toggleModal} className={styles.closeButton}>
                X
              </button>
            </div>
            <div className={styles.modalBody}>
              {/* Modal content goes here */}
              <p>This is the modal content.</p>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
