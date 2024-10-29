import React, { FC } from 'react';
import Link from 'next/link';
import { InfoSectionNav } from '../../../components/Navigation/InfoSectionNav';
import { InfoSectionNavs } from './constants';

interface InfoSectionProps {}
const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <section>
      <nav>
        <ul className='flex flex-col gap-[15px]'>
          {InfoSectionNavs.map((el, _i) => (
            <li key={_i}>
              <InfoSectionNav value={el.value} href={el.href} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default InfoSection;
