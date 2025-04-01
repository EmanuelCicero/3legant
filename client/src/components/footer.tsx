import Image from 'next/image';
import InstagramIcon from '../assets/instagram-icon.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import YouTubeIcon from '../assets/youtube-icon.svg';

export default function footer(){
  const NavLinks = () => (
    <ul className="flex md:flex-row gap-10 text-neutral-300 text-sm text-center flex-col">
      {['Home', 'Shop', 'Product', 'Blog', 'Contact Us'].map((item) => (
        <li key={item}><a href="" className='hover:text-white'>{item}</a></li>
      ))}
    </ul>
  );

  return(
    <footer className="bg-neutral-700 text-white flex flex-col py-12 px-5">
      <div className="container mx-auto flex justify-between md:flex-nowrap flex-wrap my-10">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 items-center md:m-0 mx-auto">
          <p className="text-2xl font-medium">3legant<span className="text-neutral-400">.</span></p> 
          <div className="border lg:h-6 lg:w-0 w-6 border-neutral-400"></div>
          <p className="text-neutral-300 text-sm text-center">Gift & Decoration Store</p>
        </div>
        <nav className="md:w-fit w-full md:items-center md:flex">
          {NavLinks()}
        </nav>
      </div>
      <div className="container hidden md:flex border-t border-neutral-400 mx-auto justify-between py-5">
        <div className="flex flex-row gap-7 flex-wrap pr-3 max-w-[80%]">
          <p className="text-neutral-300">Copyright © 2025 3legant. All rights reserved</p>
          <div className="flex flex-row gap-7">
            <a href="" className="text-neutral-100 font-semibold">Privacy Policy</a>
            <a href="" className="text-neutral-100 font-semibold">Terms of Use</a>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <a href=""><Image src={InstagramIcon} alt="Instagram" width={24} height={24} /></a>
          <a href=""><Image src={FacebookIcon} alt="Facebook" width={24} height={24} /></a> 
          <a href=""><Image src={YouTubeIcon} alt="YouTube" width={24} height={24} /></a>      
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col border-t border-neutral-400 mx-auto w-[80%] py-5 flex-wrap gap-8">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <a href=""><Image src={InstagramIcon} alt="Instagram" width={24} height={24} /></a>
          <a href=""><Image src={FacebookIcon} alt="Facebook" width={24} height={24} /></a>
          <a href=""><Image src={YouTubeIcon} alt="YouTube" width={24} height={24} /></a>
        </div>
        <div className="flex flex-row gap-7 flex-wrap justify-center">
          <div className="flex flex-row gap-7 flex-wrap text-center justify-center">
            <a href="" className="text-neutral-100 font-semibold">Privacy Policy</a>
            <a href="" className="text-neutral-100 font-semibold">Terms of Use</a>
          </div>
          <p className="text-neutral-300 text-center">Copyright © 2025 3legant. All rights reserved</p>
        </div>
      </div>

    </footer>
  );
}
