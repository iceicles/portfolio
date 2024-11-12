import React, { FC } from 'react';
import Link from 'next/link';
import { InfoSectionNav } from '../../../components/Navigation/InfoSectionNav';
import { InfoSectionNavs } from './constants';
import { Github, LinkedIn, Twitter } from '../../../components/Icons';

interface InfoSectionProps {}
const InfoSection: FC<InfoSectionProps> = ({}) => {
  const socials = {
    LinkedIN: <LinkedIn className='text-3xl text-blue-500' />,
    GitHub: <Github className='text-3xl' />,
  };
  return (
    <section>
      <pre className='mb-4'>Connect with me</pre>
      <nav>
        <ul className='flex gap-[15px] items-center justify-start'>
          {/* TODO: make this more robust.. no hard coding :/ */}
          <Link
            href='https://www.linkedin.com/in/moses-umogbai-a88798149/'
            target='_blank'
          >
            <LinkedIn className='text-4xl text-blue-500' />
          </Link>
          <Link href='https://github.com/iceicles' target='_blank'>
            <Github className='text-3xl' />
          </Link>
          <Link href='https://x.com/iceicles' target='_blank'>
            <Twitter className='text-3xl' />
          </Link>
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
