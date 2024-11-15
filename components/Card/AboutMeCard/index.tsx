// file not in use

// import Link from 'next/link';
// import React, { FC } from 'react';

// interface CardProps {
//   id?: number;
//   isCurrent?: boolean;
//   title: string;
//   href: string;
//   description: string;
//   workplace: string;
//   yearsActive: string;
//   isTools?: boolean;
//   tools?: Array<string>;
// }

// const AboutMeCard: FC<CardProps> = ({
//   isCurrent,
//   title,
//   href,
//   description,
//   workplace,
//   yearsActive,
//   isTools,
//   tools,
// }) => {
//   const borderClass = 'border-white border-2 border-solid rounded';
//   const tagBorderClass = 'border-indigo-500 border-2 border-dotted rounded';
//   return (
//     <span className='w-[40%] relative'>
//       <div className={`h-[100%] w-[100%] p-[10%] ${borderClass}`}>
//         {isCurrent && (
//           <p className='absolute top-[10%] w-fit h-fit -rotate-45'>Current</p>
//         )}
//         <div className='flex flex-col items-center'>
//           <h2 className='text-4xl'>{title}</h2>
//           <div className='flex justify-between gap-[5%] self-end mt-[10%] text-center w-[200px]'>
//             <Link href={href} target='_blank' className={tagBorderClass}>
//               {workplace}
//             </Link>
//             <span className={tagBorderClass}>{yearsActive}</span>
//           </div>
//         </div>
//         <div className='flex justify-between mt-[10%]'>
//           <p>{description}</p>
//           {isTools && (
//             <div>
//               <h3 className='border-b-2 w-max'>
//                 Tools / Architectural Patterns
//               </h3>
//               <div className='border-l-2'>
//                 <ul className=' list-[square] ml-[20%]'>
//                   {tools?.map((tool, _i) => (
//                     <li key={_i}>{tool}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </span>
//   );
// };

// export default AboutMeCard;
