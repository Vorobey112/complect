import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './ModalTwo.module.css'

import modal2 from '../../../public/modal2.jpg';

const ModalTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button className={styles.modalBtn} type="primary" onClick={showModal}>
        Посмотреть планировки
      </Button>
      <Modal
        title="Заголовок"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalImg}>
          <img className={styles.modalImage} src={modal2} alt="modal" />
          </div>
          <div className={styles.modalInfo}>
            <h1 className={styles.modalTitle}>Получите дизайн-буклет с подробным описанием отделки светлого интерьера</h1>
            <p className={styles.modalText}>PDF, можно скачать прямо сейчас</p>
            <button className={styles.modalButton}>Получить буклет</button>
            <p className={styles.modalText}>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTwo;