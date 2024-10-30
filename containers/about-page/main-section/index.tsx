import AboutMeCard from '../../../components/Card/AboutMeCard';
import { AboutMeCards } from './constants';

const MainSection = () => {
  return (
    <div className='flex gap-[100px]'>
      {AboutMeCards.map((card) => (
        <div key={card.id}>
          <AboutMeCard
            title={card.title}
            description={card.description}
            workplace={card.workplace}
            yearsActive={card.yearsActive}
            isTools={card.isTools}
            tools={card.tools}
          />
        </div>
      ))}
    </div>
  );
};

export default MainSection;
