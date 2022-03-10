import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_USER_ID);

function ContactUs() {
    const form = useRef();
    // console.log('Hi emailjs');
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current
            )
            .then(
                (result) => {
                    console.log('result :>> ', result);
                    console.log('form :>> ', form);
                    console.log(result.text);
                },
                (error) => {
                    // console.log('error :>> ', error);
                    console.log(error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactUs;
