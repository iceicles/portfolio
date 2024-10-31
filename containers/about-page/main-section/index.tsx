import AboutMeCard from '../../../components/Card/AboutMeCard';
import { AboutMeCards } from './constants';

const MainSection = () => {
  return (
    <div className='flex gap-y-[5vw] justify-evenly flex-wrap border-dotted'>
      {AboutMeCards.map((card) => (
        <>
          <AboutMeCard
            id={card.id}
            isCurrent={card.isCurrent}
            title={card.title}
            href={card.href}
            description={card.description}
            workplace={card.workplace}
            yearsActive={card.yearsActive}
            isTools={card.isTools}
            tools={card.tools}
          />
        </>
      ))}
    </div>
  );
};

export default MainSection;
