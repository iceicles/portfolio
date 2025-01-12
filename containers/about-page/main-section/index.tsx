'use client';
import React, { useState } from 'react';
import { ProfilePicture } from '../../home-page/hero-section/ProfilePic/ProfilePicture';
import { ChevronDown, ChevronUp } from '../../../components/SVG';

const MainSection = () => {
  const [toggleExpandCollapse, settoggleExpandCollapse] = useState(false);

  const paragraphStyles = 'text-xl mb-10';
  const toolsStyles =
    'h-fit rounded p-0.5 bg-gray-900 sm:mb-[0.625rem] sm:last:mb-0';
  const expandCollapseStyles = 'content-center justify-items-center min-w-fit';

  const expandCollapseHandler = () => {
    settoggleExpandCollapse(!toggleExpandCollapse);
  };

  return (
    <>
      <section className='w-[80vw] lg:w-[50vw] lg:ml-[10vw] block self-center gap-0'>
        <ProfilePicture additionalClass='float-left profile-pic' />
        <p className={paragraphStyles}>
          I'm a <strong>Front-end Engineer</strong> at{' '}
          <a
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='link'
          >
            Canadian Tire Corporation
          </a>{' '}
          (CTC), where I specialize in crafting intuitive, responsive, and
          visually appealing web applications. Some of the features I've
          developed include:
        </p>
        <p className={`${paragraphStyles} italic`}>
          Single Sign-On (SSO) functionality for one time authentication without
          the need of re-authorization across CTC's multiple banners: &nbsp;
          <a
            href='https://www.sportchek.ca/en.html'
            target='_blank'
            className='link'
          >
            Sport Chek{' '}
          </a>
          , &nbsp;
          <a
            href='https://www.marks.com/en.html'
            target='_blank'
            className='link'
          >
            Marks{' '}
          </a>
          , &nbsp;
          <a
            href='https://www.atmosphere.ca/en.html'
            target='_blank'
            className='link'
          >
            Atmosphere{' '}
          </a>
          , &nbsp;
          <a
            href='https://www.lequipeur.com/fr.html'
            target='_blank'
            className='link'
          >
            L'équipeur
          </a>
          &nbsp;; Cart & Checkout functionality on CTC's loyalty web app -{' '}
          <a
            href='https://triangle.canadiantire.ca/en.html'
            target='_blank'
            className='link'
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
            className='link'
          >
            Hoppy Cube
          </a>{' '}
          (youtube link preview). While it is no longer on the app store due to
          an expired license, the experience taught me a lot about game dev
          using <span className={toolsStyles}>C#</span> and{' '}
          <span className={toolsStyles}>Unity</span>.
        </p>

        <div className='relative w-full flex items-center justify-center'>
          {!toggleExpandCollapse && (
            <span className='before:content-[""] absolute bg-gradientColorBlue top-[50%] h-[1px] right-[70%] w-[30%] sm:right-[60%] md:w-[40%]'></span>
          )}
          <button
            className={`${
              toggleExpandCollapse ? 'hidden' : 'visible'
            } ${expandCollapseStyles} group`}
            onClick={expandCollapseHandler}
          >
            <span className='flex items-center gap-2'>
              <p>Read More</p>
              <ChevronDown className='group-hover:translate-y-1 duration-500' />
            </span>
          </button>
          {!toggleExpandCollapse && (
            <span className='after:content-[""] absolute bg-gradientColorPurple top-[50%] h-[1px] left-[70%] w-[30%] sm:left-[60%] md:w-[40%]'></span>
          )}
        </div>
        <div className={`${toggleExpandCollapse ? 'visible' : 'hidden'}`}>
          <p className={`${paragraphStyles}`}>
            I have worn many hats at CTC, first of which was a{' '}
            <strong>DevOps Engineer</strong> role with the Cloud Operations and
            Automation Team. During my time there, I automated operating systems
            for patching on servers and created dashboards to monitor server
            functionality and filter through superfluous log metrics. <br />{' '}
            After almost a year, I accepted an{' '}
            <strong>Android Developer</strong> role and was part of the team
            working on{' '}
            <a
              href='https://play.google.com/store/apps/details?id=com.simplygood.ct&hl=en_CA'
              target='_blank'
              className='link'
            >
              CTC's android mobile app
            </a>{' '}
            where I worked on the reviews section of the app, wishlist/sign in
            implementation, developed a new homepage interface, and before my
            current role, contributed to a wayfinding feature to help users
            efficiently navigate within Canadian Tire stores including its
            subsidiaries.
          </p>

          <p className={paragraphStyles}>
            Before my experiences at CTC, I’ve had the privilege of working at{' '}
            <a
              href='https://www.sas.com/en_ca/home.html'
              target='_blank'
              className='link'
            >
              SAS Institute
            </a>{' '}
            as an <strong>IT Specialist</strong>, where I honed my skills in
            bash scripting, tackling computer and server related problems, and
            providing user-centric solutions.{' '}
          </p>

          <p className={paragraphStyles}>
            When I’m not coding, you’ll likely find me, playing a video game or
            immersed in music – I’m a long-time drummer, fairly new harmonica
            player, and I dabble in the piano as well. My taste in music is
            diverse, with a strong preference for hip hop, whether it's
            discovering new tracks or revisiting old classics.
          </p>

          <p className={paragraphStyles}>
            I make sure to balance my life with a healthy workout routine,
            following a{' '}
            <a
              href='https://www.muscleandstrength.com/workouts/6-day-powerbuilding-split-meal-plan'
              target='_blank'
              className='link'
            >
              Push/Pull/Legs (PPL)
            </a>{' '}
            program to stay fit. I also enjoy experimenting with new food
            recipes, and unwinding with a good book - lately, I’ve been getting
            more into sci-fi.
          </p>
          <div className='relative w-full flex items-center justify-center'>
            {toggleExpandCollapse && (
              <span className='before:content-[""] absolute bg-gradientColorBlue top-[50%] h-[1px] right-[70%] w-[30%] sm:right-[60%] md:w-[40%]'></span>
            )}
            <button
              className={`${
                toggleExpandCollapse ? 'visible' : 'hidden'
              } ${expandCollapseStyles} group`}
              onClick={expandCollapseHandler}
            >
              <span className='flex items-center gap-2'>
                <p>Read Less</p>
                <ChevronUp className='group-hover:-translate-y-1 duration-500' />
              </span>
            </button>
            {toggleExpandCollapse && (
              <span className='after:content-[""] absolute bg-gradientColorPurple top-[50%] h-[1px] left-[70%] w-[30%] sm:left-[60%] md:w-[40%]'></span>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
