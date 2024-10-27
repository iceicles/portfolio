import { Navigation } from './components/ui/Navigation/Navigation';
import { ProfileHeading } from './components/ui/ProfileHeading/ProfileHeading';
import { ProfilePicture } from './components/ui/ProfilePic/ProfilePicture';

export default function Home() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className='m-auto w-[75%] mt-[10vh]'>
        <div className='flex gap-[80px]'>
          <ProfilePicture />
          <ProfileHeading />
        </div>
      </main>
    </div>
  );
}
