import Link from "next/link";
import Image from "next/image";

import SiteWrapper from "app/components/site-wrapper";

import { get_dictionary } from "get-dictionary";

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
                <h1 className='text-5xl md:text-4xl sm:text-2xl mt-[32px] font-bold text-center'>{dictionary.main_text}</h1>

                {/* <div className='rounded-large overflow-hidden mt-[16px]'>
                    <Slider slides={slider.slides} />
                </div> */}

                <p className='text-2xl sm:text-xl mt-[24px] text-center font-medium text-dark-grey'>
                    {dictionary.description}
                </p>
                
                <section className='mt-[96px] border border-light-grey py-[24px] rounded-large'>
                    <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.section_1.header}</h2>
                    <p className='mt-[16px] text-center font-medium text-dark-grey max-w-textContainer mx-auto'>{dictionary.section_1.text}</p>

                    {/* <ul className='flex flex-wrap mt-[24px]'>
                        {
                            check_list && check_list.check_list.map((check_item, index) => {
                                const check_item_description_list = check_item.text.split(check_list_slash);
        
                                return(
                                    <li className={`${styles.checkItem} border-r border-r-light-grey border-t border-t-light-grey`} key={index}>
                                        {
                                            image_data && image_data[check_item.image+''] ?
                                            <div className={styles.checkItem__image}>
                                                <GatsbyImage 
                                                    image={{
                                                            ...image_data[check_item.image+''].childImageSharp.gatsbyImageData,
                                                            sizes: '(min-width: 1400px) 1900px, (min-width: 1000px) 1000px, (min-width: 700px) 700px, (min-width: 300px) 300px',
                                                        }}
                                                    alt={check_item.header ? check_item.header : 'Список проверки'} />
                                            </div> : null
                                        }
                                        <p className={`${styles.checkItem__header} font-bold text-xl`}>{check_item.header}</p>
                                        {
                                            check_item.text_type === 'list' ?
                                            <ul className={`${styles.checkItem__text} text-xm m-0 list-disc flex flex-col items-center`}>
                                                {
                                                    check_item_description_list.map((item, index) => (
                                                        <li key={index}>
                                                            <p className={`text-inherit text-xm m-0`}>{item}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul> : <p className={`${styles.checkItem__text} text-xm`}>{check_item.text}</p>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul> */}

                </section>

                <section className='mt-[96px] border border-light-grey pt-[16px] px-[12px] pb-[32px] bg-grey rounded-large flex flex-col' id='prices'>
                    <h2 className='text-4xl md:text-3xl sm:text-xl font-bold text-center'>{dictionary.section_2.header}</h2>
                    <p className='mt-[16px] text-center font-medium text-dark-grey max-w-textContainer mx-auto text-base'>
                        {dictionary.section_2.text_1}
                    </p>

                    {/* <ul className='flex flex-wrap justify-between mt-[24px]'>
                        {
                            price && price.price.map((service, index) => (
                                <li key={index} className={`${styles.priceItem} rounded-large border-2 flex flex-col p-[12px]`}>
                                    <div className='flex'>
                                        {
                                            service.image ?
                                            <img className={`${styles.priceItem__image} mr-[4px]`} src={service.image} alt={service.header} /> : null
                                        }
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-lg'>{service.header}</p>
                                            <p className='font-bold text-4xl'>{service.price}</p>
                                        </div>
                                    </div>
                                    <p className='font-medium mt-[4px] text-sm text-dark-grey'>{service.description}</p>
                                </li>
                            ))
                        }
                    </ul> */}

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

                        {/* <Form /> */}

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