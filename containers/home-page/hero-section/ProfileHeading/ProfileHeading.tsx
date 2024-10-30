import Link from 'next/link';
import InfoSection from '../../info-section';

export const ProfileHeading = () => {
  return (
    <div className='w-[80%] mt-[10%]'>
      <h2 className='text-[clamp(1.8rem,1rem+3vw,3.5rem)] mb-[calc(1.25rem*2)]'>
        <strong>Hi, I'm Moses. </strong>
        I'm a fullstack web, mobile, and game developer, drummer, and wannabe
        writer
      </h2>
      <div className='mt-[calc(1.25rem*2)]'>
        <p className='text-[clamp(1.2rem,.6rem+2vw,1.8rem)] mb-[calc(1.5rem*2)]'>
          I currently live in Toronto, Ontario, and work for {}
          <Link
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='underline'
          >
            Canadian Tire
          </Link>
          {} as a frontend engineer
        </p>
        <InfoSection />
      </div>
    </div>
  );
};
