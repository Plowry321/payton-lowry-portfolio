import { useRef, useState } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form: any = useRef();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_mkcg78f', 'template_k5hmm5q', form.current, '535laH1v5KbL0InVG')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });

        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} id="form">
                <label>Name</label>
                <input className='input' type="text" name="user_name" placeholder="Enter your name..." onChange={event => setUserName(event.target.value)} value={userName} required />
                <label>Email</label>
                <input className='input' type="email" name="user_email" placeholder="Enter your email address..." onChange={event => setEmail(event.target.value)} value={email} required />
                <label>Message</label>
                <textarea className="message" name="message" placeholder="Enter your message..." onChange={event => setMessage(event.target.value)} value={message} required />
                <input className='submit' type="submit" value="Send" />
            </form>
        </div>
    );
};