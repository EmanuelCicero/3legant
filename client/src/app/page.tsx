import Footer from '../components/footer';
import Newsletter from '@/components/newsletter';

export default function Home() {
  return (
    <main className='container max-w-full'>
      <Newsletter/>
      <Footer />
    </main>
  );
}
