'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { ToolsIcon } from '../../ToolsIcon';

export function ProjectCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0 grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 sm:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black sm:rounded-3xl overflow-hidden lg:border-t-2 border-t-gradientColorBlue lg:border-b-2 border-b-gradientColorPurple'
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  decoding='async'
                  sizes='100vw'
                  className='w-full h-80 lg:h-80 object-contain object-center'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='font-bold text-white'
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className='text-neutral-500'
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target='_blank'
                    className='px-4 py-3 text-sm rounded-full font-bold bg-blue-800 hover:bg-blue-700 text-white'
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-gray-300 md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto'
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                  <motion.div className='flex gap-2 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] mt-8 lg:mt-0'>
                    {active.ctaTools.map((tool, _id) => (
                      <ToolsIcon
                        key={_id}
                        name={tool}
                        className='text-4xl'
                        CloudinaryStyle='text-4xl'
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {/* Pills */}
      <ul className='max-w-2xl mx-auto w-full gap-4'>
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className='max-lg:border-button p-4 mb-4 flex flex-col md:flex-row justify-between items-center  rounded-xl shadow-2xl shadow-blue-500/30 cursor-pointer lg:hover:border-button border border-solid lg:border-none'
          >
            <div className='flex gap-4 flex-col md:flex-row '>
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className='self-center'
              >
                <Image
                  width={100}
                  height={50}
                  src={card.src}
                  alt={card.title}
                  className='object-contain object-center rounded-xl'
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className='font-medium text-white text-center md:text-left'
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className='text-neutral-600 dark:text-neutral-400 text-center md:text-left'
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Upload images to the cloud',
    title: 'PICz',
    src: '/project-pics/picz.png',
    ctaPillText: '>',
    ctaText: 'View',
    ctaLink: 'https://picz-dev.vercel.app/',
    content: () => {
      return (
        <p>
          PICz is a full-stack MERN web application that allows users to easily
          upload and share their images on the cloud. By leveraging Cloudinary,
          a powerful cloud storage platform, PICz enables seamless storage,
          management, and sharing of photos. Once uploaded, images are made
          publicly accessible, allowing anyone to view and enjoy them. The
          platform is designed for simplicity and convenience, making it ideal
          for users looking to showcase their images online with ease.
        </p>
      );
    },
    ctaTools: [
      'HTML',
      'Tailwind',
      'React',
      'NodeJS',
      'ExpressJS',
      'Cloudinary',
    ],
  },
  {
    description: 'Access a personalized dashboard',
    title: 'Auth Demo',
    src: '/project-pics/auth-demo.png',
    ctaPillText: '>',
    ctaText: 'View',
    ctaLink: 'https://authdemo-dev.vercel.app/',
    content: () => {
      return (
        <p>
          A 'simple' full-stack authentication app demonstrating JSON Web Token
          (JWT) management, storing user credentials in a database, and
          showcasing the difference between authorization and authentication. In
          real world application, please do not roll your own auth.
        </p>
      );
    },
    ctaTools: ['HTML', 'Tailwind', 'React', 'NextJS', 'NodeJS', 'ExpressJS'],
  },
  // {
  //   description: 'Convert Websites to PDF and/or Images',
  //   title: 'Website PDF & Image Generator',
  //   src: '/placeholder-image.jpg',
  //   ctaPillText: '>',
  //   ctaText: 'In Progress',
  //   //ctaLink: '#',
  //   content: () => {
  //     return (
  //       <p>
  //         By leveraging the power of Puppeteer, a headless browser automation
  //         tool, this project scrapes the content of the provided URL and
  //         generates a high-quality screenshot or a downloadable PDF. This
  //         easy-to-use tool is perfect for saving webpages in a visual format,
  //         archiving content, or sharing static versions of web pages with
  //         others. Simply input the URL, choose your desired format, and download
  //         the result in seconds.
  //       </p>
  //     );
  //   },
  //   ctaTools: ['HTML', 'CSS', 'JavaScript', 'Puppeteer'],
  // },
];
