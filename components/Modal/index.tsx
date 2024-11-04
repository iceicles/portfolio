import React, { FC } from 'react';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';

interface Modal {
  show: boolean;
  children: any;
  onCloseClick: () => void;
  modalContent: AboutMeModalContent;
}

const Modal: FC<Modal> = ({ show, children, onCloseClick, modalContent }) => {
  return (
    <>
      {show && (
        <div className='fixed flex justify-center items-center overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg'>
          <div className='relative p-4 w-full max-w-2xl max-h-full border-white border-2 rounded-lg'>
            <div className='relative rounded-lg shadow'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-4xl'>{modalContent.title}</h3>
                {/* TODO: move close button svg */}
                <button
                  type='button'
                  className=' bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                  data-modal-hide='default-modal'
                  onClick={onCloseClick}
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
              </div>

              <div className='p-4 md:p-5 space-y-4'>
                <p>{modalContent.description}</p>
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
