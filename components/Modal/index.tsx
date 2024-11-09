import React, { FC, MutableRefObject } from 'react';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';
import Link from 'next/link';
import { Close } from '../Icons';

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
    'border-gray-800 bg-gray-800 border-2 border-dotted rounded p-1 w-fit lg:w-inherit h-fit';

  return (
    <>
      {show && (
        <div
          id='modal'
          className='fixed flex justify-center items-center  overflow-y-auto overflow-x-hidden z-2 w-full h-full inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg transition-all'
        >
          <div
            ref={modalRef}
            className='relative p-4 w-full max-w-[52rem] max-h-[36rem] border-white border-2 rounded-lg custom-scrollbar'
          >
            <div className='relative rounded-lg shadow'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-4xl max-w-lg'>{modalContent.title}</h3>
                {/* TODO: move close button svg */}
                <div className='flex flex-col'>
                  <button
                    type='button'
                    onClick={onCloseClick}
                    className=' bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-[30%] sm:ms-auto inline-flex justify-center items-center'
                  >
                    <Close className='w-4 h-4' />
                  </button>
                  <div className='flex flex-col sm:flex-row gap-[1rem] w-fit justify-between self-end mt-[15%] text-center w-[200px]'>
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

              <div className='flex flex-col sm:flex-row p-4 md:p-5 space-y-4'>
                {/* todo - sanitize this dangerously insert html property */}
                <p
                  dangerouslySetInnerHTML={{ __html: modalContent.description }}
                  className='p-4 pr-0 sm:pr-20'
                ></p>
                <span className='flex flex-row sm:flex-col justify-evenly h-4'>
                  {modalContent.tools?.map((tools, _id) => (
                    // todo - hmm not sure why i can't use modalContent.id here...
                    <p
                      key={_id}
                      className='h-fit border-dotted border-2 bg-gray-900 sm:mb-[0.625rem] sm:last:mb-0'
                    >
                      {tools}
                    </p>
                  ))}
                </span>
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
