import React, { FC } from 'react';
import { ProfilePicture } from '../../home-page/hero-section/ProfilePic/ProfilePicture';

const MainSection = () => {
  const paragraphStyles = 'text-xl mb-10';
  return (
    <>
      <div className='w-[80vw] lg:w-[50vw] lg:ml-[10vw] block self-center gap-0'>
        <ProfilePicture additionalClass='float-left profile-pic' />
        <p className={paragraphStyles}>
          Hi there! I'm a <strong>Frontend Engineer</strong> at{' '}
          <a
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='active-link'
          >
            Canadian Tire Corporation {}
          </a>
          (CTC), where I specialize in crafting intuitive, responsive, and
          visually appealing web applications. With a strong foundation in
          computer science and IT, I’ve spent my career building not only
          front-end interfaces but also diving into the full tech stack as a
          full-stack engineering hobbyist.
        </p>

        <p className={paragraphStyles}>
          Within CTC, I have worn multiple hats, first of which was a{' '}
          <strong>DevOps Analyst</strong> position with the Cloud Operations and
          Automation Team, where I automated operating system patching and
          created dashboards to monitor servers and filter through log data.
          After that, I moved to an <strong>Android Developer</strong> role as
          part of the Mobile Team, where I worked on the CTC android mobile app.
          There I worked on the reviews section of the app, wishlist/sign in
          section, developing a new user interface and experience for the home
          page and before I moved on to my current role, contributed to a
          wayfinding feature to help users navigate within stores.
        </p>

        <p className={paragraphStyles}>
          Before my experiences at CTC, I’ve had the privilege of working at{' '}
          <a
            href='https://www.sas.com/en_ca/home.html'
            target='_blank'
            className='active-link'
          >
            SAS Institute
          </a>
          , where I honed my skills in development, problem-solving, and
          collaborating with amazing teams to create user-centric solutions.{' '}
        </p>

        <p className={paragraphStyles}>
          When I’m not coding, you’ll likely find me immersed in music – I’m a
          passionate drummer, harmonica player, and I dabble in the piano as
          well. My taste in music is diverse, but I have a special place for hip
          hop, whether it's discovering new tracks or revisiting old classics.
        </p>

        <p className={paragraphStyles}>
          I also make sure to balance my life with a healthy routine. I’m an
          avid believer in working out, following a Push/Pull/Legs (PPL) routine
          to stay fit and energized. When I’m not coding or in the gym, I enjoy
          cooking, experimenting with new recipes, and unwinding with a good
          book. Lately, I’ve been getting into fiction, exploring different
          genres and expanding my imagination.
        </p>

        <p className={paragraphStyles}>
          At my core, I'm someone who thrives on learning, whether it's new
          technologies, new music, or new ideas. I’m always up for a challenge
          and excited to see where my curiosity takes me next!
        </p>
      </div>
    </>
  );
};

export default MainSection;
