import Image from 'next/image';
import EmailIcon from '../assets/email-icon.svg';

export default function Newsletter(){
  return(
    <section className='w-full md:bg-[url("../public/background-newsletter.jpg")] bg-cover bg-center bg-no-repeat bg-neutral-300 py-28 px-5 flex items-center justify-center text-center'>
      <div className="flex flex-col gap-2">
        <h1 className="md:text-4xl text-[28px] font-medium">Join Our Newsletter</h1>
        <p className="md:text-lg text-sm">Sign up for deals, new products and promotions</p>
        <div className="flex flex-row gap-1 pt-7 border-b border-neutral-400/50">
          <Image src={EmailIcon} alt={'Email'}></Image>
          <input type="email" placeholder="Email address" className="w-full outline-none"/>
          <button className="text-neutral-400 hover:bg-neutral-600 hover:text-white h-full py-2 px-1 rounded-tr-lg hover:duration-600">Singup</button>
        </div>
      </div>
    </section>
  );
};

