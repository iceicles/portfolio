import React, { FC } from 'react';
import { ProfilePicture } from '../../home-page/hero-section/ProfilePic/ProfilePicture';

const MainSection = () => {
  const paragraphStyles = 'text-xl mb-10';
  const toolsClass =
    'h-fit rounded p-0.5 bg-gray-900 sm:mb-[0.625rem] sm:last:mb-0';
  return (
    <>
      <section className='w-[80vw] lg:w-[50vw] lg:ml-[10vw] block self-center gap-0'>
        <ProfilePicture additionalClass='float-left profile-pic' />
        <p className={paragraphStyles}>
          I'm a <strong>Front-end Engineer</strong> at{' '}
          <a
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='active-link'
          >
            Canadian Tire Corporation
          </a>{' '}
          (CTC), where I specialize in crafting intuitive, responsive, and
          visually appealing web applications. Some of the features I've worked
          on include:
        </p>
        <p className={`${paragraphStyles} italic`}>
          Single Sign-On (SSO) functionality for authenticating users once
          without the need of re-authentication across CTC's multiple banners;
          Cart & Checkout functionality on CTC's loyalty web app -{' '}
          <a
            href='https://triangle.canadiantire.ca/en.html'
            target='_blank'
            className='active-link'
          >
            Triangle
          </a>
          ; First Impressions on CTC's home page; User's Transactions History
          detailing purchases - when, where, how much, and total loyalty points
          earned; Carousels displaying items for recommendations and frequently
          bought together; Product buy box wishlist and sales alerts
          functionality...
        </p>
        <p className={paragraphStyles}>
          A few years back, I collaborated with a friend to build a flappy bird
          inspired mobile game -{' '}
          <a
            href='https://www.youtube.com/shorts/eUOijM2fWFc'
            target='_blank'
            className='active-link'
          >
            Hoppy Cube
          </a>{' '}
          (youtube link preview). While it is no longer on the app store due to
          an expired license, the experience taught me a lot about game dev
          using <span className={toolsClass}>C#</span> and{' '}
          <span className={toolsClass}>Unity</span>.
        </p>

        <p className={paragraphStyles}>
          I have worn many hats at CTC, first of which was a{' '}
          <strong>DevOps Engineer</strong> role with the Cloud Operations and
          Automation Team. During my time there, I automated operating systems
          for patching on servers and created dashboards to monitor server
          functionality and filter through lengthy (mostly unecessary) log
          metrics. <br /> After almost a year, I accepted an{' '}
          <strong>Android Developer</strong> role and was part of the team
          working on the{' '}
          <a
            href='https://play.google.com/store/apps/details?id=com.simplygood.ct&hl=en_CA'
            target='_blank'
            className='active-link'
          >
            CTC android mobile app
          </a>
          . There I worked on the reviews section of the app, wishlist/sign in
          implementation, developed a new homepage interface, and before my
          current role, contributed to a wayfinding feature to help users
          navigate efficiently within Canadian Tire stores and its subsidiaries.
        </p>

        <p className={paragraphStyles}>
          Before my experiences at CTC, I’ve had the privilege of working at{' '}
          <a
            href='https://www.sas.com/en_ca/home.html'
            target='_blank'
            className='active-link'
          >
            SAS Institute
          </a>{' '}
          as an IT technician, where I honed my skills in bash scripting,
          tackling computer and server related problems, and providing
          user-centric solutions.{' '}
        </p>

        <p className={paragraphStyles}>
          When I’m not coding, you’ll likely find me, playing a video game or
          immersed in music – I’m a long-time drummer, fairly new harmonica
          player, and I dabble in the piano as well. My taste in music is
          diverse, with a strong preference for hip hop, whether it's
          discovering new tracks or revisiting old classics.
        </p>

        <p className={paragraphStyles}>
          I also make sure to balance my life with a healthy workout routine,
          following a{' '}
          <a
            href='https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan'
            target='_blank'
            className='active-link'
          >
            Push/Pull/Legs (PPL)
          </a>{' '}
          program to stay fit. I also enjoy experimenting with new food recipes,
          and unwinding with a good book - lately, I’ve been getting more into
          sci-fi.
        </p>
      </section>
    </>
  );
};

export default MainSection;
