
import { useEffect, useState } from 'react';
import MailIcon from '../icons/mail';

export default function Notification({ setNotify, msg }) {

    const [show, setShow] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setShow(false);

        }, 5000);
    })
    const onAnimationEnd = () => {
        if (!show) setNotify(false);
    };

    return (
        <div className="errorBox"

            style={{ animation: `${show ? "fadeIn" : "fadeOut"} 200ms ease-in-out` }}
            onAnimationEnd={onAnimationEnd}>
            <span style={{color:"blue"}}>
                <MailIcon />
                &nbsp;Message&nbsp;:
            </span>
            <p>{String(msg)}</p>
        </div>)
}