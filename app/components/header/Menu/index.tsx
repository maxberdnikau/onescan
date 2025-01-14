'use client';

import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';

import { menu, menu_item_type } from './menu';

import { get_dictionary } from "get-dictionary-client";

import styles from './style.module.scss'

/**
 * Header nav menu
 */
const Menu = ({
    lang = 'ru'
}: {
    lang: 'ru' | 'cs'
}) => {
    const [mob_menu_view, toggle_mob_menu_view] = React.useState(false);
    const [dictionary, update_dictionary] = React.useState(null);

    React.useEffect(() => {
        get_dictionary('/header/menu', lang).then(dict => {
            update_dictionary(dict);
        });
    }, []);

    React.useEffect(() => {
        const body: HTMLBodyElement | null = document.querySelector('body');

        // scroll disabled when menu is open
        if (body) {
            if (mob_menu_view) {
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.top = `-${window.pageYOffset}px`;
                body.style.width = '100%';
    
            // return to default values
            } else {
                body.style.overflow = '';
                body.style.position = '';
                body.style.top = ``;
                body.style.width = '';
            }
        }
    }, [mob_menu_view]);

    // elements classes
    let menuButtonClass = `${styles.menuButton} hidden md:flex`,
        menuContainerClass = `${styles.menuContainer}`;

    if (mob_menu_view) {
        menuButtonClass += ` ${styles.menuButton_close}`;
        menuContainerClass += ` ${styles.menuContainer_open}`
    }

    return(
        <div className={`${styles.container} flex items-center w-full`}>
            <button type='button'
                className={menuButtonClass}
                onClick={() => toggle_mob_menu_view(!mob_menu_view)}>

            </button>
            <nav className={`${menuContainerClass} flex w-full md:flex-col`}>
                {
                    menu && dictionary ?
                    <ul className={`${styles.menu} flex md:flex-col`}>
                        {
                            menu.map((menu_item: menu_item_type): React.ReactElement => (
                                <li key={nanoid()}
                                    className={`${styles.menuItem} flex md:border-b md:border-b-light-grey`}>
                                    <Link href={menu_item.link} className='text-sm md:py-[16px] w-full'>
                                        {dictionary[menu_item.name]}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul> : null
                }
                <div className='flex flex-col justify-between z-10 items-start hidden md:flex mt-[16px]'>
                    <a href='mailto:auto@onescan.pro' className='text-sm whitespace-nowrap'>auto@onescan.pro</a>
                    <a href="tel:+420601256408" className='text-sm whitespace-nowrap mt-[6px]'>+420 601 256 408</a>
                </div>
            </nav>
        </div>
    )
}

export default Menu;