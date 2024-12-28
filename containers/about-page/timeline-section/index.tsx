import React, { FC } from 'react';
import { AboutMeCards } from './constants';
import AboutMeCardShort from '../../../components/Card/AboutMeCardShort';

interface TimelineSection {
  showModal(id: number): void;
}

const TimelineSection: FC<TimelineSection> = ({ showModal }) => {
  return (
    <section className='flex flex-col sm:flex-row lg:flex-col mt-12 sm:m-auto sm:mt-12 gap-4 md:gap-[5vw] justify-evenly sm:flex-wrap xl:border-l-2'>
      <div className='flex flex-col gap-16 mx-12'>
        <h1 className='text-3xl text-center text-8 font-medium underline underline-offset-8 decoration-wavy decoration-blue-500/40 xl:no-underline'>
          <i>Experiences</i>
        </h1>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-5'>
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
      </div>
    </section>
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
