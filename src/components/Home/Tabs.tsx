'use client';

import { homeTabs } from '@/utils/constants'
import classNames from 'classnames';
import React, { useState } from 'react'
import styles from './_tabs.module.scss';
import Image from 'next/image';
import { DomainImg } from 'assets';
import { tabsData } from '@/utils/mock-data';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Domains');
    const [currentTab, setCurrentTab] = useState(tabsData[0])

    const renderTab = (key: string) => {
        setActiveTab(key);
        const selectedTab = tabsData.findIndex(tab => tab.key === key);
        setCurrentTab(tabsData[selectedTab]);
    }
  
    return (
        <>
            <div className='md:hidden flex px-[32px] my-[20px]'>
                {homeTabs.map((tab, index) => (
                    <div key={index}>
                        <div
                            key={index}
                            className={classNames('w-1/5 px-[12px] py-[5px] cursor-pointer bg-white items-center justify-center flex', activeTab === tab && '!bg-primary')}
                            onClick={() => renderTab(tab)}
                        >
                            <span className='text-greyLight2 text-sm font-lato-bold'>{tab}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={classNames('md:mx-10 md:p-0 py-[50px] px-[32px]', styles.tabs__container)}>
                    <div className={'md:flex hidden'}>
                        <div className='w-1/6 p-6 bg-white'>&nbsp;</div>
                        {homeTabs.map((tab, index) => (
                                <div 
                                    key={index}
                                    className={classNames('grow-1 p-4 cursor-pointer bg-white items-center justify-center flex', activeTab === tab && '!bg-transparent')}
                                    onClick={() => renderTab(tab)}
                                >
                                    <span className='text-greyLight2 md:text-lg font-lato-bold font-bold'>{tab}</span>
                                </div>
                        ))}
                        <div className='w-1/6 p-4 bg-white'>&nbsp;</div>
                    </div>
                    <div className='w-full max-w-[1640px] lg:px-22 px-[16px] pb-2'>
                        <div className="flex md:flex-row flex-col py-4 px-4 items-center">
                            <div className="md:w-[52%] w-full">
                                <Image
                                    className='h-[90%] w-full'
                                    alt='tabs-img'
                                    src={currentTab.image}
                                    width={550}
                                    height={500}
                                />
                            </div>
                            <div className='flex flex-col gap-4 md:pl-3 md:w-[48%] w-full'>
                                <h2 className='text-[25px] sm:text-[35px] md:text-[48px] text-darkBlue font-lato-bold leading-[1.2]'>{currentTab.title}</h2>
                                <p className='text-secondary text-lg'>{currentTab.description}</p>
                                <div className="flex gap-3 items-center">
                                    { currentTab.buttons.map((btn, index) => (
                                        <button key={index} type='button' className={classNames('text-darkBlue px-5 py-2 flex items-center justify-center h-[48px] md:min-w-[40px] min-w-[42px] whitespace-nowrap', btn.type === 'primary' ? 'bg-primary' : 'bg-white border border-primary' )}>{btn.text}</button>
                                    )) }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Tabs