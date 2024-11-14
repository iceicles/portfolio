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
          visually appealing web applications. I have worked on creating varying
          features including but not limited to -
        </p>
        <p className={`${paragraphStyles} italic`}>
          Implemented Single Sign-On (SSO) functionality for authenticating
          users once without the need of re-authentication across CTC's multiple
          banners | Cart & Checkout functionality on CTC's loyalty web app -{' '}
          <a
            href='https://triangle.canadiantire.ca/en.html'
            target='_blank'
            className='active-link'
          >
            Triangle
          </a>{' '}
          | First Impressions on CTC's home page | User's Transactions History
          detailing purchases - when, where, how much, and total loyalty points
          earned | Carousels displaying items for recommendations and frequently
          bought together | Product buy box wishlist and sales alerts...
        </p>
        <p className={paragraphStyles}>
          With a strong foundation in computer science and IT, I’ve spent my
          career building not only front-end interfaces but also diving into the
          full tech stack including back-end development and DevOps roles.
        </p>

        <p className={paragraphStyles}>
          Within CTC, I have worn multiple hats, first of which was a{' '}
          <strong>DevOps Analyst</strong> role with the Cloud Operations and
          Automation Team. During my time there, I automated server operating
          systems patching and created dashboards to monitor servers and filter
          through lengthy (mostly unecessary) log data. <br /> After almost a
          year, I accepted an <strong>Android Developer</strong> role and was
          part of the team working on the{' '}
          <a
            href='https://play.google.com/store/apps/details?id=com.simplygood.ct&hl=en_CA'
            target='_blank'
            className='active-link'
          >
            CTC android mobile app
          </a>
          . There I worked on the reviews section of the app, wishlist/sign in
          implementation, developed a new user interface and experience for the
          home page and before my current role, contributed to a wayfinding
          feature that helps users navigate within stores.
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
          At my core, I'm someone who is curious, thrives on learning - whether
          it's new technologies, new music, or new ideas - and always up for a
          challenge!
        </p>
      </div>
    </>
  );
};

export default MainSection;
