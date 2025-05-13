import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './ModalOne.module.css'


import modal1 from '../../../public/modal1.jpg';

const ModalOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button className={styles.modalBtn} type="primary" onClick={showModal}>
        Записаться на презентацию
      </Button>
      <Modal
        title="Заголовок"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalImg}>
          <img className={styles.modalImage} src={modal1} alt="modal" />
          </div>
          <div className={styles.modalInfo}>
            <h1 className={styles.modalTitle}>Получите подробное описание и цены на свободные планировки в кластере River Line</h1>
            <p className={styles.modalText}>PDF, можно скачать прямо сейчас</p>
            <button className={styles.modalButton}>Получить планировки</button>
            <p className={styles.modalText}>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalOne;
