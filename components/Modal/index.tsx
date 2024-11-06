import React, { FC, MutableRefObject } from 'react';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';
import Link from 'next/link';

interface Modal {
  show: boolean;
  children?: any;
  onCloseClick: () => void;
  modalContent: AboutMeModalContent;
  modalRef: MutableRefObject<HTMLDivElement | null>;
}

const Modal: FC<Modal> = ({
  show,
  children,
  onCloseClick,
  modalContent,
  modalRef,
}) => {
  const tagBorderClass =
    'border-gray-800 bg-gray-800 border-2 border-dotted rounded p-1';

  return (
    <>
      {show && (
        <div
          id='modal'
          className='fixed flex justify-center items-center overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg'
        >
          <div
            ref={modalRef}
            className='relative p-4 w-full max-w-[52rem] max-h-full border-white border-2 rounded-lg'
          >
            <div className='relative rounded-lg shadow'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-4xl'>{modalContent.title}</h3>
                {/* TODO: move close button svg */}
                <div className='flex flex-col'>
                  <button
                    type='button'
                    onClick={onCloseClick}
                    className=' bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                  >
                    <svg
                      className='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                  </button>
                  <div className='flex justify-between self-end mt-[15%] text-center w-[200px]'>
                    <Link
                      href={modalContent.jobHREF}
                      target='_blank'
                      className={tagBorderClass}
                    >
                      {modalContent.workplace}
                    </Link>
                    <span className={tagBorderClass}>
                      {modalContent.yearsActive}
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-4 md:p-5 space-y-4'>
                {/* todo - sanitize this dangerously insert html property */}
                <p
                  dangerouslySetInnerHTML={{ __html: modalContent.description }}
                  className='p-4'
                ></p>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;