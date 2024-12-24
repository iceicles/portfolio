import React, { FC, FormEventHandler, MutableRefObject } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface ContactForm {
  onSubmit():
    | FormEventHandler<HTMLFormElement>
    | undefined
    | void
    | Promise<void>;
  register: UseFormRegister<IFormValues>;
  name: Path<IFormValues>;
  email: Path<IFormValues>;
  message: Path<IFormValues>;
  errors: IFormErrorInputs;
  ref: MutableRefObject<HTMLFormElement | null>;
}

const ContactForm: FC<ContactForm> = ({
  onSubmit,
  register,
  name,
  email,
  message,
  errors,
  ref,
}) => {
  const labelClass = 'flex flex-col gap-[0.625rem] font-bold';
  const inputClass =
    'border-solid border-2 border-white bg-transparent p-[0.5rem] italic';
  const errorClass = 'text-red-500 block h-2 pt-1';

  return (
    <div className='m-auto max-w-3xl'>
      <form
        className='flex flex-col gap-[3rem] w-full px-16'
        onSubmit={onSubmit}
        ref={ref}
      >
        <div>
          <label className={labelClass}>
            Your Name:
            <input
              {...register(name, {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Ensure name is at least 2 characters',
                },
              })}
              name={name}
              type='text'
              placeholder='What should I call you?'
              className={inputClass}
            ></input>
          </label>
          {errors && <span className={errorClass}>{errors.nameError}</span>}
        </div>
        <div>
          <label className={labelClass}>
            Your Email:
            <input
              {...register(email, { required: 'Email is required' })}
              name={email}
              type='email'
              placeholder='Where can I send a response?'
              className={inputClass}
            ></input>
          </label>
          {errors && <span className={errorClass}>{errors.emailError}</span>}
        </div>
        <div className='w-[100%]'>
          <label className={labelClass}>
            Message:
            <textarea
              {...register(message, { required: 'Message is required' })}
              rows={6}
              name={message}
              placeholder='What would you like to talk about?'
              className='border-solid border-2 border-white bg-transparent w-[100%] p-[0.5rem] italic'
            ></textarea>
          </label>
          {errors && <span className={errorClass}>{errors.messageError}</span>}
        </div>
        <input
          type='submit'
          value='Send'
          className='self-start font-bold cursor-pointer border-solid border-2 border-white px-[2rem] py-[0.5rem] bg-gray-800 hover:bg-gray-700 active:bg-gray-600'
        ></input>
      </form>
    </div>
  );
};

export default ContactForm;
