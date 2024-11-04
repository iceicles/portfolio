import React, { FC } from 'react';

interface Modal {
  show: boolean;
  children: any;
  onCloseClick: () => void;
}

const Modal: FC<Modal> = ({ show, children, onCloseClick }) => {
  console.log('show - ', show);
  return (
    <>
      {show && (
        <div className='fixed flex justify-center items-center overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg'>
          <div className='relative p-4 w-full max-w-2xl max-h-full border-white border-2 rounded-lg'>
            <div className='relative rounded-lg shadow'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-4xl'>Front End Developer</h3>
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
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// fixed top-0 right-0 left-0
// <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
//   <div> {children} </div>

//   <div>
//     <button onClick={onCloseClick}>Close</button>
//   </div>
// </div>

export default Modal;
