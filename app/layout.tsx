import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Moses Umogbai',
  description: 'Software Engineer - Fullstack web, mobile, and game developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Google Fonts link */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Playwrite+AU+SA:wght@100..400&family=Playwrite+IE+Guides&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body className={'flex flex-col min-h-screen m-0'}>
        <Header />
        <div className='grow'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
