import Image from "next/image";
import Link from 'next/link';

import Menu from "./Menu";

import styles from './style.module.scss';

export default function Header({
    lang = 'ru'
}: {
    lang: 'ru' | 'cs'
}) {
    return (
        <header className={`${styles.header} flex border-b border-b-light-grey`}>
            <Link className={styles.logo} href={lang !== 'cs' ? `/${lang}` : '/'}>
                <Image
                    className={styles.logo}
                    src="/assets/logo/onescan-logo.svg"
                    alt="Onescan logo"
                    width={142}
                    height={40}
                    priority />
            </Link>
            <Menu lang={lang} />
            <div className='flex flex-col justify-between z-10 items-start md:hidden'>
                <a href='mailto:auto@onescan.pro'
                    className='text-sm whitespace-nowrap'>auto@onescan.pro</a>
                <a href="tel:+420601256408"
                    className='text-sm whitespace-nowrap'>+420 601 256 408</a>
            </div>
        </header>
    );
}