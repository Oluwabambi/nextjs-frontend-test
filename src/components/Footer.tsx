'use client';

import React from 'react'
import { FacebookIcon, FooterLogo, InstagramIcon, LinkedinIcon, TwitterIcon, WebIcon, WorkspaceIcon, YoutubeIcon } from './Icons';
import Select, { components } from 'react-select';
import { Country, ICountry } from 'country-state-city';
import { languageOptions } from '@/utils/constants';

const Footer = () => {
  const getCountries = Country.getAllCountries().map((item: ICountry) => ({
    label: item.name,
    value: item.name,
    flag: item.flag
  }));

  const defaultCountry = getCountries.find(item => item.value === 'Nigeria');
  const formatOptionLabel = ({ flag, value }: { flag: string; value: string }) => (
    <div className="flex items-center gap-2">
        <span>{flag}</span>
        <span>{value}</span>
    </div>
  );

  const Control = ({ children, ...props }: any) => (
    <components.Control {...props}>
      <WebIcon /> {children}
    </components.Control>
  );

  return (
    <footer className='bg-darkBlue2 pb-[100px]'>
      <div className="md:px-9 px-4">
        <div className='flex md:flex-row flex-col md:items-center justify-between py-6 md:px-8 px-3 md:flex-nowrap gap-2'>
          <FooterLogo />
          <div className='flex md:flex-nowrap flex-wrap gap-3'>
            <p className='md:max-w-[365px] w-full md:text-end mr-2 text-greyLight6'>Join over 100k entrepreneurs and businesses already growing with GO54.</p>
            <button className='bg-white border border-primary h-[48px] min-w-10 text-darkBlue px-[30px]' type="button">Log in</button>
            <button className='bg-primary h-[48px] text-darkBlue px-[30px]' type="button">Get Started</button>
          </div>
        </div>
      </div>
      <hr className='border-greyLight7 opacity-[0.6]'/>
      <div className='max-w-[1640px] mx-auto w-full lg:px-[4.8rem] py-0 px-[24px]'>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 pb-6 gap-10'>
          <div className="flex flex-col gap-10 text-greyLight6">
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Products</p>
              <a className='text-inherit' href="#">Domain Registration</a>
              <a className='text-inherit' href="#">Domain Transfer</a>
              <a className='text-inherit' href="#">Shared Hosting</a>
              <a className='text-inherit' href="#">Dedicated Cloud Hosting</a>
              <a className='text-inherit' href="#">VPS Cloud Hosting</a>
              <a className='text-inherit' href="#">Wordpress Hosting</a>
              <a className='text-inherit' href="#">Professional Emails</a>
              <a className='text-inherit' href="#">Marketplace</a>
              <a className='text-inherit' href="#">Marketing Tools</a>
              <a className='text-inherit' href="#">Create Link-in-bio</a>
            </div>
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Programs</p>
              <a className='text-inherit' href="#">Affiliate Program</a>
              <a className='text-inherit' href="#">Reseller Program</a>
            </div>
          </div>
          <div className="flex flex-col gap-10 text-greyLight6">
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Services</p>
              <a className='text-inherit' href="#">Build a Website</a>
            </div>
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Support/Help Center</p>
              <a className='text-inherit' href="#">Chat with us</a>
              <a className='text-inherit' href="#">Knowledgeable</a>
              <a className='text-inherit' href="#">System Status</a>
              <a className='text-inherit' href="#">Report Abuse</a>
            </div>
          </div>
          <div className="flex flex-col gap-10 text-greyLight6">
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Tools</p>
              <a className='text-inherit' href="#">WHOIS Lookup</a>
              <a className='text-inherit' href="#">DNS Checker</a>
              <a className='text-inherit' href="#">Promos/Coupons</a>
              <a className='text-inherit' href="#">Link-in-bio</a>
              <a className='text-inherit' href="#">Website Builder</a>
            </div>
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Resources</p>
              <a className='text-inherit' href="#">API Documetation</a>
              <a className='text-inherit' href="#">How-to Videos</a>
            </div>
          </div>
          <div className="flex flex-col gap-10 text-greyLight6">
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Company</p>
              <a className='text-inherit' href="#">About GO54</a>
              <a className='text-inherit' href="#">Contact Us</a>
              <a className='text-inherit' href="#">Careers</a>
              <a className='text-inherit' href="#">Our Blog</a>
              <a className='text-inherit' href="#">Media Assets</a>
              <a className='text-inherit' href="#">Partner with Us</a>
              <a className='text-inherit' href="#">Product Catalog</a>
              <a className='text-inherit' href="#">Acquisition</a>
            </div>
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <p className='text-primary-200'>Account</p>
              <a className='text-inherit' href="#">Manage Products</a>
              <a className='text-inherit' href="#">Register/Login</a>
            </div>
          </div>
          <div className="flex flex-col xl:items-center items-start flex-wrap lg:flex-nowrap gap-[32px] text-greyLight6">
            <div className='flex flex-col gap-5 font-medium items-start text-greyLight6'>
              <div className='flex items-center gap-6'>
                <a className='outline-2 outline-transparent' href="#">
                  <TwitterIcon />
                </a>
                <a className='outline-2 outline-transparent' href="#">
                  <LinkedinIcon />
                </a>
                <a className='outline-2 outline-transparent' href="#">
                  <FacebookIcon />
                </a>
              </div>
              <div className='flex items-center gap-6'>
                <a className='outline-2 outline-transparent' href="#">
                  <YoutubeIcon />
                </a>
                <a className='outline-2 outline-transparent' href="#">
                  <InstagramIcon />
                </a>
                <a className='outline-2 outline-transparent' href="#">
                  <WorkspaceIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center md:justify-end lg:flex-nowrap flex-wrap md:gap-[20px] gap-[13px]'>
          <div className='md:w-[270px] w-full'>
            <Select 
              options={getCountries}
              defaultValue={defaultCountry}
              formatOptionLabel={formatOptionLabel}
              styles={{
                container: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  height: '44px',
                  borderColor: isFocused ? '#F99C1C' : '#F99C1C',
                  backgroundColor: 'transparent',
                }),
                control: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  height: '44px',
                  borderColor: isFocused ? '#F99C1C' : '#F99C1C',
                  paddingLeft: '10px',
                  backgroundColor: 'transparent',
                }),
                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: 'none'
                }),
                option: (baseStyles, { isSelected, isFocused }) => ({
                  ...baseStyles,
                  backgroundColor: isFocused ? '#eaeaea' : 'white',
                  color: isSelected ? '#1A202C' : '#1A202C'
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  overflow: 'auto',
                  maxHeight: '180px'
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: 'white'
                })
              }}

            />
          </div>
          <div className='md:w-[118px] w-[131px]'>
            <Select 
              options={languageOptions}
              defaultValue={languageOptions[0]}
              styles={{
                container: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  height: '44px',
                  borderColor: isFocused ? '#F99C1C' : '#F99C1C',
                  backgroundColor: 'transparent',
                }),
                control: (baseStyles, { isFocused }) => ({
                  ...baseStyles,
                  height: '44px',
                  borderColor: isFocused ? '#F99C1C' : '#F99C1C',
                  paddingLeft: '10px',
                  backgroundColor: 'transparent',
                }),
                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: 'none'
                }),
                option: (baseStyles, { isSelected, isFocused }) => ({
                  ...baseStyles,
                  backgroundColor: isFocused ? '#DDEBFF' : 'white',
                  color: isSelected ? '#1A202C' : '#1A202C'
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: 'white'
                })
              }}
              components={{ Control }}
            />
          </div>
        </div>
      </div>
      <div className='max-w-[1640px] mx-auto w-full lg:px-[4.8rem] py-0 px-[24px]'>
        <div className="flex flex-col gap-[32px] mt-6">
          <hr className='opacity-60 border-greyLight7' />
          <div className='md:flex-nowrap flex-wrap md:p-0 p-[32px] flex items-center justify-between'>
            <p className='text-greyLight14'><span>&copy; </span>2025 GO54 . All rights reserved.</p>
            <ul className='flex items-center ml-4 gap-[42px] text-greyLight6 list-[initial]'>
              <li>Refund Policy</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer