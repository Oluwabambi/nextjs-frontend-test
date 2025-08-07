'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { CancelIcon, CaretDownIcon, CartIcon, LogoIcon, MenuToggleIcon } from './Icons';
import Select from 'react-select';
import { currecyOptions, navbarLinks } from '@/utils/constants';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
  ]);

  return (
    <nav 
      className="sticky top-0 z-[5] bg-white font-lato" 
      id="header-nav"
    >
        <div>
            <div className="max-w-[1640px] mx-auto lg:px-[4.8rem] relative z-[20] flex justify-between gap-5 items-center py-4 lg:px-[77px] px-[24px] text-[#191919]">
                <div className="flex gap-5 items-center justify-center text-greyLight font-bold">
                  <div className='cursor-pointer mr-2'>
                    <LogoIcon />
                  </div>
                  <div className="nav-items">
                    <Link className='pb-1' href={'/'}>Domains</Link>
                    <Link className='pb-1' href={'/about'}>Website and Hosting</Link>
                    <Link className='pb-1' href={'/domains'}>Marketing and Emails</Link>
                    <Link className='pb-1' href={'/contact'}>Business Tools</Link>
                    <Link className='pb-1' href={'/contact'}>Support</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex nav-btns">
                    <button type='button' className='bg-primary cursor-pointer text-darkBlue h-[44px] px-5 min-w-8 font-lato-bold hover:opacity-[0.7] transition-opacity duration-500'>Get Started</button>
                    <button type='button' className='cursor-pointer text-darkBlue border border-primary h-[44px] px-5 min-w-8 font-lato-bold'>Log In</button>
                    <Select
                      options={currecyOptions}
                      defaultValue={currecyOptions[0]}
                      styles={{
                        control: (baseStyles: any) => ({
                          ...baseStyles,
                          height: '44px',
                          borderColor: '#F99C1C',
                          paddingLeft: '10px'
                        }),
                        indicatorSeparator: (baseStyles) => ({
                          ...baseStyles,
                          display: 'none'
                        }),
                        option: (baseStyles, { isSelected, isFocused }) => ({
                          ...baseStyles,
                          backgroundColor: isFocused ? '#DDEBFF' : 'white',
                          color: isSelected ? 'black' : 'black'
                        }),
                      }}
                    />
                  </div>
                  <span className='cursor-pointer mx-5'>
                    <CartIcon />
                  </span>
                  <button 
                    className='cursor-pointer menu-toggle'
                    onClick={() => setShowMenu(true)}
                  >
                    <MenuToggleIcon />
                  </button>
                </div>
            </div>
        </div>
        { showMenu && (
          <div className='fixed inset-0 z-[999] p-5 bg-white sm-menu'>
            <div className="flex items-center justify-between mb-8 gap-2">
              <LogoIcon />
              <div 
                className='w-[30px] cursor-pointer'
                onClick={() => setShowMenu(false)}
              >
                <CancelIcon />
              </div>
            </div>
            <div className='flex flex-col gap-6 mb-10'>
              { navbarLinks.map(({ id, name, items }, index) => (
                <div key={id}>
                  <div className="flex justify-between items-center">
                    <p className='text-greyLight font-medium cursor-pointer'>{name}</p>
                    <div 
                      className='w-[20px] h-[20px] cursor-pointer'
                      onClick={() => setShowMenuItems((prev) => prev.map(item => ({ ...item, active: item.id === id ? !item.active : item.active })))}
                    >
                      <CaretDownIcon d={showMenuItems[index].active ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m19.5 8.25-7.5 7.5-7.5-7.5"} />
                    </div>
                  </div>
                  { showMenuItems[index].active && (
                    items.map((item, index) => (
                      <p key={index}>{item.text}</p>
                    ))
                  ) }
                </div>
              )) }
            </div>

          </div>
        ) }
    </nav>
  )
}

export default Header