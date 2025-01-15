import React from 'react';

import styles from './style.module.scss';

const anim_timeout = 500;

/**
 * Message after form submit
 * 
 * @param {Boolean} show            is message shows
 * @param {Boolean} success_msg
 * 
 * @extends Form
 */
const SendMessage = ({
    show = true,
    success_msg = '',
}: {
    show: boolean,
    success_msg: string
}) => {
    const modalRef = React.useRef<HTMLDivElement>(null);

    /**
     * Message show work
     */
    React.useEffect(() => {
        const modal = modalRef.current;
        const body = document.getElementsByTagName('body')[0];
        
        if (modal) {
            // show
            if (show) {
                modal.style.display = 'flex';
                body.style.overflow = 'hidden';
    
                setTimeout(() => {
                    if (modal) modal.style.opacity = '1';
                }, 4);
            // hide
            } else {
                modal.style.opacity = '';
                
                setTimeout(() => {
                    if (modal) modal.style.display = '';
                    if (body) body.style.overflow = '';
                }, anim_timeout);
            }
        }
    }, [show])

    return (
        <div className={`${styles.container} flex`}
            ref={modalRef}>
            <div className={`${styles.messageContainer} sm:mx-[8px] m-auto rounded-large`}>
                <p className={`text-base font-bold text-center whitespace-break-spaces`}>
                    {success_msg}
                </p>
            </div>
        </div>
    )
}

export default SendMessage;