'use client';

import { PlusIcon } from '@/components/Icons'
import { faqOptions } from '@/utils/constants'
import classNames from 'classnames'
import React, { useState } from 'react'

const FAQs = () => {
    const [showAnswers, setShowAnswers] = useState([
        { id: 1, isShown: false },
        { id: 2, isShown: false },
        { id: 3, isShown: false },
    ])

    return (
        <div className='md:w-[768px] my-[69px] w-full mt-[96px] mb-[50px] px-8 mx-auto'>
            <h2 className='font-lato-extrabold mb-[64px] md:text-[36px] text-2xl md:leading-[1.2]'>Frequently asked questions about Google Workspace</h2>
            <div className='flex flex-col'>
                { faqOptions.map((faq, index) => (
                    <div key={index} className={classNames('flex flex-col py-9', index < 2 && 'border-b border-b-greyLight11')}>
                        <div className="flex justify-between mb-2">
                            <p className='font-lato-bold text-lg'>{faq.question}</p>
                            <span 
                                className='cursor-pointer'
                                onClick={() => setShowAnswers((prev) => prev.map(item => ({ ...item, isShown: item.id === faq.id ? !item.isShown : item.isShown })))}
                            >
                                <PlusIcon d={showAnswers[index].isShown ? 'M8 12.4775H16M22 12.4775C22 18.0004 17.5228 22.4775 12 22.4775C6.47715 22.4775 2 18.0004 2 12.4775C2 6.95469 6.47715 2.47754 12 2.47754C17.5228 2.47754 22 6.95469 22 12.4775Z' : 'M12 8.47754V16.4775M8 12.4775H16M22 12.4775C22 18.0004 17.5228 22.4775 12 22.4775C6.47715 22.4775 2 18.0004 2 12.4775C2 6.95469 6.47715 2.47754 12 2.47754C17.5228 2.47754 22 6.95469 22 12.4775Z'} />
                            </span>
                        </div>
                        { showAnswers[index].isShown && (
                            <p className='md:w-[720px] text-greyLight'>{faq.answer}</p>
                        ) }
                    </div>
                )) }
            </div>
        </div>
    )
}

export default FAQs