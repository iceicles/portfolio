import React, { FC } from 'react';
import Link from 'next/link';
import { HeaderNavs } from '../../../components/Header/constants';
import { HeaderNav } from '../../../components/Navigation/HeaderNav';
import { InfoSectionNav } from '../../../components/Navigation/InfoSectionNav';
import { InfoSectionNavs } from './constants';

interface InfoSectionProps {}
const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <section>
      <nav>
        <ul className='flex flex-col gap-[15px]'>
          {InfoSectionNavs.map((el, _i) => (
            <li>
              <InfoSectionNav key={_i} value={el.value} href={el.href} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default InfoSection;
