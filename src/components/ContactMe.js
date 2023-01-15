import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactMe.module.scss";


const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w0ml4lj', 'template_n07bbnm', form.current, '0IjdYf2NpdvqqWX2u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contactme">
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <div className={styles['left']}>
            <h1 className={styles.header}>Say Hello!</h1>
            <label className={styles.label}>Name</label>
            <input className={styles['input-name']} type="text" name="from_name" />
            <input type="hidden" name="to_name" value="Stefan" />
            <label className={styles.label}>Phone Number</label>
            <input className={styles['input-phone']} type="text" name="phone_number" />
            <label className={styles.label}>Email</label>
            <input className={styles['input-email']} type="email" name="user_email" />
          </div>
          <div className={styles.right}>
            <label className={styles['label-message']}>Message</label>
            <textarea className={styles['input-message']} name="message" />
            <input className={styles.button} type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
