'use client';
import { Metadata } from "next";
import Image from "next/image";
import { SearchIcon } from "@/components/Icons";
import Tabs from "@/components/Home/Tabs";
import { LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5, LogoImg6 } from "@/assets";
import { whySectionData } from "@/utils/mock-data";
import Carousel from "@/components/Home/Carousel/carousel";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
      AOS.init({
        duration: 700,
        delay: 300
      } as any);
    }, []);

  return (
    <main>
      <div className="bg-darkBlue">
        <div className="lg:px-6 px-[24px] max-w-[1600px] w-full">
          <div className="flex flex-col justify-center items-center gap-2 lg:py-14 py-10">
            <h2 className="md:text-4xl text-3xl text-primary-300 text-center font-normal mb-5">Your Perfect .name.ng Domain is Now Just ₦500</h2>
            <div className="border border-primary flex font-lato-bold font-bold">
              <button className="cursor-pointer bg-white text-greyLight2 px-5 py-2.5" type="button">Register Now</button>
              <button className="cursor-pointer px-5 py-2.5 text-white" type="button">Transfer Domain</button>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 mt-10 md:w-[771px] w-full flex-nowrap">
              <div className="bg-white md:h-[60px] h-[45px] w-full flex gap-3 items-center pl-4">
                <SearchIcon />
                <input className="w-full placeholder:text-greyLight3 focus:outline-none" type="text" placeholder="Find the perfect domain" />
              </div>
              <button className="bg-primary flex justify-center items-center font-bold min-w-10 px-6 md:h-[60px] h-[45px] text-darkBlue whitespace-nowrap" type="button">Search Domain</button>
            </div>
            <p className="text-greyLight4 text-center">Start the domain registration process today!</p>
          </div>
        </div>
      </div>
      <Tabs />
      <div className="py-12">
        <div className="mx-auto w-[358px] md:w-[760px] lg:w-[1000px]">
          <h2 className="sm:text-[40px] text-2xl md:text-[45px] font-lato-extrabold">Hear from Our Valued Clients</h2>
          <p className="lg:text-[20px] text-greyLight mb-3">Still not convinced? Here are clients who have trusted us to grow their businesses</p>
          <Carousel />
        </div>
        
      </div>
      <div className="py-20 md:px-0 px-[56px]" data-aos="fade-up">
        <h2 className="text-center text-[24px] md:text-[45px] mb-16 font-lato-extrabold max-w-[772px] mx-auto">Providing online solutions for leading businesses and organisations</h2>
        <div className="flex items-center justify-center flex-wrap lg:gap-12 gap-6">
          <Image src={LogoImg1} className="max-h-[75px]" width={140} height={40} alt="logo-img-1" />
          <Image src={LogoImg2} className="max-h-[75px]" width={140} height={40} alt="logo-img-2" />
          <Image src={LogoImg3} className="max-h-[75px]" width={140} height={40} alt="logo-img-3" />
          <Image src={LogoImg4} className="max-h-[75px]" width={140} height={40} alt="logo-img-4" />
          <Image src={LogoImg5} className="max-h-[75px]" width={140} height={40} alt="logo-img-5" />
          <Image src={LogoImg6} className="max-h-[75px]" width={140} height={40} alt="logo-img-6" />
        </div>
      </div>
      <div className="py-20 bg-darkBlue2 md:px-18 px-6">
        <div data-aos="fade-up">
            <h2 className="text-primary md:text-[45px] text-[40px] font-lato-extrabold mb-4">Why GO54?</h2>
            <p className="lg:text-[20px] text-white md:w-[560px] w-full">Over 100,000+ entrepreneurs and businesses have trusted us to deliver excellent service</p>
            <div className="grid grid-rows-3 md:grid-cols-2 grid-cols-1 mt-10 gap-x-8 gap-y-12">
            { whySectionData.map(({ id, title, text, icon: Icon }) => (
                <div className="flex md:flex-row flex-col md:items-center gap-5" key={id}>
                  <Icon />
                  <div className="md:w-[438px] w-full">
                      <h3 className="text-white text-lg lg:text-[20px] font-lato-bold mb-2">{title}</h3>
                      <p className="text-greyLight5 md:text-[17px] text-[15px]">{text}</p>
                  </div>
                </div>
            )) }
            </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-primary-100 to-white">
        <div className="pb-20 pt-24 md:px-0 px-6" data-aos="fade-up">
          <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center mb-4 font-lato-extrabold md:text-[45px] sm:text-[40px] text-2xl">You've got mail.</h1>
            <p className="text-center mb-10 md:text-base text-lg">Get industry tips and tricks and juicy offers straight to your mailbox.</p>
            <div className="flex md:flex-row flex-col gap-3 md:items-center max-w-[790px] w-full">
              <input className="bg-white h-[44px] rounded-[6px] px-4 text-secondary border border-primary w-full min-w-0" placeholder="Enter email address" type="text" />
              <button className="bg-primary h-[44px] min-w-8 flex justify-center items-center px-8 md:max-w-[270px] max-w-full w-full font-lato-bold hover:opacity-[0.7] transition-opacity duration-500" type="button">I'm interested. Sign me up</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default HomePage