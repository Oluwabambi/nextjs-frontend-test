'use client';

import { CloudImg, Workspace2Img, WorkspaceImg } from '@/assets'
import { InfoIcon, TickIcon } from '@/components/Icons';
import { pricingOptions, productFeaturesItems } from '@/utils/constants'
import { formatCurrency, formatNum } from '@/utils/helpers';
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FAQs from './FAQs';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const GoogleWorkspaceService = () => {
    const [activePriceTab, setActivePriceTab] = useState('monthly');

    useEffect(() => {
      AOS.init({
        duration: 700,
        delay: 300
      } as any);
    }, []);

  return (
    <main>
      <div className="bg-linear-[248.72deg,#FFFFFF_31.9%,#131735_308.46%]">
        <div className="pt-20 max-w-[1640px] mx-auto lg:px-[4.8rem] px-6">
            <div className='flex md:flex-row flex-col justify-between max-w-[1300px] items-center'>
                <div className='md:px-[30px] md:pt-[44px] md:pb-[50px] pt-[15px] pb-[20px] md:w-[536px] w-full mb-12'>
                    <p className='md:text-[17px] text-[15px] text-dark2 mb-3 leading-[1.7] max-w-[960px]'>Transforming Your Collaboration Experience</p>
                    <h1 className='md:text-[45px] text-[40px] leading-[1.2] font-lato-extrabold mb-5 text-dark2'>Boost Productivity and Smooth Collaboration for Your Team with Google Workspace </h1>
                    <ul className='list-[initial] px-0 ml-4 mb-[40px]'>
                        <li className='mb-[10px] md:text-[20px] text-[17px] text-darkBlue'>Collaborative Document Editing</li>
                        <li className='mb-[10px] md:text-[20px] text-[17px] text-darkBlue'>Professional Business Email</li>
                        <li className='mb-[10px] md:text-[20px] text-[17px] text-darkBlue'>Secure Cloud Storage</li>
                        <li className='mb-[10px] md:text-[20px] text-[17px] text-darkBlue'>Effortless Video Meetings</li>
                    </ul>
                    <div className="flex gap-5">
                        <button type='button' className='bg-primary cursor-pointer text-darkBlue h-[48px] px-[30px] min-w-10 font-lato-bold hover:opacity-[0.7] transition-opacity duration-500 whitespace-nowrap'>See Pricing</button>
                        <button type='button' className='bg-white cursor-pointer text-darkBlue border border-primary h-[48px] px-[30px] min-w-10 font-lato-bold whitespace-nowrap'>Get Started</button>
                    </div>
                </div>
                <div className='max-h-[760px]'>
                    <Image
                    src={WorkspaceImg}
                    alt='workspace-img'
                    width={612}
                    height={612}
                    />
                </div>
            </div>
        </div>
      </div>
      <div className='bg-linear-[215deg,#EDEDED_10.87%,#FFF7E900_62.07%,#FFF] md:px-[112px] px-[32px] md:py-[84px] py-[96px]'>
        <h2 className='text-greyLight2 md:text-[30px] text-[20px] font-lato-bold mb-[9px] text-center'>Product Features</h2>
        <p className='lg:w-[946px] w-full md:text-lg text-[15px] font-medium mb-[79px] mx-auto text-center'>Discover the amazing features of Hostafrica Nigeria Limited's Google Workspace</p>
        <div className="flex gap-x-2 gap-y-20 flex-wrap items-center justify-center w-full">
          { productFeaturesItems.map(({ id, name, text, icon: Icon }) => (
            <div key={id} className='bg-darkBlue2 sm:min-w-[392px] max-w-[392px] min-w-full pt-[80px] pb-10 px-10 w-[inherit] text-center relative min-h-[340px]'>
              <span className='absolute -top-10 left-[42%]'>
                <Icon />
              </span>
              <h3 className='text-primary text-[28px] mb-2.5 font-lato-bold'>{name}</h3>
              <p className='text-white'>{text}</p>
            </div>
          )) }
        </div>
      </div>
      <div className='bg-linear-[215deg,#EDEDED_10.87%,#FFF7E900_62.07%,#FFF]'>
        <div className=' md:px-[112px] px-[32px] md:py-[84px] py-[96px]' data-aos='fade-up'>
          <h2 className='text-greyLight2 md:text-[48px] text-[28px] font-lato-bold mb-[9px] text-center'>Pricing</h2>
          <p className='font-medium text-lg text-greyLight2 mb-5 text-center'>Choose the plan that aligns perfectly with your business needs</p>
          <div className="flex w-fit mx-auto items-center justify-center gap-2 border border-primary rounded-[4px] py-2 px-3 bg-brownLight2">
            <button 
                onClick={() => setActivePriceTab('monthly')}
                className={classNames('text-greyLight font-semibold py-3 px-4 cursor-pointer hover:bg-white transition-colors duration-300', activePriceTab === 'monthly' && 'bg-white text-greyLight9 font-lato-bold')} type="button">
                Monthly billing
            </button>
            <button 
                onClick={() => setActivePriceTab('annual')}
                className={classNames('text-greyLight font-semibold py-3 px-4 cursor-pointer hover:bg-white transition-colors duration-300', activePriceTab === 'annual' && 'bg-white text-greyLight9 font-lato-bold')} type="button">
                Annual billing
            </button>
          </div>
        </div>
      </div>
      <div className='bg-greyLight10 py-[54px]'>
          <div className="px-6 flex justify-center gap-2">
            { pricingOptions.map((item, index) => (
                <div key={index} className='max-w-[450px] min-w-[250px] lg:max-w-[250px] sm:max-w-[350px] w-full bg-white border border-greyLight11'>
                    <div className="w-full">
                        <div className='h-[220px] max-h-[240px] lg:h-[240px] sm:h-[220px] flex flex-col gap-2 p-3'>
                            <p className='text-[21px] text-greyLight2 font-semibold h-[60px]'>{item.title}</p>
                            <div className='flex gap-2 items-center mb-6'>
                                <p className='flex items-start text-[26px] text-greyLight2 font-lato-bold'>
                                    <span className='text-[20px]'>N</span>
                                    {formatNum(activePriceTab === 'monthly' ? item.price : item.price*10)}
                                </p>
                                <p className='text-sm font-lato-bold text-dark'>{activePriceTab === 'monthly' ? 'monthly' : 'annualy'}</p>
                            </div>
                            <button type='button' className='bg-primary hover:border hover:border-primary hover:bg-darkBlue3 hover:text-primary cursor-pointer text-darkBlue transition-all duration-[800ms] h-[44px] px-5 min-w-8 font-bold'>Get Started</button>
                        </div>
                        <div className='p-3'>
                            <div className="flex flex-col gap-3">
                                { item.features.map((feature, id) => (
                                    <div className="flex justify-between gap-3 items-center" key={id}>
                                        <div className="flex items-center gap-2">
                                            <div className='w-[24px] h-[24px]'>
                                                <TickIcon />
                                            </div>
                                            <p className='text-greyLight text-[13px]'>{feature.text}</p>
                                        </div>
                                        <div title={feature.text} className='cursor-pointer w-[20px] h-[20px]'>
                                            <InfoIcon />
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            )) }
          </div>
      </div>
      <div className='bg-brownLight3 sm:py-20 py-4 px-24'>
            <div className="flex items-center justify-center gap-[34px] flex-wrap">
                <div className='w-[686px]'>
                    <h2 className='text-primary text-[36px] leading-[1.2] font-lato-bold'>Why GO54</h2>
                    <p className='text-greyLight12 lg:w-[562px] sm:w-[95%] w-full text-lg font-lato-bold mb-12'>Choose Hostafrica Nigeria Limited Google Workspace Service that goes beyond the basics.</p>
                    <div className='grid grid-rows-2 lg:grid-cols-2 grid-cols-1 text-lg gap-[38px]'>
                        <div>
                            <p className='text-darkBlue2 font-lato-extrabold mb-4'>Authorized Google Cloud Partner</p>
                            <p className='text-greyLight13'>Hostafrica Nigeria Limited  is an official partner of Google Cloud, ensuring that you receive authorized and up-to-date services for your business.</p>
                        </div>
                        <div>
                            <p className='text-darkBlue2 font-lato-extrabold mb-4'>Enhance teamwork with effortless communication</p>
                            <p className='text-greyLight13'>Google Workspace from Hostafrica Nigeria Limited facilitates collaboration, enabling your team to communicate and work together effectively.</p>
                        </div>
                        <div>
                            <p className='text-darkBlue2 font-lato-extrabold mb-4'>Expert Setup and Migration Services</p>
                            <p className='text-greyLight13'>Hostafrica Nigeria Limited  offers expert setup and migration services, ensuring that your move to Google Workspace is smooth, efficient, and hassle-free.</p>
                        </div>
                        <div>
                            <p className='text-darkBlue2 font-lato-extrabold mb-4'>24/7 Customer Support</p>
                            <p className='text-greyLight13'>Need assistance? Our dedicated support team is available 24/7, to provide exceptional support services.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-12'>
                    <Image
                        alt='cloud-img'
                        src={CloudImg}
                        width={525}
                        height={471}
                    />
                </div>
            </div>
      </div>
      <FAQs />
      <div className='flex flex-col lg:flex-row lg:gap-[70px] gap-[50px] md:max-w-[1440px] mx-auto lg:px-0 px-[32px] w-full'>
        <div className='lg:order-1 order-2 justify-center'>
            <Image
                alt='workspace-img'
                src={Workspace2Img}
                width={701}
                height={674}
            />
        </div>
        <div className='lg:order-2 order-1 flex flex-col items-start justify-center md:w-[410px] w-full'>
            <h2 className='md:leading-[1.2] leading-[1.3] text-[30px] mb-4 text-secondary font-lato-bold'>Transform the way your team collaborates online</h2>
            <p className='text-lg mb-4 text-secondary'>Enhance collaboration, communication, and efficiency within your organization using Google Workspace.</p>
            <button type='button' className='bg-primary cursor-pointer text-darkBlue h-[44px] px-5 min-w-8 font-bold hover:opacity-[0.7] transition-opacity duration-500'>Get Google Workspace</button>
        </div>

      </div>
    </main>
  )
}

export default GoogleWorkspaceService