import React from 'react';
import AboutMeCard from '../../../components/Card/AboutMeCard';
import { AboutMeCards } from './constants';

const TimelineSection = () => {
  return (
    <div className='flex flex-col gap-y-[5vw] justify-evenly flex-wrap border-dotted absolute top-0 right-0'>
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

export default TimelineSection;
