'use client';

import React from 'react';
import { useForm } from '@formspree/react';

import SendMessage from './SendMessage';

import styles from './style.module.scss';

const message_close_timeout = 3000;

/**
 * Form on home page
 */
const Form = ({
    dictionary = {
        form: {
            input_title: "",
            submit: "",
            success_msg: ""
        }
    }
}) => {
    const [phone, update_phone] = React.useState('');
    const [show_message, toggle_show_message] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, handleSubmit] = useForm("xwkyqjpb");

    /**
     * Add listener when open form message after form submit and remove
     */
    React.useEffect(() => {
        if (show_message) window.addEventListener('keydown', key_listener);
        else window.removeEventListener('keydown', key_listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show_message])

    /**
     * Key down listener for `esc`
     * 
     * @param {Object} e   keydown data 
     */
    const key_listener = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            toggle_show_message(false);
            window.removeEventListener('keydown', key_listener);
        }
        
        // after cleaner event listener
        if (show_message === false) window.removeEventListener('keydown', key_listener);
    }

    /**
     * Submit handler
     * 
     * @param {Element} e   form
     */
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const form = e.target

    //     fetch('/',
    //         {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //             body: 
    //                 encode({
    //                     'form-name': form.getAttribute('name'),
    //                     phone
    //                 }),
    //         })
    //     // .then(() => navigate(form.getAttribute('action')))
    //     .catch((error) => alert(error))
    // }

    return(
        <div>
            <form className={`${styles.form} mt-[16px] flex flex-col w-full`}
                // method="post"
                // name='contact'
                // action="/"
                onSubmit={e => {
                    handleSubmit(e);
                    update_phone('');
                    toggle_show_message(true);
                    setTimeout(() => {
                        toggle_show_message(false);
                    }, message_close_timeout);
                }}
                // data-netlify="true"
                // data-netlify-honeypot="bot-field"
                >
                {/* <input type="hidden" name="form-name" value="contact" /> */}
                <input
                    className={`${styles.form__input} text-center text-2xl placeholder:text-dark-grey`}
                    type='tel'
                    name='phone'
                    placeholder='+420 601 256 408'
                    pattern="+[0-9]{12}"
                    title={dictionary.form.input_title}
                    value={phone}
                    maxLength={13}
                    onKeyPress={(e) => {
                        if (!isFinite(+e.key) && e.key !== '+') e.preventDefault()
                    }}
                    onChange={(e) => update_phone(e.target.value)} />
                <button
                    type='submit'
                    className={`${styles.form__submit} text-2xl hover:opacity-75 active:opacity-75`}>
                    {dictionary.form.submit}
                </button>
            </form>
            <SendMessage
                show={show_message}
                success_msg={dictionary.form.success_msg} />
        </div>
    )
}

export default Form;