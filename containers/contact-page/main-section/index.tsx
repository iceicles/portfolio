import React, { FC } from 'react';

const MainSection: FC<{}> = ({}) => {
  const labelClass = 'flex flex-col gap-[0.625rem] font-bold';
  const inputClass =
    'border-solid border-2 border-white bg-transparent p-[0.5rem] italic';
  return (
    <div>
      <form className='m-auto w-[25%] flex flex-col gap-[3rem]'>
        <div>
          <label className={labelClass}>
            Your name:
            <input
              name='name'
              placeholder='What should I call you?'
              className={inputClass}
            ></input>
          </label>
        </div>
        <div>
          <label className={labelClass}>
            Your Email:
            <input
              name='email'
              placeholder='Where can I send a response?'
              className={inputClass}
            ></input>
          </label>
        </div>
        <div className='w-[100%]'>
          <label className={labelClass}>
            Message:
            <textarea
              rows={6}
              name='message'
              placeholder='What would you like to talk about'
              className='border-solid border-2 border-white bg-transparent w-[100%] p-[0.5rem] italic'
            ></textarea>
          </label>
        </div>
        <input
          type='submit'
          value='Send'
          className='self-start font-bold cursor-pointer border-solid border-2 border-white bg-transparent px-[2rem] py-[0.5rem]'
        ></input>
      </form>
    </div>
  );
};

export default MainSection;
