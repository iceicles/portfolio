import React, { FC } from 'react';
import { InfoSectionNav } from '../../../components/Navigation/InfoSectionNav';
import { InfoSectionNavs } from './constants';
import { Github, LinkedIn, Twitter } from '../../../components/SVG';

interface InfoSectionProps {}
const InfoSection: FC<InfoSectionProps> = ({}) => {
  const socials = {
    LinkedIN: <LinkedIn className='text-3xl text-blue-500' />,
    GitHub: <Github className='text-3xl' />,
  };
  return (
    <section>
      <p className='mb-4 caveat-font text-xl sm:text-2xl'>Connect with me</p>
      <nav>
        <ul className='flex gap-[15px] items-center justify-start'>
          {/* TODO: make this more robust.. no hard coding :/ */}
          <a href='https://www.linkedin.com/in/moses-umogbai/' target='_blank'>
            <LinkedIn className='text-4xl text-blue-500' />
          </a>
          <a href='https://github.com/iceicles' target='_blank'>
            <Github className='text-3xl' />
          </a>
          <a href='https://x.com/iceicles' target='_blank'>
            <Twitter className='text-3xl' />
          </a>
          {/* {InfoSectionNavs.map((el, _i) => (
            <li key={_i}>
              <InfoSectionNav value={el.value} href={el.href} />
              <Link href={el.href}>
                {socials.LinkedIN}
              </Link>
            </li>
          ))} */}
        </ul>
      </nav>
    </section>
  );
};

export default InfoSection;
