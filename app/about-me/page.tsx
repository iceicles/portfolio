'use client';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import MainSection from '../../containers/about-page/main-section';
import TimelineSection from '../../containers/about-page/timeline-section';
import { AboutModalContent } from './constant';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';

export default function About() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [content, setModalContent] = useState<AboutMeModalContent>({
    id: 0,
    title: '',
    description: '',
  });

  const getModalContent = (id: number): void => {
    AboutModalContent.map((content) => {
      if (content.id === id) {
        console.log(
          `title for ${content.id} is ${content.title} and content is ${content.description}`
        );
        let contentData = {
          id: content.id,
          title: content.title,
          description: content.description,
        };
        setModalContent(contentData);
      }
    });
  };

  const onModalClick = (id: number): void => {
    setShowModal(true);
    getModalContent(id);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  // useEffect to handle closing modal when anywhere outside modal is clicked
  useEffect(() => {
    document.addEventListener('click', closeModal);

    // cleanup effect when page/component is unmounted/changed
    return () => {
      document.removeEventListener('click', closeModal);
    };
  }, [closeModal]);

  return (
    <>
      <div className='flex justify-around'>
        <MainSection />
        <TimelineSection showModal={onModalClick} />
      </div>
      <Modal show={showModal} onCloseClick={closeModal} modalContent={content}>
        Modal Content
      </Modal>
    </>
  );
}
