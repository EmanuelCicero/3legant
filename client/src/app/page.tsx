import Footer from '../components/footer';
import Newsletter from '../components/newsletter';

export default function Home() {
  return (
    <main className='container max-w-full'>
      <Newsletter/>
      <section className='md:flex md:justify-center'>
        <div className='md:container max-w-[80%] md:py-32 py-26 bg-neutral-700 text-white text-center flex flex-col gap-6 justify-center items-center mx-auto px-4'>
          <span className='text-sm'>Home &gt; Shop</span>
          <h1 className='md:text-5xl text-4xl'>Shop Page</h1>
          <p className='md:text-lg text-base'>Let’s style you the way you’ve always imagined.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
