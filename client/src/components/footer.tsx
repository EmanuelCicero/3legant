import Image from 'next/image';
import InstagramIcon from '../assets/instagram-icon.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import YouTubeIcon from '../assets/youtube-icon.svg';


export default function footer(){

  return(
    <footer className="bg-[#141718] text-white flex flex-col justify-evenly py-12 px-5">
      <div className="container mx-auto flex justify-between md:flex-nowrap flex-wrap">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 items-center justify-center md:m-0 mx-auto pr-3">
          <p className="text-2xl font-medium">3legant<span className="text-[#6C7275]">.</span></p> 
          <div className="border lg:h-6 lg:w-0 w-6 border-[#6C7275]"></div>
          <p className="text-[#E8ECEF] text-sm whitespace-normal text-center">Gift & Decoration Store</p>
        </div>
        <nav className="md:w-fit w-full md:items-center md:flex my-10">
          <ul className="flex md:flex-row gap-10 text-[#E8ECEF] text-sm text-center flex-col">
            <li><a href="" className='hover:text-white'>Home</a></li>
            <li><a href="" className='hover:text-white'>Shop</a></li>
            <li><a href="" className='hover:text-white'>Product</a></li>
            <li><a href="" className='hover:text-white'>Blog</a></li>
            <li><a href="" className='hover:text-white'>Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="container hidden md:flex border-t border-[#6C7275] mx-auto justify-between py-5">
        <div className="flex flex-row gap-7 flex-wrap pr-3 max-w-[80%]">
          <p className="text-[#E8ECEF]">Copyright © 2025 3legant. All rights reserved</p>
          <div className="flex flex-row gap-7">
            <a href="" className="text-[#FEFEFE] font-semibold">Privacy Policy</a>
            <a href="" className="text-[#FEFEFE] font-semibold">Terms of Use</a>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <a href=""><Image src={InstagramIcon}alt="Instagram" width={24} height={24} /></a>
          <a href=""><Image src={FacebookIcon} alt="Facebook" width={24} height={24} /></a> 
          <a href=""><Image src={YouTubeIcon} alt="YouTube" width={24} height={24} /></a>      
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col border-t border-[#6C7275] mx-auto w-[80%] justify-between py-5 flex-wrap gap-8">
        <div className="flex flex-row gap-6 flex-wrap mx-auto justify-center">
          <a href=""><Image src={InstagramIcon}alt="Instagram" width={24} height={24} /></a>
          <a href=""><Image src={FacebookIcon} alt="Facebook" width={24} height={24} /></a> 
          <a href=""><Image src={YouTubeIcon} alt="YouTube" width={24} height={24} /></a>  
        </div>
        <div className="flex flex-row gap-7 flex-wrap justify-center">
          <div className="flex flex-row gap-7 flex-wrap text-center justify-center">
            <p className="text-[#FEFEFE] font-semibold">Privacy Policy</p>
            <p className="text-[#FEFEFE] font-semibold">Terms of Use</p>
          </div>
          <p className="text-[#E8ECEF] text-center">Copyright © 2025 3legant. All rights reserved</p>
        </div>
      </div>

    </footer>
  );
}
