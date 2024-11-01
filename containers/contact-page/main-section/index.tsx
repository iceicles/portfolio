'use client';
import React, { FC } from 'react';
import ContactForm from '../../../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../../Interfaces/Form';

const MainSection: FC<{}> = ({}) => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log('data - ', JSON.stringify(data));
  };

  return (
    <ContactForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      name={'name'}
      email={'email'}
      message={'message'}
      required
    />
  );
};

export default MainSection;
