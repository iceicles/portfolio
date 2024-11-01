import React from 'react';
import AboutMeCard from '../../../components/Card/AboutMeCard';
import { AboutMeCards } from './constants';

const MainSection = () => {
  return (
    <div className='flex gap-y-[5vw] justify-evenly flex-wrap border-dotted'>
      {AboutMeCards.map((card) => (
        <React.Fragment key={card.id}>
          <AboutMeCard
            isCurrent={card.isCurrent}
            title={card.title}
            href={card.href}
            description={card.description}
            workplace={card.workplace}
            yearsActive={card.yearsActive}
            isTools={card.isTools}
            tools={card.tools}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainSection;
