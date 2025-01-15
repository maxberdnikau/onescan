import styles from './style.module.scss';

export default function Form ({
    dictionary = {
        form: {
            mail: "",
        }
    }
}) {
    return(
        <div className='flex flex-col w-[378px] sm:w-full mt-16px'>
            <a href="mailto:auto@onescan.pro"
                className={`${styles.link} text-center py-8px px-16px text-2xl hover:opacity-75 active:opacity-75`}
                target='_blank'
                rel='noreferrer'>
                {dictionary.form.mail}
            </a>
        </div>
    )
};