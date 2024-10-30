import React, { FC } from 'react';

interface CardProps {
  id?: number;
  title: string;
  description: string;
  workplace: string;
  yearsActive: string;
  isTools?: boolean;
  tools?: Array<string>;
}

const AboutMeCard: FC<CardProps> = ({
  title,
  description,
  workplace,
  yearsActive,
  isTools,
  tools,
}) => {
  return (
    <>
      <section className='border-white border-dotted border-3 border-light-blue-500'>
        <div className='flex-col gap-[30%]'>
          <h2>{title}</h2>
          <div>
            <span>{workplace}</span>
            <span>{yearsActive}</span>
          </div>
        </div>
        <div className=''>
          <p>{description}</p>
          {isTools && (
            <>
              <h3>Tools / Architectural Patterns</h3>
              <ul>
                {tools?.map((tool, _i) => (
                  <li key={_i}>{tool}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutMeCard;
