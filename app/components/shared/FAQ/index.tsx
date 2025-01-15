'use client';

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    resetNextUuid,
} from 'react-accessible-accordion';
import { nanoid } from 'nanoid';

import { faq_item } from 'app/pages/home/data';

/**
 * "FAQ" block
 *
 * @param {Array} data          faq data
 * @param {String} dictionary   current dictionary
 *
 * @extends react-accessible-accordion
 */
const FAQ = ({
    data = [],
    dictionary = {
        faq: {
            header: '',
            list: {}
        }
    }
}: {
    data: faq_item[],
    dictionary: {
        faq: {
            header: string;
            list: {
                [name: string]: {
                    header: string;
                    text: string;
                }
            }
        };
    }
}) => {
    // Reset uuid
    // sometimes when moving from another page block is displayed incorrectly (reset id fixes this)
    resetNextUuid();

    return (
        <div className={`border border-light-grey rounded-large pt-[16px] px-[16px] mt-[96px]`} id='faq'>
            <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.faq.header}</h2>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                {data.map((faq: faq_item) => (
                    <AccordionItem key={nanoid()}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {dictionary.faq.list[faq.index].header}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dictionary.faq.list[faq.index].text,
                                }}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
