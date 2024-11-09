import React, { FC, FormEventHandler, MutableRefObject } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormErrorInputs, IFormValues } from '../../Interfaces/Form';

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

  return (
    <div className='m-auto max-w-3xl'>
      <form
        className='flex flex-col gap-[3rem] w-full px-16'
        onSubmit={onSubmit}
        ref={ref}
      >
        <div>
          <label className={labelClass}>
            Your name:
            <input
              {...register(name, {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name has to be more than 3 characters',
                },
              })}
              name={name}
              type='text'
              placeholder='What should I call you?'
              className={inputClass}
            ></input>
          </label>
          {errors && <span className='text-red-500'>{errors.nameError}</span>}
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
          {errors && <span className='text-red-500'>{errors.emailError}</span>}
        </div>
        <div className='w-[100%]'>
          <label className={labelClass}>
            Message:
            <textarea
              {...register(message, { required: 'Message is required' })}
              rows={6}
              name={message}
              placeholder='What would you like to talk about'
              className='border-solid border-2 border-white bg-transparent w-[100%] p-[0.5rem] italic'
            ></textarea>
          </label>
          {errors && (
            <span className='text-red-500'>{errors.messageError}</span>
          )}
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
