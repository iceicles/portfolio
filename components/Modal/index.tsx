'use client';
import React, { FC, MutableRefObject } from 'react';
import { AboutMeModalContent } from '../../types/AboutMeModalContent';
import Link from 'next/link';
import { Close, CTCLogo } from '../Icons';
import { useIsMobile } from '../../hooks/useIsMobile';
import DOMPurify from 'dompurify';

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
    'border-gray-800 bg-gray-800 border-2 border-dotted rounded p-1 w-fit lg:w-inherit h-fit self-center';

  const isMobile = useIsMobile();

  const description = modalContent.description;
  // note: added 'use client' here bc we're using dangerouslySetInnerHTML
  const sanitizedDescriptionContent = DOMPurify.sanitize(description);

  return (
    <>
      {show && (
        <div
          id='modal'
          className='fixed flex justify-center items-center  overflow-y-auto overflow-x-hidden z-50 w-full h-full inset-0 max-h-full backdrop-blur-lg transition-all'
        >
          <div
            ref={modalRef}
            className='relative p-4 w-full max-w-[52rem] max-h-[36rem] border-2 rounded-lg custom-scrollbar border-gray-500'
          >
            <div className='relative rounded-lg shadow'>
              <div className='flex flex-col sm:flex-row items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-4xl max-w-lg self-start sm:self-auto sm:w-[70%] md:w-auto'>
                  {modalContent.title}
                </h3>
                <div className='flex flex-col self-start sm:self-auto'>
                  {!isMobile ? (
                    <button
                      type='button'
                      onClick={onCloseClick}
                      className=' bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-[30%] sm:ms-auto inline-flex justify-center items-center'
                    >
                      <Close className='w-4 h-4' />
                    </button>
                  ) : (
                    ''
                  )}
                  <div className='flex gap-[1rem] w-fit justify-between self-end mt-[15%] text-center'>
                    <Link href={modalContent.jobHREF} target='_blank'>
                      {/* TODO: figure out a way to make add this to constant.ts file - makes it dynamic */}
                      <CTCLogo className='text-5xl' />
                      {/* {modalContent.workplace} */}
                    </Link>
                    <span className={tagBorderClass}>
                      {modalContent.yearsActive}
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row p-4 md:p-5 space-y-4'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedDescriptionContent,
                  }}
                  className='p-4 pr-0 sm:pr-20'
                ></div>
                <span className='flex flex-row flex-wrap sm:flex-nowrap justify-start gap-1 sm:flex-col h-4'>
                  {modalContent.tools?.map((tools, _id) => (
                    // todo - hmm not sure why i can't use modalContent.id here...
                    <p
                      key={_id}
                      className='h-fit rounded p-0.5 bg-gray-900 sm:mb-[0.625rem] sm:last:mb-0'
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
