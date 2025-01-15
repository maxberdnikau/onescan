import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";

import SiteWrapper from "app/components/site-wrapper";
import Slider from "app/components/main/home/Slider";
import Form from "app/components/main/home/Form";

import { get_dictionary } from "get-dictionary";

import { check_item, check_list, price_item, price_list } from "./data";

import styles from './style.module.scss';

export default async function HomeComponent({
    lang = 'cs'
}: {
    lang: 'ru' | 'cs'
}) {
    const dictionary = await get_dictionary('/home/main', lang);

    return (
        <SiteWrapper lang={lang}>
            <main className='flex flex-col w-full pb-[180px]'>
                <h1 className='text-5xl md:text-4xl sm:text-2xl mt-32px font-bold text-center'>{dictionary.main_text}</h1>

                <div className='rounded-large overflow-hidden mt-16px'>
                    <Slider />
                </div>

                <p className='text-2xl sm:text-xl mt-24px text-center font-medium text-dark-grey'>
                    {dictionary.description}
                </p>
                
                <section className='mt-[96px] border border-light-grey py-24px rounded-large'>
                    <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.section_1.header}</h2>
                    <p className='mt-16px text-center font-medium text-dark-grey max-w-textContainer mx-auto'>{dictionary.section_1.text}</p>

                    <ul className='flex flex-wrap mt-24px'>
                        {
                            check_list.map((check_item: check_item) => (
                                <li className={`${styles.checkItem} border-r border-r-light-grey border-t border-t-light-grey`} key={nanoid()}>
                                    <div className={styles.checkItem__image}>
                                        <Image
                                            src={check_item.image}
                                            alt={`car check image ${check_item.index}`}
                                            width={172}
                                            height={120} />
                                    </div>
                                    <p className={`${styles.checkItem__header} font-bold text-xl`}>{dictionary.section_1.list[check_item.index].header}</p>
                                    <p className={`${styles.checkItem__text} text-xm`}>{dictionary.section_1.list[check_item.index].text}</p>
                                </li>
                            ))
                        }
                    </ul>

                </section>

                <section className='mt-[96px] border border-light-grey pt-16px px-12px pb-32px bg-grey rounded-large flex flex-col'
                    id='prices'>
                    <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.section_2.header}</h2>
                    <p className='mt-16px text-center font-medium text-dark-grey max-w-textContainer mx-auto text-base'>
                        {dictionary.section_2.text_1}
                    </p>

                    <ul className='flex flex-wrap justify-between mt-24px'>
                        {
                            price_list.map((service: price_item) => (
                                <li key={nanoid()}
                                    className={`${styles.priceItem} rounded-large border-2 flex flex-col p-12px`}>
                                    <div className='flex'>
                                        {
                                            service.image ?
                                            <Image
                                                className={`${styles.priceItem__image} mr-4px`}
                                                src={service.image}
                                                width={64}
                                                height={64}
                                                alt={``} /> : null
                                        }
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-lg'>{dictionary.section_2.list[service.index].header}</p>
                                            <p className='font-bold text-4xl'>{dictionary.section_2.list[service.index].price}</p>
                                        </div>
                                    </div>
                                    <p className='font-medium mt-[4px] text-sm text-dark-grey'>{dictionary.section_2.list[service.index].description}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <p className='mt-24px text-center font-medium text-dark-grey max-w-textContainer mx-auto text-base'>
                        {dictionary.section_2.text_2}
                    </p>
                    <div className='mt-[24px] flex'>
                        <Link href={'/services'}
                            className='text-2xl pt-[7px] pb-[9px] px-24px border border-black rounded-large mx-auto default-button'>
                            {dictionary.section_2.link}
                        </Link>
                    </div>
                </section>

                <div className='mt-[96px] flex'>
                    <div className={`${styles.formContainer} border border-light-grey bg-grey rounded-large flex flex-col items-center`}>
                        <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.form.header}</h2>

                        <Form dictionary={dictionary} />

                        <p className='mt-[16px] font-bold text-base md:text-sm'>{dictionary.form.text}</p>
                        <div>
                            <a href='https://wa.me/420601256408'
                                target="_blank"
                                rel='noreferrer'>
                                <Image className='mt-4px'
                                    src={'assets/icons/whatsapp.svg'}
                                    alt='WU icon'
                                    width={32}
                                    height={32} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <Faq data={faq.faq_list} /> */}

            </main>
        </SiteWrapper>
    );
}