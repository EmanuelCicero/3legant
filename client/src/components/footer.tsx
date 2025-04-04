import Image from 'next/image';
import InstagramIcon from '../assets/instagram-icon.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import YouTubeIcon from '../assets/youtube-icon.svg';

export default function Footer(){
  const NavLinks = () => (
    <ul className="flex md:flex-row gap-10 text-neutral-300 text-sm text-center flex-col py-10">
      {['Home', 'Shop', 'Product', 'Blog', 'Contact Us'].map((item) => (
        <li key={item}><a href="" className='hover:text-white'>{item}</a></li>
      ))}
    </ul>
  );

  const LegalLinks = () => (
    <ul className="flex flex-row gap-7 flex-wrap justify-center text-center">
      {['Privacy Policy', 'Terms of Use'].map((item) => (
        <li key={item}><a href="" className='text-neutral-100 font-semibold'>{item}</a></li>
      ))}
    </ul>
  );

  const SocialLinks = () => {

    const icons = [
      {src: InstagramIcon, name: 'Instagram'},
      {src: FacebookIcon, name: 'Facebook'},
      {src: YouTubeIcon, name: 'YouTube'}
    ];

    return(
      <ul className='flex flex-row gap-6 justify-center'>
        {icons.map(({ src, name }) => (
          <li key={name}><a href=""><Image src={src} alt={name} width={24} height={24} /></a></li>
        ))}
      </ul>
    );
  };

  return(
    <footer className="bg-neutral-800 text-white flex flex-col py-11 px-5">
      <div className="container mx-auto flex justify-between md:flex-nowrap flex-wrap">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 items-center md:m-0 mx-auto">
          <p className="text-2xl font-medium">3legant<span className="text-neutral-400">.</span></p> 
          <div className="border lg:h-6 lg:w-0 w-6 border-neutral-400"></div>
          <p className="text-neutral-300 text-sm text-center">Gift & Decoration Store</p>
        </div>
        <nav className="md:w-fit w-full">
          <NavLinks />
        </nav>
      </div>
      <div className="container hidden md:flex border-t border-neutral-400 mx-auto justify-between py-5">
        <div className="flex flex-row gap-7 flex-wrap pr-3 max-w-[80%]">
          <p className="text-neutral-300">Copyright © 2025 3legant. All rights reserved</p>
          <LegalLinks />
        </div>
        <SocialLinks />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col border-t border-neutral-400 mx-auto w-[80%] py-5 flex-wrap gap-8">
        <SocialLinks />
        <div className="flex flex-row gap-7 flex-wrap justify-center">
          <LegalLinks />
          <p className="text-neutral-300 text-center">Copyright © 2025 3legant. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
