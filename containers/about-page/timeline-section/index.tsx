import React, { FC, useState } from 'react';
import { AboutMeCards } from './constants';
import AboutMeCardShort from '../../../components/Card/AboutMeCardShort';

interface TimelineSection {
  showModal(id: number): void;
}

const TimelineSection: FC<TimelineSection> = ({ showModal }) => {
  return (
    <div className='flex flex-col gap-y-[5vw] justify-evenly flex-wrap'>
      {AboutMeCards.map((card) => (
        <React.Fragment key={card.id}>
          <AboutMeCardShort
            id={card.id}
            title={card.title}
            workplace={card.workplace}
            onClick={() => showModal(card.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

/* 

old - 
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

*/

export default TimelineSection;
