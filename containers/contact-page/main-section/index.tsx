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

  const emailjs_service_id = process.env.NEXT_PUBLIC_SERVICE_ID || '';
  const emailjs_template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
  const emailjs_public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';

  const onSubmit: SubmitHandler<IFormValues> = () => {
    emailjs
      .sendForm(emailjs_service_id, emailjs_template_id, form.current!, {
        publicKey: emailjs_public_key,
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
