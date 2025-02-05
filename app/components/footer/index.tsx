import Link from 'next/link';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import { footer_item_type, footer_menu } from './data';

import { get_dictionary } from 'get-dictionary';

// import { FOOTER_TEXT } from '../../const/lang/footer'

import styles from './style.module.scss'

export default async function Footer ({
    lang = 'ru'
}: {
    lang: 'ru' | 'cs'
}) {
    const dictionary = await get_dictionary('/footer', lang);

    return (
        <footer className={`${styles.footer} w-full default-container mt-auto mx-auto border-t border-t-light-grey flex flex-col`}>
            <section>
                <nav>
                    <ul className='flex justify-center'>
                        {
                            dictionary && footer_menu.map((item: footer_item_type) => (
                                <li key={nanoid()} className={`${styles.footerLink} text-sm`}>
                                    <Link href={lang !== 'cs' ? `/${lang}${item.link}` : item.link}>
                                        {dictionary[item.name]}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
            <section className='flex justify-center mt-24px'>
                <a href='mailto:auto@onescan.pro' className={`${styles.footerLink} text-sm whitespace-nowrap`}>auto@onescan.pro</a>
                <a href="tel:+420601256408" className={`${styles.footerLink} text-sm whitespace-nowrap`}>+420 601 256 408</a>
            </section>
            <Link href={lang !== 'cs' ? `/${lang}` : '/'}
                className={`${styles.logo} mx-auto mt-24px`}>
                <Image src={'/assets/logo/onescan-logo.svg'}
                    alt="footer Onescan logo"
                    width={142}
                    height={40} />
            </Link>
            <section className='flex justify-center mt-16px'>
                <p className='text-sm text-center'>{dictionary["bottom_text"]}</p>
            </section>
            <section className='flex mt-16px justify-center'>
                {
                    lang === 'cs' ?
                    <Link href="/ru">
                        RU
                    </Link> :
                    <Link href="/">
                        CZ
                    </Link>
                }
            </section>
        </footer>
    );
}