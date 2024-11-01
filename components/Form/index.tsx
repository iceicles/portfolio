import React, { FC, FormEventHandler } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../Interfaces/Form';

interface ContactForm {
  onSubmit():
    | FormEventHandler<HTMLFormElement>
    | undefined
    | void
    | Promise<void>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  name: Path<IFormValues>;
  email: Path<IFormValues>;
  message: Path<IFormValues>;
}

const ContactForm: FC<ContactForm> = ({
  onSubmit,
  register,
  name,
  email,
  message,
  required,
}) => {
  const labelClass = 'flex flex-col gap-[0.625rem] font-bold';
  const inputClass =
    'border-solid border-2 border-white bg-transparent p-[0.5rem] italic';

  return (
    <div>
      <form
        className='m-auto w-[25%] flex flex-col gap-[3rem]'
        onSubmit={onSubmit}
      >
        <div>
          <label className={labelClass}>
            Your name:
            <input
              {...register(name, { required })}
              name={name}
              placeholder='What should I call you?'
              className={inputClass}
            ></input>
          </label>
        </div>
        <div>
          <label className={labelClass}>
            Your Email:
            <input
              {...register(email, { required })}
              name={email}
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
              {...register(message, { required })}
              name={message}
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

export default ContactForm;
