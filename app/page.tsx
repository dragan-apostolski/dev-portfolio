import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import localFont from 'next/font/local';


const chakraPetch = localFont({
  src: [
    {
      path: '../public/fonts/ChakraPetch-Light.ttf', 
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ChakraPetch-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ChakraPetch-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ChakraPetch-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ChakraPetch-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chakra-petch', // Optional: CSS variable for the font
});

export default function Home() {
  return (
    <main className={`relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 ${chakraPetch.className}`}>
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Experience/>
        <RecentProjects/>
        <Footer />
      </div>
    </main>
  );
}
