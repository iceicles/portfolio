'use client';
import { useState } from 'react';
import Modal from '../../components/Modal';
import MainSection from '../../containers/about-page/main-section';
import TimelineSection from '../../containers/about-page/timeline-section';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const onModalClick = (): void => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='flex justify-around'>
        <MainSection />
        <TimelineSection showModal={onModalClick} />
      </div>
      <Modal show={showModal} onCloseClick={closeModal}>
        Modal Content
      </Modal>
    </>
  );
}
