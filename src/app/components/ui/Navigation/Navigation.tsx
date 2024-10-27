export const Navigation = () => {
  return (
    <div className='flex align-element justify-center py-4 sm:gap-x-16 sm:items-center sm:py-8 relative'>
      <nav className='flex gap-3'>
        <a href='/projects'>Projects</a>
        <a href='/about-me'>About Me</a>
        <a href='/tools'>Tools</a>
        <a href='/contact'>Contact</a>
      </nav>
      <h1 className='absolute right-[15%]'>MU</h1>
    </div>
  );
};
