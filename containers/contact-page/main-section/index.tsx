'use client';
import React, { FC, useRef } from 'react';
import ContactForm from '../../../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormErrorInputs, IFormValues } from '../../../Interfaces/Form';
import emailjs from '@emailjs/browser';

const MainSection: FC<{}> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const form = useRef<HTMLFormElement | null>(null);

  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';

  const onSubmit: SubmitHandler<IFormValues> = () => {
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current!, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Your message has been sent!');
          reset(); // clear form
        },
        (error) => {
          alert('There was an error, please try again');
          reset();
          // TODO: handle error later
        }
      );
  };

  const errorMessages: IFormErrorInputs = {
    nameError: errors.name?.message,
    emailError: errors.email?.message,
    messageError: errors.message?.message,
  };

  return (
    <ContactForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      name={'name'}
      email={'email'}
      message={'message'}
      errors={errorMessages}
      ref={form}
    />
  );
};

export default MainSection;
