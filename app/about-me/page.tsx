'use client';
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/Modal';
import MainSection from '../../containers/about-page/main-section';
import TimelineSection from '../../containers/about-page/timeline-section';
import { AboutModalContent } from './constant';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';
import { usePathname } from 'next/navigation';

export default function About() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [content, setModalContent] = useState<AboutMeModalContent>({
    id: 0,
    title: '',
    description: '',
    jobHREF: '',
    workplace: '',
    yearsActive: '',
    tools: [],
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  const getModalContent = (id: number): void => {
    AboutModalContent.map((content) => {
      if (content.id === id) {
        let contentData = {
          id: content.id,
          title: content.title,
          description: content.description,
          jobHREF: content.jobHREF,
          workplace: content.workplace,
          yearsActive: content.yearsActive,
          tools: content.tools,
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
    // Function to handle closing the modal
    const handleClickOutside = (event: Event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    // Attach event listeners
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll to top after all resources are loaded
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-evenly'>
        <MainSection />
        <TimelineSection showModal={onModalClick} />
      </div>
      <Modal
        show={showModal}
        onCloseClick={closeModal}
        modalContent={content}
        modalRef={modalRef}
      ></Modal>
    </>
  );
}
